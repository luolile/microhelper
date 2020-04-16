package com.microhelper.common.util;

import java.util.Date;
import java.util.Locale;

import org.ocpsoft.prettytime.PrettyTime;

/**
 * 日期格式化
 * @author kiwiam
 *
 */
public abstract class PrettyTimeUtil {

	private static PrettyTime prettyTime = new PrettyTime(new Locale("ZH_CN"));
	
	public static String format(Date date) {
		if (date == null) return "";
		
		return prettyTime.format(date).replace(" ", "");
	}
	
}
