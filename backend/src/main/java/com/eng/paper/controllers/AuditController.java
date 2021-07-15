package com.eng.paper.controllers;

import java.util.List;
import java.util.Map;
import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Authorized;
import com.eng.paper.common.Entity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AuditController extends AbstractController {

    @Override
    protected Map<String, String> conditions() {
        return Map.of("id", " and id = :id ", "username_like",
                " and lower(username) like lower( '%'||:username_like||'%')", "method", " and method in (:method)", "url",
                " and url = :url ", "url_like", " and lower(url) like lower('%'||:url_like||'%')", "status",
                " and status in (:status)", "at_start", " and at >= :at_start ", "at_end", " and at <= :at_end ");
    }

    @Override
    protected List<String> ordering() {
        return List.of("id", "at");
    }

    @GetMapping("/audits")
    @Authenticated
    @Authorized({ "admin" })
    @Override
    public List<Entity> list(@RequestParam MultiValueMap<String, Object> parameters,
                            @RequestParam(defaultValue = "0") Long offset,
                            @RequestParam(defaultValue = "10") Long limit,
                            @RequestParam(defaultValue = "at") String sort,
                            @RequestParam(defaultValue = "desc") String direction,
                            @RequestParam(defaultValue = "false" ) boolean no_count
            ) {
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }

    @GetMapping("/audits/{id}")
    @Authenticated
    @Authorized({ "admin" })
    @Override
    public Entity get(@PathVariable String id) {
        return super.get(id);
    }

    @Override
    protected String view() {
        return "audit";
    }

}
