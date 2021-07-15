package com.eng.paper.controllers;

import static com.eng.paper.common.Util.debug;

import java.util.Map;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ConfigController {

	@Value("${base_url}")
	private String base_url;

	@Value("${logout_url}")
	private String logout_url;

	@Value("${ids_url}")
	private String ids_url;

	@Value("${client_id}")
	private String client_id;

	@Value("${fake_authentication:false}")
	private boolean fake_authentication;

	@Value("${context:app}")
	private String context;

	@Value("${export_limit:10000}")
	private String export_limit;



	@GetMapping("/config")
	public Map<String, Object> config() {
		debug("configuration request");
		//formatter:off
        return Map.of(
            "base_url", base_url,
            "logout_url", logout_url,
            "ids_url", ids_url,
            "client_id", client_id,
            "fake_authentication",fake_authentication,
            "context", context,
            "export_limit", export_limit
            );
        //formatter:on
	}
}
