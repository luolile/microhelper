package com.microhelper.common.util;

import org.apache.commons.lang3.RandomUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.microhelper.common.cache.CacheUtil;


/**
 * 验证码工具类
 * @author kiwiam
 *
 */
@Component
public class VerifyCodeUtil {

	public enum TYPE {
		FOUR(4),
		SIX(6),
		EIGHT(8);

		private static final int scale = 10;
		private int start = 0;
		private int end = 0;

		private TYPE(int n) {
			this.start = this.pow(n);
			this.end = this.start * scale;
		}
		public int start() {
			return this.start;
		}
		public int end() {
			return this.end;
		}

		private int pow(int n) {
			int s = 1;
			for (int i=0; i<n-1; i++) {
				s *= scale; 
			}
			return s;
		}
	}

	@Autowired
	private CacheUtil cacheUtil;
	
	/**
	 * 生成验证码
	 * @param type
	 * @return
	 */
	public static String gernerate(TYPE type) {
		return  String.valueOf(RandomUtils.nextInt(type.start, type.end));
	}
	
	private static final String CACHE_KEY_PREFIX = "verifycode:";
	// 有效时间10分钟
	private static final int EXPIRY_TIME = 10 * 60;
	
	private static final Logger log = Logger.getLogger(VerifyCodeUtil.class);
	/**
	 * 发送验证码
	 * @param mobileNo
	 */
	public void sendVerifyCode(String mobileNo) {
		
		String code = getCacheVfCode(mobileNo);
		if (StringUtils.isBlank(code)) {
			code = gernerate(VerifyCodeUtil.TYPE.FOUR);
		}
		
		log.info(mobileNo + " 验证码：" + code);
		cacheUtil.saveString(CACHE_KEY_PREFIX + mobileNo, code, EXPIRY_TIME);
		
		
		SmsSendUtil.sendCode(mobileNo, code);
	}
	
	private String getCacheVfCode(String mobileNo) {
		return cacheUtil.getString(CACHE_KEY_PREFIX + mobileNo);
	}
	
	/**
	 * 验证码是否有效
	 * @param mobileNo
	 * @param vfcode
	 * @return
	 */
	public boolean isValid(String mobileNo, String vfcode) {
		String code = getCacheVfCode(mobileNo);
		if (StringUtils.isBlank(code)) {
			return false;
		}
		
		return code.equals(vfcode);
	}
}
