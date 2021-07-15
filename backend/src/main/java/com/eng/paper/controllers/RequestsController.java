package com.eng.paper.controllers;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Map;


import static com.eng.paper.common.Util.*;
import static com.eng.paper.common.Validators.*;
import static com.eng.paper.common.Entity.*;

import com.eng.paper.common.Audit;
import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Authorized;
import com.eng.paper.common.Entity;
import com.eng.paper.common.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class RequestsController extends AbstractController {


    @Autowired
    PracticesController practiceController;


    //@formatter:off
    @Override
    protected Map<String, String> conditions() {
        return new Entity()
            .with("id", " and id = :id")
            .with("id_like" , " and id like  '%'||:id_like||'%'" )
            .with("created_start", " and created_at >= :created_start ")
            .with("created_end", " and created_at <= :created_end ")
            .with("created_by" , " and created_by = :created_by ")
            .with("request_id", " and request_id = :request_id ")
            .with("completed_start", " and completed_at >= :completed_start ")
            .with("completed_end", " and completed_at <= :completed_end ")
            .with("completed_by" , " and completed_by = :completed_by ")
            .with("practice_id_like", " and practice_id like '%'||:practice_id_like||'%'")
            .with("practice_id", " and practice_id = :practice_id ")
            .with("to_be_completed", " and completed = 'false'")
            .toMap();
    }

    @Override
    protected List<String> ordering() {
        return List.of("id", "created_at");
    }
    //@formatter:on

    @GetMapping("/requests")
    @Authenticated
    @Audit
    @Override
    public List<Entity> list(@RequestParam Map<String, Object> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestParam(defaultValue = "false") boolean no_count) {
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }

    @GetMapping("/requests/{id}")
    @Authenticated
    @Audit
    @Override
    public Entity get(@PathVariable String id) {
        return super.get(id);
    }



    @PostMapping("/requests")
    @Authenticated
    @Authorized({ "receiver", "sender", "admin" })
    @Audit(true)
    public Entity post(@RequestBody Entity body) {
        validate(body,
//        required("practice_id"),
        required("address")
//        exists("practice_id", practiceController::exist )
           );
        String id = template.queryForObject("select max(id::int) + 1  from " + table(), Collections.emptyMap(),
                String.class);
        id = id == null ? "0" : id;
        Entity request = build("id", id).with("created_at", Instant.now().toString())
                .with("created_by", User.user().name).with("practice_id", body.get("practice_id"))
                .with("address", body.get("address")).with("completed", "false");
        String sql = insert(request);
        debug(sql);
        template.update(sql, request);
        return get(request.id());
    }


    @PutMapping("/requests/{id}")
    @Authenticated
    @Authorized({ "receiver", "sender", "admin" })
    @Audit(true)
    public Entity put(@PathVariable String id, @RequestBody Entity body) {

        Entity p = build("id", id)
                    .with("completed_at", Instant.now().toString())
                    .with("completed_by", User.user().name)
                    .with("completed", "true");
        // formatter:on
        String update = update(p.types(), "id");
        debug(update);
        template.update(update, p);
        return get(id);
    }

    @Override
    public String table() {
        return "requests";
    }

}
