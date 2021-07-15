package com.eng.paper.controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Authorized;
import com.eng.paper.common.Entity;
import static com.eng.paper.common.Entity.*;
import static com.eng.paper.common.Util.*;

import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AuditReportController extends AbstractController {

    @Override
    protected Map<String, String> conditions() {
        return Map.of();
    }

    @Override
    protected List<String> ordering() {
        return List.of("id", "at");
    }

    @Override
    protected String table() {
        return "audit_report";
    }

    @Override
    protected String view() {
        return "audit_report";
    }

    @GetMapping("/audits/report")
    @Authenticated
    @Authorized({ "admin" })
    @Override
    public List<Entity> list(@RequestParam MultiValueMap<String, Object> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "at") String sort, @RequestParam(defaultValue = "desc") String direction,
            @RequestParam(defaultValue = "false") boolean no_count) {
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }

    @GetMapping("audits/report/functions")
    @Authenticated
    @Authorized({ "admin" })
    public List<Entity> functions(@RequestParam MultiValueMap<String, Object> parameters) {

        String time = " where at < substring(( :at_end )::text , 0 , 11) and at > substring(( :at_start )::text , 0 , 11) ";
        String condition = parameters.containsKey("at_start") && parameters.containsKey("at_end") ? time : " ";
        String sql = "  select url, method , status , sum(qty) as qty from audit_report ar " + condition
                + " group by url , method , status order by url , method ";

        debug(sql);
        return template.queryForList(sql, parameters).stream().map(e -> build(e).normalize())
                .collect(Collectors.toList());
    }

}
