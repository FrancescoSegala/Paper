package com.eng.paper.controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import com.eng.paper.common.Entity;
import static com.eng.paper.common.Util.*;
import static com.eng.paper.common.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.util.MultiValueMap;
import org.springframework.web.server.ResponseStatusException;

public abstract class AbstractController {

    @Autowired
    NamedParameterJdbcOperations template;

    public List<Entity> list(MultiValueMap<String, Object> parameters, Long offset, Long limit, String sort,
            String direction, boolean no_count) {
        return list(build(parameters), offset, limit, sort, direction, no_count);
    }

    public List<Entity> list(Map<String, Object> parameters, Long offset, Long limit, String sort, String direction,
            boolean no_count) {

        String where = "from " + view() + " where 1=1 "
                + conditions().entrySet().stream().filter(e -> parameters.containsKey(e.getKey()))
                        .map(e -> e.getValue()).collect(Collectors.joining(" "));
        String count = "select count(*) as record_count " + where;
        String sql = "select * " + where + getOrderByString(sort, direction) + " limit " + limit + " offset " + offset;

        debug(parameters);
        if (!no_count) {
            debug(count);
        }
        Number record_count = no_count ? -1 : template.queryForObject(count, parameters, Number.class);

        debug(sql);
        return template.queryForList(sql, parameters).stream().map(e -> build(e).normalize())
                .map(e -> e.with("record_count", record_count)).collect(Collectors.toList());
    }

    public Entity get(String id) {
        Entity res = find(id);
        if (res == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Entity " + id + " not found");
        }
        return res;
    }


    public Entity find(String id) {
        List<Entity> res = list(Map.of("id", id), 0L, 1L, null, null, true);
        return res.isEmpty() ? null : res.get(0);
    }

    public Boolean exist(String id){
        return find(id) != null ;
    }

    public Boolean notExist(String id){
        return ! exist(id);
    }

    protected String table() {
        throw new UnsupportedOperationException("This controller does not support writing");
    };

    protected abstract Map<String, String> conditions();

    protected abstract List<String> ordering();

    protected String view() {
        return table();
    }

    private String getOrderByString(String sort, String direction) {
        if (sort == null || direction == null || sort.isEmpty() || direction.isEmpty() || sort.equals("no_sort")) {
            return "";
        }
        String dir = List.of("asc", "desc").stream().filter(e -> e.equals(direction.toLowerCase())).findAny()
                .orElseThrow(
                        () -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Direction must be 'asc' or 'desc'"));
        String s = ordering().stream().filter(e -> e.equals(sort.toLowerCase())).findAny().orElseThrow(
                () -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Sort must be one of " + ordering()));
        return " order by " + s + " " + dir;
    }

    protected String insert(Entity entity) {
        return insert(entity, table());
    }

    protected String insert(Entity entity, String table) {
        String fieldList = entity.keySet().stream().collect(Collectors.joining(","));
        String paramList = entity.keySet().stream().map(e -> ":" + e + "::" + entity.getType(e))
                .collect(Collectors.joining(","));
        return String.format("INSERT INTO %s (%s) VALUES(%s)", table, fieldList, paramList);
    }

    protected String update(Map<String, String> params, String key) {
        return update(params, key, table());
    }

    protected String update(Map<String, String> params, String key, String table) {
        String paramList = params.entrySet().stream().filter(e -> !e.getKey().equals(key))
                .map(e -> e.getKey() + "=:" + e.getKey() + "::" + e.getValue()).collect(Collectors.joining(","));
        return String.format("update %s set %s where %s", table, paramList, key + "=:" + key);
    }

    protected String delete(String key, String table) {
        return String.format("delete from %s where %s = :%s ", table, key, key);
    }

    public String delete(String key) {
        return delete(key, table());
    }




}
