package com.microhelper.common.util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.log4j.Logger;

/**
 * 日期工具类
 * 
 * @author: caowuchao
 * @time: 2014年12月23日
 */
public abstract class DateUtils {

	private static final Logger log = Logger.getLogger(DateUtils.class);

	/**
	 * 全日期格式
	 */
	public static String fullPattern = "yyyy-MM-dd HH:mm:ss";
	
	/**
	 * 全日期格式（没有间隔符号）
	 */
	public static String FMT_YMD_HMS = "yyyyMMddHHmmss";
	
	/**
	 * yyyy-MM格式
	 */
	public static String FMT_YM = "yyyy-MM";
	
	/**
	 * yyyyMM格式
	 */
	public static String FMT_YM_NO_SPLIT = "yyyyMM";

	/**
	 * 默认日期格式
	 */
	private static String defaultPattern = "yyyy-MM-dd";

	/**
	 * 默认日期格式
	 */
	private static SimpleDateFormat DEFAULT_DATE = new SimpleDateFormat(defaultPattern);
	
	/**
	 * 默认日期格式
	 */
	private static SimpleDateFormat FMT_YM_NO_HMS = new SimpleDateFormat("yyyy-MM-dd HH:mm");
	/**
	 * 默认日期格式
	 */
	private static SimpleDateFormat FMT_YM_NOHMS = new SimpleDateFormat("yyyyMMddHHmmss");

	/**
	 * 获取当前日期
	 * 
	 * @return
	 */
	public static Date getCurrentDate() {
		return Calendar.getInstance().getTime();
	}

