/**
 * 
 */
package com.microhelper.common.util;

import java.math.BigDecimal;
/**
 * 微信支付的账单编号和系统内部消费单号转换工具
 * 
 * @author 
 */
public abstract class BillNoUtil {

	/**
	 * 将消费单编号转变成微信支付的账单编号
	 * 
	 * @param billNo 消费单编号
	 * @param bonusMoney 参返金额
	 * @return 微信支付的账单编号
	 */
	public static String toPayNo(String billNo, BigDecimal bonusMoney) {
		if (billNo == null) {
			return "";
		}
		if (bonusMoney == null) {
			bonusMoney = BigDecimal.ZERO;
		} else {
			bonusMoney = bonusMoney.multiply(BigDecimal.valueOf(100));
		}

		return String.format("%s_%010.0f", billNo, bonusMoney.doubleValue());
	}

	/**
	 * 将微信的支付账单号转变为系统内部的消费单号
	 * 
	 * @param payNo 支付账单号
	 * @return 消费单号
	 */
	public static String toBillNo(String payNo) {
		if (payNo == null) {
			return "";
		}
		return payNo.replaceFirst("^(.*)_\\d+$", "$1");
	}
}
