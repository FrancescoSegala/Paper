package com.eng.paper.common;

import java.util.HashSet;
import java.util.Set;

public class User {

    public String given_name;
	public String family_name;
	public String name;
	public String tenant_id;
    public Set<String> roles = new HashSet<>();
	private static ThreadLocal<User> tl = new ThreadLocal<>();

	public User withGivenName(String given_name) {
		this.given_name = given_name;
		return this;
	}

	public User withFamilyName(String family_name) {
		this.family_name = family_name;
		return this;
	}

	public User withName(String name) {
		this.name = name;
		return this;
	}

	public User withTenantId(String tenant_id) {
		this.tenant_id = tenant_id;
		return this;
	}

    public User withRole(String role ){
        this.roles.add(role);
        return this;
    }

    public User withRoles(String[] roles){

        for (String role : roles){
            this.roles.add(role);
        }
        return this;
    }

	public static User user() {
		return tl.get();
	}

	public static void setUser(User u) {
		tl.set(u);
	}



}
