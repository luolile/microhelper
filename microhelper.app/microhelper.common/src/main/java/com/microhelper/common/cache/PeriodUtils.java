package com.microhelper.common.cache;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.microhelper.common.bean.Dict2Bean;

/**
 * 角色工具类
 * @author: yuy
 * @time: 2016年12月2日
 */
@Component
public class PeriodUtils {
	// 时段mapper
	@Autowired
	private static final Logger log = Logger.getLogger(PeriodUtils.class);
	
	/**key:时段id  value：开始时刻-结束时刻 */
	// 整点时段
	private static ArrayList<Dict2Bean> PERIOD_ID_TIME_HOUR_MAP = null;
	// 半点时段
	private static ArrayList<Dict2Bean> PERIOD_ID_TIME_HALFHOUR_MAP = null;
	// 工位时段
	private static ArrayList<Dict2Bean> PERIOD_ID_TIME_SEAT_MAP = null;
	// 所有时段List
	
	/**
	 * 获取整点时段组(periodId,periodBegin-periodEnd)
	 */
	public static List<Dict2Bean> getPeriodsHour() {
		return PERIOD_ID_TIME_HOUR_MAP;
	}
	
	/**
	 * 获取整点时段
	 */
	public static String getPeriodHourById(Integer id) {
		for(int i =0; i < PERIOD_ID_TIME_HOUR_MAP.size(); i++){
			if (PERIOD_ID_TIME_HOUR_MAP.get(i).getCode() == id){
				return PERIOD_ID_TIME_HOUR_MAP.get(i).getName();
			}
		}
		return "";
	}
	
	/**
	 * 获取半点时段组(periodId,periodBegin-periodEnd)
	 */
	public static List<Dict2Bean> getPeriodsHalfHour() {
		return PERIOD_ID_TIME_HALFHOUR_MAP;
	}
	
	/**
	 * 获取半点时段
	 */
	public static String getPeriodHalfHourById(Integer id) {
		for(int i =0; i < PERIOD_ID_TIME_HALFHOUR_MAP.size(); i++){
			if (PERIOD_ID_TIME_HALFHOUR_MAP.get(i).getCode() == id){
				return PERIOD_ID_TIME_HALFHOUR_MAP.get(i).getName();
			}
		}
		return "";
	}
	

	/**
	 * 获取工位时段组(periodId,periodBegin-periodEnd)
	 */
	public static List<Dict2Bean> getPeriodsSeat() {
		return PERIOD_ID_TIME_SEAT_MAP;
	}
	
	/**
	 * 获取工位时段
	 */
	public static String getPeriodSeatById(Integer id) {
		for(int i =0; i < PERIOD_ID_TIME_SEAT_MAP.size(); i++){
			if (PERIOD_ID_TIME_SEAT_MAP.get(i).getCode() == id){
				return PERIOD_ID_TIME_SEAT_MAP.get(i).getName();
			}
		}
		return "";
	}

}
