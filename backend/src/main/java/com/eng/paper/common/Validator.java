package com.eng.paper.common;

import org.springframework.web.server.ResponseStatusException;

public interface Validator {

	ResponseStatusException validate(Entity input);

}
