package com.eng.paper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import java.util.List;
import java.util.Map;

import com.eng.paper.common.Entity;
import com.eng.paper.common.User;
import com.eng.paper.controllers.AbstractController;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcOperations;
import org.springframework.test.context.event.annotation.BeforeTestClass;
import org.springframework.web.server.ResponseStatusException;

public abstract class BaseControllerTest {

    @Autowired
    NamedParameterJdbcOperations template;

    abstract AbstractController controller();

    protected List<Entity> list(Map<String, Object> map, Long offset, Long limit, String sort, String direction,
            Boolean no_count) {
        return controller().list(map, offset, limit, sort, direction, no_count);
    }

    protected List<Entity> listDefault(Map<String, Object> map) {
        return list(map, 0L, 10L, "id", "asc", true);
    }

    public void delete(String id) {
        String sql = controller().delete("id");
        template.update(sql, Map.of("id", id));
    }

    @BeforeEach
    public void userSetup() {
        User.setUser(new User().withName("first name last name").withRole("admin"));
    }

    public void receiverSetup() {
        User.setUser(new User().withName("first name last name").withRole("receiver"));
    }

    public void senderSetup() {
        User.setUser(new User().withName("first name last name").withRole("sender"));
    }

    @BeforeTestClass
    @Test
    void contextLoad() {
        assertTrue(true);
    }

    @BeforeTestClass
    @Test
    void controllerLoad() {
        assertNotNull(controller());
    }

    @BeforeTestClass
    @Test
    public void testGetNotValid_IdParameterNull() {
        try {
            Map<String, Object> map = null;
            listDefault(map);
        } catch (NullPointerException e) {
            return;
        }
        fail("Eccezione NullPointerException non rilanciata");
    }

    @BeforeTestClass
    @Test
    public void testGetInvaild_offsetNegative() {
        try {
            list(Map.of(), -1L, 10L, "id", "asc", true);
        } catch (Exception e) {
            assertEquals("ERROR: OFFSET must not be negative", e.getCause().getMessage());
            return;
        }
        fail("Eccezione non rilanciata, offset negativo");
    }

    @BeforeTestClass
    @Test
    public void testGetInvaild_limitNegative() {
        try {
            list(Map.of(), 1L, -1L, "id", "asc", true);
        } catch (Exception e) {
            assertEquals("ERROR: LIMIT must not be negative", e.getCause().getMessage());
            return;
        }
        fail("Eccezione non rilanciata, limit negativo");
    }

    @BeforeTestClass
    @Test
    public void testGetID_notValid() {
        try {
            controller().get("-1");
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.NOT_FOUND, e.getStatus());
            assertEquals("Entity -1 not found", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.NOT_FOUND not thrown");
    }
}
