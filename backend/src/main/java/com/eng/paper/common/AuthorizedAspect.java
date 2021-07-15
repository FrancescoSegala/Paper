package com.eng.paper.common;

import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
@Aspect
public class AuthorizedAspect {

    @Before("@annotation(com.eng.paper.common.Authorized)")
    public void authorize(JoinPoint p) {

        Authorized annotation = ((MethodSignature) p.getSignature()).getMethod().getAnnotation(Authorized.class);
        String[] roles = annotation.value();
        if (! userHasRoles(roles)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "You must have one of the following permission: "+ Arrays.asList(roles));
        }
    }

    private boolean userHasRoles(String[] roles) {
        User user = User.user();
        return  Arrays.stream(roles)
         .anyMatch(e -> user.roles.contains(e));
    }

}
