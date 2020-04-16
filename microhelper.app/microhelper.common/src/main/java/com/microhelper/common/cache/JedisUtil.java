package com.microhelper.common.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.microhelper.common.util.SystemProperties;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

@Component
public class JedisUtil {
	
	/** -1 不做限制 */
	private static final int REDIS_MAXACTIVE = -1;
	/** 最大空闲时间(s) */
	private static final int REDIS_MAXIDLE = 3;
	/** 最大等待时间(ms) */
	private static final long REDIS_MAXWAIT = 3000;
	/** jedis线程池 */
	private JedisPool jedisPool;
	
	@Autowired
	public JedisUtil (SystemProperties systemProperties) {
		jedisPool = createPool(systemProperties);
	}
	
	private JedisPool createPool(SystemProperties systemProperties) {
		JedisPoolConfig config = new JedisPoolConfig();
		config.setMaxTotal(REDIS_MAXACTIVE);
		config.setMaxIdle(REDIS_MAXIDLE);
		config.setMaxWaitMillis(REDIS_MAXWAIT);
		config.setTestOnBorrow(true);
		config.setTestOnReturn(true);
//		return new JedisPool(config, systemProperties.getRedisHost(), systemProperties.getRedisPort(), 3000, "123_456_789");
		return new JedisPool(config, systemProperties.getRedisHost(), systemProperties.getRedisPort(), 3000);
	}

	/**
	 * 获取连接实例
	 * 
	 * @param useTrans
	 *            是否使用事务
	 * @return
	 */
	public Jedis getJedis() {
		return getJedis(false);
	}

	/**
	 * 获取连接实例
	 * 
	 * @param useTrans
	 *            是否使用事务
	 * @return
	 */
	public Jedis getJedis(boolean useTrans) {
		Jedis jedis = null;
		try {
			jedis = jedisPool.getResource();
		} catch (Exception e) {
		}
		return jedis;
	}
	
}