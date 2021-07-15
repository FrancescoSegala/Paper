package com.eng.paper.common;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import static com.eng.paper.common.Util.*;

@Component
@Aspect
@Order(99)
public class ClearAuthenticatedAspect {




    @After("@annotation(com.eng.paper.common.Authenticated)")
    public void clear(){
        debug("Unsetting user...");
        User.setUser(null);
    }


}
