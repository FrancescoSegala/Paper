package com.eng.paper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.List;
import java.util.Map;

import com.eng.paper.common.Entity;
import com.eng.paper.controllers.AbstractController;
import com.eng.paper.controllers.WaybillsController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

@SpringBootTest
public class WaybillControllerTest extends BaseControllerTest {

    @Autowired
    WaybillsController controller;


    @Override
    AbstractController controller() {
        return controller;
    }

    @Test
    public void testGetWaybills_noParams_valid() {
        List<Entity> list = listDefault(Map.of());
        assertNotNull(list);
        assertNotNull(list.get(0));
        assertNotNull(list.get(0).id());
    }

    @Test
    public void testGetWaybills_paramsPresent_valid() {
        Entity map = Entity.build(Map.of(
                        "id", "a1",
                        "id_like" , "a",
                        "urgent" , "true",
                        "arrived_is_not_null", "any"
        ));
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertTrue(list.size() > 0);
        });
    }

    @Test
    public void testGetWaybills_paramsNotPresent_valid() {
        Map<String, Object> map = Map.of(
                "id", "asasdasdasdaaasaaas'0990887987987",
                "id_like", "kkihji1092'9009'''09'987 1",
                "urgent", "SI");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }

    // GET/ID

    @Test
    public void testGetId_valid() {
        Entity e = controller.get("a1");
        assertNotNull(e);
        assertEquals("a1", e.id());
    }


    // POST

    @Test
    public void testWaybillsPOST_create_valid() {
        delete("waybill_test_junit");
        Entity body = new Entity().with("id", "waybill_test_junit");
        Entity list = controller.post(body);
        delete(list.id());
        assertNotNull(list);
        assertEquals(list.get("id"), body.get("id"));
    }


    @Test
    public void testWaybillsPOST_update_fail() {
        delete("waybill_test_junit");
        Entity body = new Entity().with("id", "waybill_test_junit");
        Entity pre = controller.post(body);
        body.with("urgent", "true");
        userSetup();
        try {
             controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.CONFLICT, e.getStatus());
            assertEquals("id already exists", e.getReason());
            return;
        }
        finally{
            delete(pre.id());
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }


    @Test
    public void testWaybillsPOST_invalid_IdNotPresent(){
        userSetup();
        Entity body = new Entity().with("urgent", "true");
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
    public void testWaybillsPOST_invalid_UrgentUnknown(){
        userSetup();
        delete(  "waybill_test_junit");
        Entity body = new Entity().with("id", "waybill_test_junit").with("urgent", "si");
        try {
            controller.post(body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("urgent must be one of [true, false]", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }


    //PUT


    @Test
    public void testWaybillsPUT_valid(){
        delete(  "waybill_test_junit");
        Entity body = new Entity().with("id", "waybill_test_junit").with("urgent", "true");
        Entity preldv = controller.post(body);
        body.with("urgent", "false");
        receiverSetup();
        Entity postldv = controller.put(preldv.id(), body);
        assertNotNull(postldv);
        assertNotNull(preldv);
        assertEquals(preldv.id(), postldv.id());
        assertNotEquals(preldv.get("urgent"), postldv.get("urgent"));
        delete(  body.id());
     }

     @Test
     public void testWaybillsPUT_arrivedAtExists(){
         Entity preldv = controller.get("a1");
         Entity body = new Entity().with("urgent", "true").with("arrived_at", true );
         receiverSetup();
         Entity postldv = controller.put("a1", body);
         assertNotNull(postldv);
         assertNotNull(preldv);
         assertNotNull(postldv.get("arrived_at"));
         assertNotNull(preldv.get("arrived_at"));
         assertEquals(postldv.get("arrived_at"), preldv.get("arrived_at"));
     }



     @Test
     public void testWaybillsPUT_arrivedAtNotExists(){
         delete( "waybill_test_PUT");
         Entity base = new Entity().with("id", "waybill_test_PUT").with("urgent", "true");
         Entity w = controller.post(base);
         Entity body = new Entity().with("urgent", "true").with("arrived_at", true );
         receiverSetup();
         Entity postList = controller.put("waybill_test_PUT", body);
         assertNotNull(postList);
         assertNotNull(w);
         assertNotNull(postList.get("arrived_at"));
         assertNull(w.get("arrived_at"));
         assertNotEquals(postList.get("arrived_at"), w.get("arrived_at"));
         delete(  w.id());
     }

    @Test
    public void testWaybillsPUT_invalid_UrgentUnknown(){
         Entity body = new Entity().with("urgent", "si");
        try {
            controller.put("a1",body);
        } catch (ResponseStatusException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
            assertEquals("urgent must be one of [true, false]", e.getReason());
            return;
        }
        fail("Exception ResponseStatusException.BAD_REQUEST not thrown");
    }
}
