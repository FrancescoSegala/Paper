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
import com.eng.paper.controllers.ListController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class ListControllerTest extends BaseControllerTest {

    @Autowired
    ListController controller;

    @Override
    AbstractController controller() {
        return controller;
    }

    @Test
    public void testGetLists_noParams() {
        List<Entity> list = listDefault(Map.of());
        assertNotNull(list);
        assertNotNull(list.get(0));
        assertNotNull(list.get(0).id());
    }

    @Test
    public void testGetLists_paramsPresent() {
        Map<String, Object> map = Map.of("id", "1", "id_like", "1", "urgent", "true",
                "waybill_id", "ldv_2443084", "dealer_id", "1" , "waybill_id_like", "ldv_11" );
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertTrue(list.size() > 0);
        });
    }

    @Test
    public void testGetLists_paramsNotPresent() {
        Map<String, Object> map = Map.of(
            "id", "112!!!!9999",
            "id_like", "PIZZA",
            "waybill_id_like", "1121!!!",
            "urgent", "si",
            "waybill_id","ppoiwerpoweirepooo",
            "dealer_id", "ttttoototototo");
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
        Entity e = controller.get("1");
        assertNotNull(e);
        assertEquals("1", e.id());
    }

    // POST

    @Test
    public void testListsPOST() {
        User u = User.user();
        User.setUser(u.withRole("receiver"));
        Entity body = new Entity().with("dealer_id", "1").with("waybill_id", "oasoa");
        Entity list = controller.post(body);
        delete( list.id() );
        assertNotNull(list);
        assertEquals(list.get("dealer_id"), body.get("dealer_id"));
        assertEquals(list.get("waybill_id"), body.get("waybill_id"));
    }

    @Test
    public void testListPOST_NotValid_dealerIdMissing() {
        User u = User.user();
        User.setUser(u.withRole("receiver"));
        Entity body = new Entity().with("waybill_id", "oasoa");

        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("dealer_id_required", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testListPOST_NotValid_WaibillIdMissing() {
        User u = User.user();
        User.setUser(u.withRole("receiver"));
        Entity body = new Entity().with("dealer_id", "oasoa");

        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("waybill_id_required", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testListPOST_NotValid_UrgentWrong() {
        User u = User.user();
        User.setUser(u.withRole("receiver"));
        Entity body = new Entity().with("dealer_id", "1").with("waybill_id", "oasoa").with("urgent", "si");

        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("urgent must be one of [true, false]", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }


    @Test
    public void testListPUT(){
        Entity body = new Entity().with("waybill_id", "12");
        Entity preList = controller.get("1");
        receiverSetup();
        Entity postList = controller.put("1", body);
        assertNotNull(postList);
        assertNotNull(preList);
        assertEquals(preList.id(), postList.id());
    }


    @Test
    public void testListPUT_NotValid_UrgentNotValid(){
        receiverSetup();
        Entity body = new Entity().with("urgent", "si");

        try {
            controller.put("1",body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("urgent must be one of [true, false]", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }


}
