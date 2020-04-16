package com.microhelper.common.util;

import java.util.LinkedHashMap;
import java.util.Map;

public abstract class MessageUtil {

	/** 返回状态码 */
	private static final String CODE = "code";
	/** 返回消息 */
	private static final String MESSAGE = "message";
	/** 返回数据 */
	private static final String DATA = "data";

	/**
	 * {"code":200, "message":"提示消息..."}
	 * {"code":200, "message":"提示消息...", "data":{"infoKey":"..."}}
	 */

	/**
	 * 消息及状态码
	 * @param status
	 * @param msg
	 * @return
	 */
	public static Map<String, Object> makeModel(HttpStatus status, String msg) {
		Map<String, Object> model = new LinkedHashMap<String, Object>(3);

		model.put(CODE, status.code());
		model.put(MESSAGE, msg);
		return model;
	}

	/**
	 * 返回完整数据 包含数据及状态码、消息
	 * @param status
	 * @param msg
	 * @param data
	 * @return
	 */
	public static Map<String, Object> makeModel(HttpStatus status, String msg, Object data) {
		Map<String, Object> model = makeModel(status, msg);

		model.put(DATA, data);
		return model;
	}

}
