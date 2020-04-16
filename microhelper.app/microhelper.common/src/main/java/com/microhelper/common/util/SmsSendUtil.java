package com.microhelper.common.util;

import org.apache.log4j.Logger;


public abstract class SmsSendUtil {

	private static final Logger log = Logger.getLogger(SmsSendUtil.class);
	
	private static final String SERVER_URL = "http://web.wasun.cn/asmx/smsservice.aspx";

	// 用户名
	private static final String name = "15652186194";
	// 密码
	private static final String pwd = "9FA6EB4D075A98F84F896CF0D451";
	// 电话号码字符串，中间用英文逗号间隔
	// 签名
	private static final String sign = "";
	// 追加发送时间，可为空，为空为及时发送
	private static final String stime = "";
	// 扩展码，必须为数字 可为空
	private static final StringBuffer extno = new StringBuffer();
	
	// 据库或者配置文件读取配置内容
	private static final String msg = "【回+创客公社】您的验证码是：#code#，15分钟内有效。如非您本人操作，可忽略本消息";

	/**
	 * 发送验证码
	 * @param mobileNo
	 * @param tpl_id
	 * @param map
	 * @throws Exception 
	 */
	public static void sendCode(String mobileNo, String code) {
		
		String str;
		try {
			str = HttpClientUtil.sendPost(name, pwd, mobileNo, msg.replaceAll("#code#", code), sign, stime, extno, SERVER_URL);
			log.info(str);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void main(String[] args) throws Exception {
		SmsSendUtil.sendCode("13810797604", VerifyCodeUtil.gernerate(VerifyCodeUtil.TYPE.FOUR));
	}
}
