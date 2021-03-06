package com.eng.paper.controllers;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.boot.autoconfigure.web.servlet.error.ErrorViewResolver;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;


@Component
public class RedirectController implements ErrorViewResolver  {
	   
		@Override
		public ModelAndView resolveErrorView(HttpServletRequest request, HttpStatus status, Map<String, Object> model) {
			return new ModelAndView("forward:/index.html");
		}
}
