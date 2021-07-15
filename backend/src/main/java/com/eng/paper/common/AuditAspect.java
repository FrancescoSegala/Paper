package com.eng.paper.common;

import static com.eng.paper.common.User.user;
import static com.eng.paper.common.Util.debug;
import static com.eng.paper.common.Util.error;
import static com.eng.paper.common.Util.info;
import static com.eng.paper.common.Util.stringfy;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.CodeSignature;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
@Aspect
public class AuditAspect {

    @Value("${audit.persist:false}")
    private boolean persist_audit;

    @Value("${audit.retention:14}")
    private int retention_audit;

    @Autowired(required = false)
    private HttpServletRequest request;

    @Autowired
    NamedParameterJdbcOperations template;

    @Around("@annotation(com.eng.paper.common.Audit)")
    public Object log(ProceedingJoinPoint p) throws Throwable {

        Long start = Instant.now().toEpochMilli();
        Object result = null;
        Object body = getBody(p);
        try {
            result = p.proceed();
            boolean traceResponse = ((MethodSignature) (p.getSignature())).getMethod().getAnnotation(Audit.class)
                    .value();
            persistAudit(result, body, HttpStatus.OK.value(), traceResponse);
        } catch (ResponseStatusException e) {
            persistAudit(Map.of("reason", e.getReason(), "status", e.getStatus()), body, e.getStatus().value(), true);
            throw e;
        } catch (Exception e) {
            persistAudit(Map.of("message", e.getMessage()), body, HttpStatus.INTERNAL_SERVER_ERROR.value(), true);
            throw e;
        } finally {
            Long end = Instant.now().toEpochMilli();
            debug("Executing method: " + p.getSignature().getDeclaringTypeName() + "." + p.getSignature().getName()
                    + " , execution time: " + (end - start) + " ms");
        }

        return result;
    }

    private void persistAudit(Object result, Object body, int status, boolean traceResponse) {
        if (!persist_audit) {
            return;
        }

        String sql = "INSERT INTO audit ( %s )  VALUES( %s )";
        //@formatter:off
        Map<String , Object > params = Map.of(
            "id" , UUID.randomUUID().toString(),
            "username" , user() == null ? "system" : user().name,
            "at" , Instant.now().toString(),
            "url", request.getRequestURI(),
            "method" , request.getMethod(),
            "request", stringfy(request.getMethod().equals("GET") ?  request.getParameterMap() : body ),
            "response", stringfy( traceResponse ? result : Map.of("NotTraced", true ) ) ,
            "status", status
        );
        debug(stringfy(params));
        sql = String.format(
            sql,
            params.keySet().stream().collect(Collectors.joining(",")),
            params.keySet().stream().map(e -> ":" + e).collect(Collectors.joining(","))
        );
	    //@formatter:on
        try {
            template.update(sql, params);
        } catch (Exception e) {
            error(e.getMessage());
        }
    }

    private Object getBody(JoinPoint joinPoint) {

        CodeSignature signature = (CodeSignature) joinPoint.getSignature();

        for (int i = 0; i < joinPoint.getArgs().length; i++) {

            String parameterName = signature.getParameterNames()[i];

            if (parameterName.equals("body")) {
                return joinPoint.getArgs()[i];
            }
        }
        return null;
    }

    // "*/15 * * * * *" --> every 15 secs
    // 0 5 */14 * * * --> every 14 days
    // 0 0 * * * * --> every day at midnight
    @Scheduled(cron = "0 0 0 * * *")
    private void clearAudit() {
        if (!persist_audit) {
            return;
        }
        int rows = 0;
        String sql = "DELETE FROM audit WHERE status = '200' AND  \"at\" < :retention ";
        String limitTime = Instant.now().minus(retention_audit, ChronoUnit.DAYS).toString();
        debug(sql);
        try {
            rows = template.update(sql, Map.of("retention", limitTime));
        } catch (Exception e) {
            error(e.getMessage());
        }
        info("Successful status log before " + limitTime + " has been deleted from persistence. Rows affected = "
                + rows);
    }


    @Scheduled(cron = "0 0 1 * * *")
    private void auditReport(){
        if (!persist_audit) {
            return;
        }
        String query = "select count(*) from audit_report ar where at = substring((current_date - 1 )::text , 0 , 11)";
        debug(query);
        int res = template.queryForObject(query, Map.of(), Integer.class);
        if (res > 0 ){
            return;
        }
        String sql = "insert into audit_report select substring(at, 0 , 11) as date ,  split_part( url , '/' , 3 ) as url ,method ,  status , count(*) as qty  "+
        " from audit where substring(at, 0 , 11) = substring((current_date - 1 )::text , 0 , 11) "+
        " group by substring(at, 0 , 11),  url, method, status ";
        debug(sql);
        try {
            template.update(sql, Map.of( ));
        } catch (Exception e) {
            error(e.getMessage());
        }
        info("Successful audit_report saved.");
    }

}
