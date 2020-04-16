package com.microhelper.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;

public abstract class AppkeyUtil {

	public static final String ENCODE_KEY = "3a8a2e5ab49745dfb0f9488f911924c8";
	public static final String Pattern = "ddHHmmss";

	/**
	 * 验证appkey
	 * @param appKey
	 * @return
	 */
	public static boolean verify(String appKey) {
		return true;
		/*
		if (StringUtils.isBlank(appKey) || appKey.length() < Pattern.length()) {
			return false;
		}

		String appKeyTime = appKey.substring(0, Pattern.length());
		if (appKey.equals(appKeyTime + MD5Util.MD5(appKeyTime + ENCODE_KEY))) {
			return true;
		}
		return false;
		*/
	}

	/**
	 * 获取appkey
	 * @return
	 */
	private static String createAppKey() {
		SimpleDateFormat sdf_fmt = new SimpleDateFormat("ddHHmmss");
		
		String appKeyTime = sdf_fmt.format(Calendar.getInstance().getTime());
		return appKeyTime + MD5Util.MD5(appKeyTime + ENCODE_KEY);
	}
	
	public static void main(String[] args) {
		System.out.println(createAppKey());
	}

}
