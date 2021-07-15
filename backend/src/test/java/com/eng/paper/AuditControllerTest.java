package com.eng.paper;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Map;

import com.eng.paper.common.Entity;
import com.eng.paper.controllers.AbstractController;
import com.eng.paper.controllers.AuditController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class AuditControllerTest extends BaseControllerTest {

    @Autowired
    AuditController controller;

    @Override
    AbstractController controller() {
        return controller;
    }


    @Test
    public void testGetAudit_noParams() {
        List<Entity> list = controller.list(Map.of(), 0L, 10L, "id", "asc", true);
        assertNotNull(list);
        assertNotNull(list.get(0));
        assertNotNull(list.get(0).id());
    }

    @Test
    public void testGetAudit_paramsPresent() {
        Map<String, Object> map = Map.of("id", "3608981b-726d-459d-872a-df1be90504e8", "username_like", "Elisa",
                "method", "POST", "url", "/api/waybills", "url_like", "/api/way", "status", "200");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertTrue(list.size() > 0);
        });
    }

    @Test
    public void testGetAudit_paramsNotPresent() {
        Map<String, Object> map = Map.of("id", "3608981b-", "username_like", "Mario", "method", "POSTA", "url", "/api/",
                "url_like", "---!", "status", "300");
        map.keySet().forEach(k -> {
            userSetup();
            List<Entity> list = listDefault(Map.of(k, map.get(k)));
            assertNotNull(list);
            assertEquals(0, list.size());
        });
    }

    @Test
    public void testGetAuditID() {
        Entity e = controller.get("3608981b-726d-459d-872a-df1be90504e8");
        assertNotNull(e);
        assertEquals("3608981b-726d-459d-872a-df1be90504e8", e.id());
    }

}
