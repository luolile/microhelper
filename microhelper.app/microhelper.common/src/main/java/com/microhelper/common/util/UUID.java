package com.microhelper.common.util;


public abstract class UUID {

	public static String genrnate() {
		return java.util.UUID.randomUUID().toString().replace("-", "").toUpperCase();
	}
	
}
