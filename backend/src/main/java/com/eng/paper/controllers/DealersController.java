package com.eng.paper.controllers;

import com.eng.paper.common.Authenticated;
import com.eng.paper.common.Entity;

import java.util.List;
import java.util.Map;


import com.eng.paper.common.Audit;

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
public class DealersController extends AbstractController {

    @GetMapping("/dealers")
    @Authenticated
    @Audit
    @Override
    public List<Entity>  list(@RequestParam MultiValueMap<String, Object> parameters,
    @RequestParam(defaultValue = "0") Long offset, @RequestParam(defaultValue = "10") Long limit,
    @RequestParam(defaultValue = "id") String sort, @RequestParam(defaultValue = "asc") String direction ,
    @RequestParam(defaultValue = "false" ) boolean no_count ){
        return super.list(parameters, offset, limit, sort, direction, no_count);
    }


    @GetMapping("/dealers/{id}")
    @Authenticated
    @Audit
    @Override
    public Entity get(@PathVariable String id){
        return super.get(id);
    }

    @Override
    public String view(){
        return "v_dealers";
    }

    @Override
    protected Map<String, String> conditions() {
        return Map.of(
            "id", " and id = :id ",
            "dealer_like" , " and dealer like lower( '%'||:dealer_like||'%') "
            );
    }

    @Override
    protected List<String> ordering() {
        return List.of("id");
    }


}
