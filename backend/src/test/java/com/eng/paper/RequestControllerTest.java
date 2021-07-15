package com.eng.paper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.List;
import java.util.Map;

import com.eng.paper.common.Entity;
import com.eng.paper.controllers.AbstractController;
import com.eng.paper.controllers.RequestsController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class RequestControllerTest extends BaseControllerTest {

    @Autowired
    RequestsController controller;


    @Override
    AbstractController controller() {
        return controller;
    }

    // TEST GET
    @Test
    public void testGetRequests_noParams() {
        List<Entity> list = controller.list(new LinkedMultiValueMap<String, Object>(), 0L, 10L, "id", "asc", true);
        assertNotNull(list);
        assertNotNull(list.get(0));
        assertNotNull(list.get(0).id());
    }

    @Test
    public void testGetRequests_paramsPresent() {
        Map<String, Object> map = Map.of("id", "1", "created_by", "Elisabetta Amministratrice", "completed_by", "Elisabetta Amministratrice", "practice_id", "p1");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertTrue(list.size() > 0);
        });
    }

    @Test
    public void testGetRequests_paramsNotPresent() {
        Map<String, Object> map = Map.of("id", "198989", "created_by", "Carlo", "completed_by", "Giuseppe", "practice_id", "pppp1212");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }


    //GET Requests/ID

    @Test
    public void testGetRequestsID() {
        Entity e = controller.get("1");
        assertNotNull(e);
        assertEquals("1", e.id());

    }
    //POST

    @Test
    public void testRequestsPOST() {

        Entity body = new Entity().with("practice_id", "p1")
        						  .with("address", "via prova 11");

        Entity list = controller.post(body);
        delete( list.id());
        assertNotNull(list);
        assertEquals(list.get("practice_id"), body.get("practice_id"));
        assertEquals(list.get("address"), body.get("address"));
    }


    @Test
    public void testRequestPOST_PracticeIdMissing() {
    	userSetup();
        Entity body = new Entity().with("id", "199")
        						  .with("address", "via prova 11");
        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("practice_id_required", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    @Test
    public void testRequestPOST_AddressMissing() {
    	userSetup();
        Entity body = new Entity().with("id", "196")
        						  .with("practice_id", "p1");
        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("address_required", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }

    //PUT

    @Test
    public void testRequestsPUT() {
        Entity body = new Entity().with("id", "1").with("completed", "true");
        Entity preRequest = controller.get("1");
        receiverSetup();
        Entity postList = controller.put("1", body);
        assertNotNull(postList);
        assertNotNull(preRequest);
        assertEquals(preRequest.id(), postList.id());
        assertEquals("true", postList.get("completed"));
    }

}
