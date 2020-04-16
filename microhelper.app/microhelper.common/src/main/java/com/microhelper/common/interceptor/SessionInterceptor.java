package com.microhelper.common.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.microhelper.common.util.Const;

/**
 * session拦截器，会话失效重定向到登陆页
 * @author kiwiam
 *
 */
public class SessionInterceptor implements HandlerInterceptor {

	private static final Logger log = Logger.getLogger(SessionInterceptor.class);
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		log.info("Request URL: " + request.getRequestURL().toString());
		
		HttpSession session  = request.getSession();
		
		Object obj = session.getAttribute(Const.SESSION_USER_ID);
		if (obj == null) {
			response.sendRedirect(request.getContextPath() + "/sessionout.jsp");
			return false;
		} 
		
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
		// TODO Auto-generated method stub
		
	}


}
