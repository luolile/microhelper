package com.microhelper.common.cache;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 集群下线程同步工具类
 * @author: caowuchao
 * @time: 2015年4月14日
 */
@Component
public class SynchronizeUtil {

	/** 加锁类型 */
	public enum LOCK_TYPE {
		MOBILE_NO("lock.MOBILE_NO:"),
		OPEN_ID("lock.OPEN_ID:"),
		TOKEN("lock.TOKEN:");

		private String value = "";

		private LOCK_TYPE(String val) {
			this.value = val;
		}

		public String getValue() {
			return this.value;
		}
	}
	
	@Autowired
	private CacheUtil cacheUtil;

	/**
	 * 记录本地同步锁
	 */
	private static final ThreadLocal<String> lockRepos = new ThreadLocal<String>();
	private static String VAL = "1";

	/**
	 * 锁定key，防止集群下该值多次操作
	 * <br> 锁定成功，返回 true
	 * <br> 锁定失败，返回 false
	 * @param type
	 * @param key
	 * @return
	 */
	public boolean lock(LOCK_TYPE type, String key) {
		if (StringUtils.isBlank(key)) {
			return false;
		}

		lockRepos.set(type.getValue() + key);
		return cacheUtil.saveNX(type.getValue() + key, VAL, 30);
	}

	/**
	 * 删除已锁定的数据
	 * @param type
	 * @param key
	 */
	public void release(LOCK_TYPE type, String key) {
		try {
			cacheUtil.delString(type.getValue() + key);
		} catch (Exception e) {
			e.printStackTrace();
		}
		lockRepos.remove();
	}

	/**
	 * 删除已锁定的数据
	 * @param type
	 * @param key
	 */
	public void release() {
		String key = lockRepos.get();
		if (StringUtils.isNotBlank(key)) {
			cacheUtil.delKey(key);
			lockRepos.remove();
		}
	}

}
