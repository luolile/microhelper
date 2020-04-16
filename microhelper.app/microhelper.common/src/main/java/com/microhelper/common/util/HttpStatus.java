package com.microhelper.common.util;

/**
 * http 返回状态码
 * @author kiwiam
 *
 */
public enum HttpStatus {

	/** 正常 */
	OK(200),

	/** 失败 */
	FAILURE(210),

	/** 未登录 */
	NO_TOKEN(310),

	/** 错误请求 */
	BAD_REQUEST(400),

	/** 服务拒绝执行 */
	FORBIDDEN(403),

	/** 内部错误 */
	INTERNAL_ERROR(500),

	/** 不支持  非法连接 */
	NOT_SUPPORTED(505);


	private final int code;

	private HttpStatus(int val) {
		this.code = val;
	}

	/**
	 * Return the integer value of this status code.
	 */
	public int code() {
		return this.code;
	}

}
