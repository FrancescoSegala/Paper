package com.eng.paper.common;

import java.lang.reflect.Array;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import com.auth0.jwt.JWT;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.interfaces.DecodedJWT;
import static com.eng.paper.common.Util.*;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

@Component
@Aspect
@Order(1)
public class AuthenticatedAspect {

    @Autowired
    HttpServletRequest request ;

    @Before("@annotation(com.eng.paper.common.Authenticated)")
	public void auth() {
        debug("Verifiyng user...");
		if (User.user() == null) {
            debug("Loading user from request");
     		User.setUser(user());
		}
	}



    public User user() {
        debug("Reading access_token from request");
		String accessToken = request.getHeader("x-authorization") != null ? request.getHeader("x-authorization")
				: request.getParameter("x-authorization");
		if (accessToken == null) {
            debug("access_token not found in request");
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Header x-authorization not found");
		}
		try {
            debug("decoding token...");
			DecodedJWT jwt = JWT.decode(accessToken);
			Date expirationDate = jwt.getExpiresAt();
            debug("verifiyng token expiration...");
			if (expirationDate.compareTo(new Date()) <= 0) {
				throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
						"Header x-authorization contains expired token");
			}
            debug("getting roles...");
            String[] roles = jwt.getClaim("authorizations").isNull() ? (String[]) Array.newInstance(String.class, 0) : jwt.getClaim("authorizations").asArray(String.class);
			debug("building user...");
            return new User()
                    .withFamilyName(jwt.getClaim("family_name").asString())
					.withGivenName(jwt.getClaim("given_name").asString())
                    .withName(jwt.getClaim("name").asString())
					.withRoles(roles);
		} catch (JWTDecodeException exception) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Header x-authorization not valid");
		}
        finally {
            debug("Authentication ended");
        }
	}

}
