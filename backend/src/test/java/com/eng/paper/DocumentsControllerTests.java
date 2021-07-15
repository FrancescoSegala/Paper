package com.eng.paper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Map;

import com.eng.paper.common.Entity;
import com.eng.paper.controllers.AbstractController;
import com.eng.paper.controllers.DocumentsController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest

public class DocumentsControllerTests extends BaseControllerTest {



    @Autowired
    DocumentsController controller;


    @Override
    AbstractController controller() {
        return controller;
    }

    @Test
    public void testGetDocuments_noParams() {
        List<Entity> list = listDefault(Map.of());
        assertNotNull(list);
        assertNotNull(list.get(0));
        assertNotNull(list.get(0).id());
    }

    @Test
    public void testGetDocuments_paramsPresent() {
        Map<String, Object> map = Map.of("practice_id", "a15");
        map.keySet().forEach(k -> {
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertTrue(list.size() > 0);
        });
    }

    @Test
    public void testGetDocuments_paramsNotPresent() {
        Map<String, Object> map = Map.of("practice_id", "saasaaasasasasasasasas");
        map.keySet().forEach(k -> {
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }


    @Test
    public void testGetDocumentsID() {
        Entity e = controller.get("1");
        assertNotNull(e);
        assertEquals("1", e.id());

    }



}
