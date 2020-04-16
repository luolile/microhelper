package com.microhelper.common.cache;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import redis.clients.jedis.Jedis;

import com.alibaba.fastjson.JSONObject;

@Component
public class CacheUtil {

	/** 日志输出 */
//	private final Logger log = Logger.getLogger(CacheUtil.class);
	@Autowired
	private JedisUtil jedisUtil;

	/**
	 * 将数据存入缓存
	 * @param key
	 * @param val
	 * @return
	 */
	public void saveString(String key, String val) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			jedis.set(key, val);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 将数据存入缓存（并设置失效时间）
	 * @param key
	 * @param val
	 * @param seconds
	 * @return
	 */
	public void saveString(String key, String val, int seconds) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			jedis.set(key, val);
			jedis.expire(key, seconds);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 从缓存中取得字符串数据
	 * 
	 * @param key
	 * @return 数据
	 */
	public String getString(String key) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			// 暂时从缓存中取得
			return jedis.get(key);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 将 key的值保存为 value ，当且仅当 key 不存在。 若给定的 key 已经存在，则 SETNX 不做任何动作。 SETNX 是『SET
	 * if Not eXists』(如果不存在，则 SET)的简写。 <br>
	 * 保存成功，返回 true <br>
	 * 保存失败，返回 false
	 */
	public boolean saveNX(String key, String val) {

		Jedis jedis = jedisUtil.getJedis();
		try {
			/** 设置成功，返回 1 设置失败，返回 0 **/
			return (jedis.setnx(key, val).intValue() == 1);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 将 key的值保存为 value ，当且仅当 key 不存在。 若给定的 key 已经存在，则 SETNX 不做任何动作。 SETNX 是『SET
	 * if Not eXists』(如果不存在，则 SET)的简写。 <br>
	 * 保存成功，返回 true <br>
	 * 保存失败，返回 false
	 * 
	 * @param key
	 * @param val
	 * @param expire 超时时间
	 * @return 保存成功，返回 true 否则返回 false
	 */
	public boolean saveNX(String key, String val, int expire) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			boolean ret = (jedis.setnx(key, val).intValue() == 1);
			if (ret) {
				jedis.expire(key, expire);
			}
			return ret;
		} finally {
			jedis.close();
		}
	}

	/**
	 * 保存到hash集合中
	 * 将哈希表 key 中的域 field 的值设为 value
	 * @param hName 集合名
	 * @param key
	 * @param val
	 */
	public void hashSave(String key, String field, String value) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			jedis.hset(key, field, value);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 从hash集合里取得
	 * 返回哈希表 key 中给定域 field 的值
	 * @param hName
	 * @param key
	 * @return
	 */
	public String hashGet(String key, String field) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.hget(key, field);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 返回哈希表 key 中，所有的域和值
	 * @param key
	 * @return
	 */
	public Map<String, String> hashGetAll(String key) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.hgetAll(key);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 返回哈希表 key 中，一个或多个给定域的值
	 * @param key
	 * @param fields
	 * @return
	 */
	public List<String> hashMultiGet(String key, final String... fields) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.hmget(key, fields);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 取得序列值的下一个
	 * 
	 * @param key
	 * @return
	 */
	public long nextSequence(String key) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.incr(key);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 取得序列值的下一个
	 * 
	 * @param key
	 * @return
	 */
	public long nextSequence(String key, long increment) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.incrBy(key, increment);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 将自增变量存入缓存
	 */
	public void initSequence(String key, long initVal) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			jedis.del(key);
			jedis.incrBy(key, initVal);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 保存复杂类型数据到缓存
	 * 
	 * @param key
	 * @param obj
	 * @return
	 */
	public void saveBean(String key, Object obj) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			jedis.set(key, JSONObject.toJSONString(obj));
		} finally {
			jedis.close();
		}
	}


	/**
	 * 取得复杂类型数据
	 * 
	 * @param key
	 * @param obj
	 * @param clazz
	 * @return
	 */
	public <T> T getBean(String key, Class<T> clazz) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			String value = jedis.get(key);
			if (value == null) {
				return null;
			}
			return JSONObject.parseObject(value, clazz);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 判断是否缓存了数据
	 * 
	 * @param key 数据KEY
	 * @return 判断是否缓存了
	 */
	public boolean isCached(String key) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.exists(key);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 设置超时时间
	 * 
	 * @param key
	 * @param seconds
	 */
	public void expire(String key, int seconds) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			jedis.expire(key, seconds);
		} finally {
			jedis.close();
		}
	}

	/**
	 * 从缓存中删除数据
	 * 
	 * @param string
	 * @return
	 */
	public String delString(String key) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			String str = jedis.get(key);
			jedis.del(key);
			return str;
		} finally {
			jedis.close();
		}
	}

	/**
	 * 从缓存中删除数据
	 * 
	 * @param string
	 * @return
	 */
	public void delKey(String key) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			jedis.del(key);
		} finally {
			jedis.close();
		}
	}



	/**
	 * 判断是否缓存在指定的集合中
	 * 
	 * @param key 数据KEY
	 * @param val 数据
	 * @return 判断是否缓存了
	 */
	public boolean isMember(String key, String val) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.sismember(key, val);
		} finally {
			jedis.close();
		}
	}



	/**
	 * 查询出符合某一特征的所有key
	 * 
	 * @param keyPattern
	 * @return
	 */
	public Set<String> listKey(String keyPattern) {
		Jedis jedis = jedisUtil.getJedis();
		try {
			return jedis.keys(keyPattern);
		} finally {
			jedis.close();
		}
	}

}
