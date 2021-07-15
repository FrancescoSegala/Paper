package com.eng.paper.controllers;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import com.eng.paper.common.Audit;
import static com.eng.paper.common.Util.*;
import static com.eng.paper.common.Entity.*;
import static com.eng.paper.common.Validators.*;
import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Authorized;
import com.eng.paper.common.Entity;

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
public class ListController extends AbstractController {

    //@formatter:off
    @Override
    protected Map<String, String> conditions() {
        return Map.of(
            "id_like", " and lower( id ) like lower( '%'||:id_like||'%') " ,
            "id" , " and id = :id",
            "urgent" , " and urgent = :urgent ",
            "waybill_id" , " and waybill_id = :waybill_id ",
            "waybill_id_like" , " and lower( waybill_id ) like lower( '%'||:waybill_id_like||'%') ",
            "dealer_id" , " and  dealer_id ilike '%'||:dealer_id||'%' or description ilike '%'||:dealer_id||'%' ",
            "created_start", " and created_at >= :created_start ",
            "created_end", " and created_at <= to_char(to_timestamp( :created_end, 'YYYY-MM-DD\"T\"HH24:MI:SS\"Z\"' ) + interval '1 day', 'YYYY-MM-DD\"T\"HH24:MI:SS\"Z\"') "
        );
    }

    @Override
    protected List<String> ordering() {
        return List.of("created_at", "id");
    }
    //@formatter:on

    @GetMapping("/lists")
    @Authenticated
    @Audit
    @Override
    public List<Entity> list(@RequestParam MultiValueMap<String, Object> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestParam(defaultValue = "false") boolean no_count) {
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }

    @GetMapping("/lists/{id}")
    @Authenticated
    @Audit
    @Override
    public Entity get(@PathVariable String id) {
        return super.get(id);
    }

    @PostMapping("/lists")
    @Authenticated
    @Authorized({ "receiver", "admin" })
    @Audit(true)
    public Entity post(@RequestBody Entity body) {

        validate(body, required("dealer_id"), oneOf("urgent", "true", "false"), required("waybill_id"));

        String id = template.queryForObject("select max(id::int) + 1  from " + table(), Collections.emptyMap(),
                String.class);
        id = id == null ? "0" : id;
        Entity list = build("id", id).with("waybill_id", body.getAsString("waybill_id"))
                .with("dealer_id", body.getAsString("dealer_id")).with("created_at", Instant.now().toString())
                .with("urgent", body.getOrDefault("urgent", "false"));

        String sql = insert(list);
        debug(sql);
        template.update(sql, list);

        return get(list.id());
    }

    @PutMapping("/lists/{id}")
    @Authenticated
    @Authorized({ "receiver", "admin" })
    @Audit(true)
    public Entity put(@PathVariable String id, @RequestBody Entity body) {
        validate(body, oneOf("urgent", "true", "false"));
        Entity list = get(id);
        Entity params = build("id", list.id()).with("urgent", body.getOrDefault("urgent", list.getAsString("urgent")));

        String sql = update(params.types(), "id");
        debug(sql);
        template.update(sql, params);
        return get(id);
    }

    @Override
    public String view() {
        return "v_lists";
    }

    @Override
    public String table() {
        return "lists";
    }

}
