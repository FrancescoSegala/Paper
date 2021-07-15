package com.eng.paper.controllers;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import com.eng.paper.common.Audit;
import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Authorized;
import com.eng.paper.common.Entity;
import static com.eng.paper.common.Util.*;
import static com.eng.paper.common.Entity.build;
import static com.eng.paper.common.Validators.*;
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
public class WaybillsController extends AbstractController {

    //@formatter:off
    @Override
    protected Map<String, String> conditions() {
        return Map.of(
            "id", " and id = :id " ,
            "id_like", " and id like lower( '%'||:id_like||'%') " ,
            "urgent" , " and urgent = :urgent ",
            "arrived_start", " and arrived_at >= :arrived_start ",
            "arrived_end", " and arrived_at <= :arrived_end ",
            "created_start", " and created_at >= :created_start ",
		    "created_end", " and created_at <= :created_end ",
		    "arrived_is_not_null", " and arrived_at is not null");
    }

    @Override
    protected List< String> ordering() {
        return List.of("id","arrived_at", "created_at");
    }
    //@formatter:on

    @GetMapping("/waybills")
    @Authenticated
    @Audit
    @Override
    public List<Entity> list(@RequestParam Map<String, Object> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestParam(defaultValue = "false") boolean no_count) {
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }


    @PostMapping("/waybills")
    @Authenticated
    @Authorized({ "receiver", "sender", "admin" })
    @Audit(true)
    public Entity post(@RequestBody Entity body) {
        validate( body ,
        required("id"),
        regex("id", "^[A-Za-z0-9_]+$"),
        oneOf("urgent", "true", "false"),
        notExists("id", this::notExist )
    );
        //@formatter:off
        Entity waybill = build("id", body.id())
                .with("created_at", Instant.now().toString())
                .with("urgent",body.getOrDefault("urgent", "false"))
                .with("arrived_at",body.containsKey("arrived_at") ? Instant.now().toString() : null );
         //@formatter:on
        String sql = insert(waybill);
        debug(sql);
        template.update(sql, waybill);
        return get(body.id());
    }


    @PutMapping("/waybills/{id}")
    @Authenticated
    @Authorized({ "receiver", "sender", "admin" })
    @Audit(true)
    public Entity put(@PathVariable String id, @RequestBody Entity body) {

        validate(  body, oneOf("urgent", "true", "false"));

        Entity practice = get(id);
        String arrived_at = practice.getAsString("arrived_at");
        Entity w = build("id", practice.id())
                .with("arrived_at", arrived_at != null ? arrived_at :  Instant.now().toString()  )
                .with("urgent", body.getOrDefault("urgent", practice.getAsString("urgent")));
        String update = update(w.types(), "id");
        debug(update);
        template.update(update, w);
        return w;
    }

    @Override
    public String table() {
        return "waybills";
    }

    @Override
    public String view() {
        return "waybills";
    }

}
