package com.microhelper.common.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.microhelper.common.cache.CacheUtil;

@Component
public class AppUserUtil {

	/**
	 * 缓存的用户信息前缀
	 */
	private static final String USER_PREFIX = "user:";
	
	@Autowired
	private CacheUtil cacheUtil;


	/**
	 * 删除用户缓存
	 * @param token
	 */
	public void delUser(String token) {
		cacheUtil.delKey(USER_PREFIX + token);
	}

}