	/**
	 * 当前日期字符串
	 * 
	 * @return
	 */
	public static String getCurrentDateStr(String pattern) {
		SimpleDateFormat sdf;
		if (pattern == null) {
			sdf = DEFAULT_DATE;
		} else {
			sdf = new SimpleDateFormat(pattern);
		}
		return sdf.format(new Date());
	}
	/**
	 * 当前日期字符串
	 * yyyyMMddHHmmss
	 * @return
	 */
	public static String getDateStr(String pattern) {
		SimpleDateFormat sdf;
		if (pattern == null) {
			sdf = FMT_YM_NOHMS;
		} else {
			sdf = new SimpleDateFormat(pattern);
		}
		return sdf.format(new Date());
	}
	
	
	/**
	 * 时间添加分钟
	 * 
	 * @param min
	 * @return
	 */
	public static Date addMinutes(int min) {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.MINUTE, min);
		return cal.getTime();
	}

	/**
	 * 时间添加分钟
	 * 
	 * @param min
	 * @return
	 */
	public static Date addMinutes(Date date, int min) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.MINUTE, min);
		return cal.getTime();
	}

	/**
	 * 时间添加月
	 * 
	 * @param month
	 * @return
	 */
	public static Date addMonth(Date date, int month) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.MONTH, month);
		return cal.getTime();
	}

	/**
	 * 时间添加日
	 * 
	 * @param day
	 * @return
	 */
	public static Date addDay(Date date, int day) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.DATE, day);
		return cal.getTime();
	}

	/**
	 * 时间添加小时
	 * 
	 * @param hour
	 * @return
	 */
	public static Date addHour(Date date, int hour) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.HOUR_OF_DAY, hour);
		return cal.getTime();
	}

	/**
	 * 默认格式转换成日期串
	 * 
	 * @param dateStr
	 * @return
	 */
	public static Date parseToDate(String str) {
		try {
			Date date = DEFAULT_DATE.parse(str);
			return date;
		} catch (Exception e) {
			log.error("日期格转换失败: str=" + str);
		}
		return null;
	}
	
	/**
	 * 指定格式转换成日期串
	 * 
	 * @param dateStr
	 * @return
	 */
	public static Date parseToDateTime(String str) {
		try {
			Date date = FMT_YM_NO_HMS.parse(str);
			return date;
		} catch (Exception e) {
			log.error("日期格转换失败: str=" + str);
		}
		return null;
	}

	/**
	 * 默认格式转换成日期串
	 * 
	 * @param dateStr
	 * @return
	 */
	public static Date parseToDate(Date dt) {
		try {
			String str = DEFAULT_DATE.format(dt);
			Date date = DEFAULT_DATE.parse(str);
			return date;
		} catch (Exception e) {
			log.error("日期格转换失败: dt=" + dt);
		}
		return null;
	}

	/**
	 * 默认格式转换成日期串
	 * 
	 * @param dateStr
	 * @return
	 */
	public static Date parseToDate(String str, String pattern) {
		SimpleDateFormat sdf;
		if (pattern == null || pattern.length() == 0) {
			sdf = DEFAULT_DATE;
		} else {
			sdf = new SimpleDateFormat(pattern);
		}

		try {
			Date date = sdf.parse(str);
			return date;
		} catch (Exception e) {
			log.error("日期格转换失败: str=" + str);
		}

		return null;
	}


	public static String getFormatDate(Date date) {
		if (date == null) {
			return "";
		}

		try {
			SimpleDateFormat sdf = new SimpleDateFormat(defaultPattern);
			String strDate = sdf.format(date);
			return strDate;
		} catch (Exception e) {
			log.error("日期格转换失败！");
		}
		return "";
	}

	/**
	 * 转换日期格式
	 * 
	 * @param date
	 * @param pattern
	 * @return
	 */
	public static String getFormatDate(Date date, String pattern) {
		if (date == null) {
			return "";
		}

		try {
			SimpleDateFormat sdf = null;
			if (pattern == null || pattern.length() == 0) {
				sdf = DEFAULT_DATE;
			} else {
				sdf = new SimpleDateFormat(pattern);
			}
			String strDate = sdf.format(date);
			return strDate;
		} catch (Exception e) {
			log.error("日期格转换失败！");
		}
		return "";
	}

	/**
	 * 转换日期格式(yyyy-MM-dd HH:mm:ss)
	 * 
	 * @param date
	 * @param pattern
	 * @return
	 */
	public static String getFullFormatDate(Date date) {
		if (date == null) {
			return "";
		}

		try {
			SimpleDateFormat sdf = new SimpleDateFormat(fullPattern);
			String strDate = sdf.format(date);
			return strDate;
		} catch (Exception e) {
			log.error("日期格转换失败！");
		}
		return "";
	}

	/**
	 * 将整型的时间类型转换成字符串
	 * 
	 * @param to
	 * @return
	 */
	public static String formatTime(Integer to) {
		String str = String.format("%04d", to);
		return str.replaceFirst("^.*(\\d{2})(\\d{2})$", "$1:$2");
	}

	/**
	 * 判断当前日期是否为月初
	 * 
	 * @return 结果
	 */
	public static boolean isMonthBegin() {
		Calendar cal = Calendar.getInstance();
		boolean isMonthBegin = false;
		// 判断是否为每月的1号
		if (cal.get(Calendar.DAY_OF_MONTH) == 1) {
			isMonthBegin = true;
		}
		return isMonthBegin;
	}

	/**
	 * 判断当前日期是否为周一
	 * 
	 * @return 结果
	 */
	public static boolean isWeekBegin() {
		Calendar cal = Calendar.getInstance();
		boolean isWeekBegin = false;
		// 判断是否为周一
		if (cal.get(Calendar.DAY_OF_WEEK) == 2) {
			isWeekBegin = true;
		}
		return isWeekBegin;
	}

	/**
	 * 判断日期是否合法（yyyy-MM-dd）
	 * 
	 * @param dateString 日期字符串
	 * @return
	 */
	public static boolean validateDate(String dateString) {
		// 使用正则表达式 测试 字符 符合dddd-dd-dd 的格式(d表示数字)
		Pattern p = Pattern.compile("\\d{4}+[-]\\d{1,2}+[-]\\d{1,2}+");
		Matcher m = p.matcher(dateString);
		if (!m.matches()) {
			return false;
		}

		// 得到年月日
		String[] array = dateString.split("-");
		int year = Integer.valueOf(array[0]);
		int month = Integer.valueOf(array[1]);
		int day = Integer.valueOf(array[2]);

		if (month < 1 || month > 12) {
			return false;
		}
		int[] monthLengths = new int[] { 0, 31, -1, 31, 30, 31, 30, 31, 31, 30,
				31, 30, 31 };
		if (isLeapYear(year)) {
			monthLengths[2] = 29;
		} else {
			monthLengths[2] = 28;
		}
		int monthLength = monthLengths[month];
		if (day < 1 || day > monthLength) {
			return false;
		}
		return true;
	}

	/**
	 * 是否为闰年
	 * 
	 * @param year 年份
	 * @return 是否闰年
	 */
	private static boolean isLeapYear(int year) {
		return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
	}

	/**
	 * 俩时间比较 0:dt1=dt2  大于0：dt1>dt2 小于0：dt1<dt2
	 * @param dt1 时间1
	 * @param dt2 时间2
	 * @return
	 */
	public static int compareDate(Date dt1,Date dt2){
		int flag = 0;
		String date1 = DEFAULT_DATE.format(dt1);
		String date2 = DEFAULT_DATE.format(dt2);
		flag = date1.compareTo(date2);
		return flag;
	}
}
