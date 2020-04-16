package com.microhelper.common.util;


/**
 * 常量定义类
 * @author kiwiam
 *
 */
public interface ApiConst {

	/** 请求参数 用户令牌 */
	String REQ_TOKEN = "token";
	/** 请求参数 数据更新令牌 */
	String REQ_UPD_TOKEN = "updToken";

	
	/** 请求属性名：手机号码 */
	String REQ_MOBILE_NO = "mobileNo";
	/** 请求属性名：手机号码 */
	String REQ_PASSWORD = "password";

	/** 正则表达式：高精度浮点数 */
	String RGX_DOUBLE = "^(\\d*\\.)?\\d+$";
	/** 正则表达式：性别 */
	String RGX_GENDER = "^[019]$";
	/** 正则表达式：电话号码 */
	String RGX_MOBILE_NO = "^1\\d{10}$";
	/** 正则表达式：密码 */
	String RGX_PASSWORD = "^[\\dA-Za-z]{32}$";
	/** 正则表达式：整型数据 */
	String RGX_INTEGER = "^-?\\d+$";
	/** 正则表达式：整型数据或空 */
	String RGX_INT_BLANK = "^-?\\d*$";

	/** 日期时间格式无秒 */
	String DATE_FMT_APP = "yyyy-MM-dd HH:mm";
	
}
