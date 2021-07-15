package com.eng.paper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Map;

import com.eng.paper.common.Entity;
import com.eng.paper.controllers.AbstractController;
import com.eng.paper.controllers.DealersController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class DealerControllerTest extends BaseControllerTest {

    @Autowired
    DealersController controller;


    @Override
    AbstractController controller() {
        return controller;
    }

    @Test
    public void testGetDealers_noParams() {
        List<Entity> list = controller.list(Map.of(), 0L, 10L, "id", "asc", true);
        assertNotNull(list);
        assertNotNull(list.get(0));
        assertNotNull(list.get(0).id());
    }

    @Test
    public void testGetDealers_paramsPresent() {
        Map<String, Object> map = Map.of("dealer_like", "zan", "id", "1");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertTrue(list.size() > 0);
        });
    }

    @Test
    public void testGetDealers_paramsNotPresent() {
        Map<String, Object> map = Map.of("id", "1as", "dealer_like", "!!!JLKJLKJ");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }


    @Test
    public void testGetDealersID() {
        Entity e = controller.get("1");
        assertNotNull(e);
        assertEquals("1", e.id());

    }

}
