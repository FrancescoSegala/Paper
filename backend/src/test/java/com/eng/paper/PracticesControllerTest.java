package com.eng.paper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static com.eng.paper.common.Entity.*;

import java.util.List;
import java.util.Map;

import com.eng.paper.common.Entity;
import com.eng.paper.controllers.AbstractController;
import com.eng.paper.controllers.PracticesController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class PracticesControllerTest extends BaseControllerTest {

    @Autowired
    PracticesController controller;

    @Override
    AbstractController controller() {
        return controller;
    }

    @Test
    public void testGetPractices_noParams() {
        List<Entity> list = listDefault(Map.of());
        assertNotNull(list);
        assertNotNull(list.get(0));
        assertNotNull(list.get(0).id());
    }

    @Test
    public void testGetPractices_paramsPresent() {
        Entity map = Entity.build(Map.of("id", "p2", "id_like", "p_11", "id_in", "p2", "urgent", "true"));
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertTrue(list.size() > 0);
        });
    }

    @Test
    public void testGetPractices_paramsNotPresent() {
        Map<String, Object> map = Map.of("id", "leoneaaa", "id_like", "kkihji1092'9009'''09'987 1", "urgent", "SI");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }

    // GET/ID

    @Test
    public void testGetId() {
        Entity e = controller.get("p_640774");
        assertNotNull(e);
        assertEquals("p_640774", e.id());
    }

    // POST
    @Test
    public void testPracticesPOST_create() {
        delete("praticatestjunit");
        Entity body = build("id", "praticatestjunit").with("list_id", "1");
        Entity practice = controller.post(body);
        delete(practice.id());
        assertNotNull(practice);
        assertEquals(practice.get("id"), body.get("id"));
    }

    @Test
    public void testPracticesPOST_ArrivedAtPresent() {
        delete("p2548");
        Entity body = new Entity().with("id", "p2548").with("arrived_at", "true");
        Entity practice = controller.post(body);
        assertNotNull(practice);
        assertNotNull(practice.getAsString("arrived_at"));
        assertEquals(practice.get("id"), body.get("id"));
    }

    @Test
    public void testPracticesPOST_update_fail() {
        delete("pratica_test_junit");
        Entity body = new Entity().with("id", "pratica_test_junit").with("list_id", "1");
        Entity pre = controller.post(body);
        body.with("list_id", "2");
        userSetup();
        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.CONFLICT, e.getStatus());
            assertEquals("id already exists", e.getReason());
            return;
        } finally {
            delete(pre.id());
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPracticesPOST_invalid_IdNotPresent() {
        userSetup();
        Entity body = new Entity().with("list_id", "1");
        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("id_required", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPracticesPOST_invalid_InvalidIdFormat() {
        userSetup();
        Entity body = new Entity().with("id", "p_!");
        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("id must match ^[A-Za-z0-9_]+$", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testPracticesPUT() {
        Entity body = new Entity().with("list_id", "1").with("urgent", "true");
        Entity preList = controller.get("p_78475574");
        receiverSetup();
        Entity postList = controller.put("p_78475574", body);
        assertNotNull(postList);
        assertNotNull(preList);
        assertNotNull(preList);
        assertEquals(preList.id(), postList.id());
        assertEquals("true", postList.getAsString("urgent"));
    }

    @Test
    public void testPracticesPUT_arrivedAtExists() {
        Entity preList = controller.get("p_78475574");
        Entity body = new Entity().with("list_id", "1").with("urgent", "true").with("arrived_at", true);
        receiverSetup();
        Entity postList = controller.put("p_78475574", body);
        assertNotNull(postList);
        assertNotNull(preList);
        assertNotNull(postList.get("arrived_at"));
        assertNotNull(preList.get("arrived_at"));
        assertEquals(postList.get("arrived_at"), preList.get("arrived_at"));
    }

    @Test
    public void testPracticesPUT_arrivedAtNotExists() {
        delete("pratica_test_PUT");
        Entity base = new Entity().with("id", "pratica_test_PUT").with("list_id", "1");
        Entity p = controller.post(base);
        Entity body = new Entity().with("list_id", "1").with("urgent", "true").with("arrived_at", true);
        receiverSetup();
        Entity postList = controller.put("pratica_test_PUT", body);
        assertNotNull(postList);
        assertNotNull(p);
        assertNotNull(postList.get("arrived_at"));
        assertNull(p.get("arrived_at"));
        assertNotEquals(postList.get("arrived_at"), p.get("arrived_at"));
        delete(p.id());
    }

    @Test
    public void testPracticesPUT_invalid_UrgentUnknown() {
        Entity body = new Entity().with("urgent", "si");

        try {
            controller.put("pratica", body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("urgent must be one of [true, false]", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

}
