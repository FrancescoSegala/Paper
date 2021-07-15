package com.eng.paper.controllers;

import java.util.List;
import java.util.Map;

import com.eng.paper.common.Audit;
import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Entity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DocumentsController extends AbstractController {

    //@formatter:off
    @Override
    protected Map<String, String> conditions() {
        return Map.of( "id", " and id = :id ", "practice_id", "and practice_id = :practice_id");
    }

    @Override
    protected List<String> ordering() {
        return List.of("id", "created_at");
    }
    //@formatter:on

    @GetMapping("/documents")
    @Authenticated
    @Audit
    @Override
    public List<Entity> list(@RequestParam Map<String, Object> parameters,
            @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
            @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction,
            @RequestParam(defaultValue = "false") boolean no_count) {
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }

    @GetMapping("/documents/{id}")
    @Authenticated
    @Audit
    @Override
    public Entity get(@PathVariable String id) {
        return super.get(id);
    }

    @Override
    public String view() {
        return "v_documents";
    }

}
