package com.microhelper.common.service;

import java.util.List;

/**
 * 
 * 类SysUserService.java的实现描述：系统用户的相关服务
 * @author llh 2020年4月8日 下午9:23:42
 */
public interface BaseService<T> {
	
	/**
	 * 查询列表
	 * 
	 * @param record
	 * @return
	 */
	List<T> selectList(T record, Integer pageNum);

	/**
	 * 插入一条记录
	 * 
	 * @param record
	 * @return
	 */
	int insert(T record);

	/**
	 * 选择性插入一条记录(判断为空情况)
	 * 
	 * @param record
	 * @return
	 */
	int insertSelective(T record);

	/**
	 * 通过主键查询一条记录
	 * 
	 * @param userId
	 * @return
	 */
	T selectByPrimaryKey(Integer adminId);

	/**
	 * 通过主键选择性更新
	 * 
	 * @param record
	 * @return
	 */
	int updateByPrimaryKeySelective(T record);
}
