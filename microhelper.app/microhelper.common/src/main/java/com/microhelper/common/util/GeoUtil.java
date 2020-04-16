package com.microhelper.common.util;

import java.math.BigDecimal;


/**
 * 地理信息计算工具类
 * @author kiwiam
 *
 */
public abstract class GeoUtil {
	/** 地球半径 */
	public static final double EARTH_RADIUS = 6378.137; 
	
	/**
	 * 计算两坐标之间的直线距离
	 * @param lng1 第一点经度
	 * @param lat1 第一点纬度
	 * @param lng2 第二点经度
	 * @param lat2 第二点纬度
	 * @return 两点之间的直线距离（单位:km）
	 */
	public static double getDistance(double lng1, double lat1, double lng2, double lat2) {
		double radLat1 = lat1 * Math.PI / 180.0;
		double radLat2 = lat2 * Math.PI / 180.0;
		double a = radLat1 - radLat2;
		double b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
		double s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2)
				* Math.pow(Math.sin(b / 2), 2)));
		s = s * EARTH_RADIUS;
		// 换算成米
		//s = Math.round(s * 10000) / 10;
		return s;
	}
	
	/**
	 * 计算两坐标之间的直线距离
	 * @param lng1 第一个点经度
	 * @param lat1 lat1第一点纬度
	 * @param lng2 lng2第二点经度
	 * @param lat2 lat2第二点纬度
	 * @return 两点之间的直线距离（单位:km）
	 */
	public static String getDistanceText(BigDecimal lng1, BigDecimal lat1,  BigDecimal lng2, BigDecimal lat2) {
		double distance = getDistance(lng1.doubleValue(), lat1.doubleValue(), lng2.doubleValue(), lat2.doubleValue());
		return toDistanceText(distance);
	}

	/**
	 * 显示距离文字
	 * 
	 * @param distance 距离
	 * @return 距离文字
	 */
	public static String toDistanceText(double distance) {
		if (Double.compare(distance, 1) < 0) {
			return String.format("%.0f米", distance * 1000d);
		} else {
			return String.format("%.1f千米", distance);
		}
	}
}
