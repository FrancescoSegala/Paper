package com.eng.paper.controllers;

import static com.eng.paper.common.Util.debug;
import static com.eng.paper.common.Entity.*;
import static com.eng.paper.common.Validators.*;
import java.time.Instant;
import java.util.List;
import java.util.Map;

import com.eng.paper.common.Audit;
import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Authorized;
import com.eng.paper.common.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MultiValueMap;
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
public class PracticesController extends AbstractController {

    @Autowired
    ListController list;

    //@formatter:off
    @Override
    protected Map<String, String> conditions() {
        return Map.of(
            "id", " and id = :id",
            "id_in" , " and id in (:id_in)",
            "id_like" , " and id ilike  '%'||:id_like||'%'" ,
            "type" , " and type = :type ",
            "urgent" , " and urgent = :urgent ",
            "arrived_start", " and arrived_at >= :arrived_start ",
            "arrived_end", " and arrived_at <= :arrived_end ",
            "created_start", " and created_at >= :created_start ",
            "created_end", " and created_at <= :created_end ",
            "arrived_is_not_null", " and arrived_at is not null"
        );
    }

    @Override
    protected List<String> ordering() {
        return List.of("id", "created_at", "arrived_at");
    }
    //@formatter:on

    @GetMapping("/practices")
    @Authenticated
    @Audit
    @Override
    public List<Entity> list(@RequestParam MultiValueMap<String, Object> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestParam(defaultValue = "false") boolean no_count) {
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }

    @GetMapping("/practices/{id}")
    @Authenticated
    @Audit
    @Override
    public Entity get(@PathVariable String id) {
        return super.get(id);
    }

    @PostMapping("/practices")
    @Authenticated
    @Authorized({ "receiver", "sender", "admin" })
    @Audit(true)
    public Entity post(@RequestBody Entity body) {

        validate(body, required("id"), regex("id", "^[A-Za-z0-9_]+$"), notExists("id", this::notExist),
                oneOf("urgent", "true", "false"));

        //@formatter:off
        Entity practice = build("id", body.id())
                .with("urgent", body.getOrDefault("urgent", "false"))
                .with("created_at", Instant.now().toString())
                .with("arrived_at", body.containsKey("arrived_at") ? Instant.now().toString() : null );
        //formatter:on
        String sql = insert(practice);
        debug(sql);
        template.update(sql, practice);
        return get(practice.id());
    }


    @PutMapping("/practices/{id}")
    @Authenticated
    @Authorized({ "receiver", "sender", "admin" })
    @Audit(true)
    public Entity put(@PathVariable String id, @RequestBody Entity body) {

        debug("message");
        validate( body,
            oneOf("urgent", "true", "false")
            //required("list_id"),
            //exists("list_id", list::exist
            //) // list_id -> list.exist(list_id)
        );
        Entity practice = get(id);
        String arrived_at = practice.getAsString("arrived_at");
        Entity p = build("id", practice.id())
                .with("arrived_at", arrived_at != null ? arrived_at : Instant.now().toString())
                .with("urgent", body.getOrDefault("urgent", practice.getAsString("urgent")));
        String update = update(p.types(), "id");
        debug(update);
        template.update(update, p);

        String list_id = body.getAsString("list_id");
        if (list_id != null ){
            String sqlDeleteLP = "delete from lists_practices where practice_id  = :practice_id and list_id = :list_id ";
            Entity lp = build("practice_id", id)
                        .with("list_id", list_id);
            String sqlInsertLP = insert( lp,"lists_practices");
            debug(sqlDeleteLP);
            template.update(sqlDeleteLP, Map.of("practice_id", id, "list_id", list_id));
            debug(sqlInsertLP);
            template.update(sqlInsertLP, Map.of("practice_id", id, "list_id", list_id));
        }
        return p;
    }


    @Override
    public String table() {
        return "practices";
    }

    @Override
    public String view() {
        return "practices";
    }

}
