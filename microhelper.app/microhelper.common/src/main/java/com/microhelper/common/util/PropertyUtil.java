/**
 * @(#) PropertyUtil.java
 *
 */
package com.microhelper.common.util;

import java.util.Locale;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

import org.apache.log4j.Logger;

/**
 * 从system.properties中读取配置项<br />
 * 依赖log4j
 * 
 * @author gengjw
 */
public class PropertyUtil {
    /** 日志 */
	private static final Logger log = Logger.getLogger(PropertyUtil.class);

	/** 属性存储缓存 */
	private static final ResourceBundle res;

	/** 静态加载文件 */
	static {
		ResourceBundle bld = null;
		try {
			bld = ResourceBundle.getBundle("system", Locale.getDefault());
		} catch (MissingResourceException e) {
			log.warn("Cannot load system properties", e);
		}
		res = bld;
	}

	/**
	 * 取得对应key的内容
	 * @param key
	 * @return 对应key的内容
	 */
	public static String getProperty(String key) {
		if (res != null) {
			return res.getString(key);
		} else {
			return null;
		}
	}

	   /**
     * 取得对应key的内容，当该值不存在时返回defaultVal
     * @param key
     * @return 对应key的内容
     */
	public static String getProperty(String key, String defaultVal) {
		if (res != null && res.containsKey(key)) {
			return res.getString(key);
		} else {
			return defaultVal;
		}
	}
}
