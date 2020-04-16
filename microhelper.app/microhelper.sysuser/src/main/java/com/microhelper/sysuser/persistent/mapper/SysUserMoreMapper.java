package com.microhelper.sysuser.persistent.mapper;

import com.microhelper.sysuser.persistent.model.SysUser;

public interface SysUserMoreMapper {
	
	/**
	 * 根据名称查找用户信息
	 * @param loginName
	 * @return
	 */
	SysUser selectByLoginName(String loginName);
}