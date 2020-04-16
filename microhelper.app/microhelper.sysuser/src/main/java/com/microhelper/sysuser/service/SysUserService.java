package com.microhelper.sysuser.service;

import com.microhelper.sysuser.persistent.model.SysUser;

/**
 * 
 * 类SysUserService.java的实现描述：系统用户的相关服务
 * @author llh 2020年4月8日 下午9:23:42
 */
public interface SysUserService {
	
	/***
	 * 根据登陆名 获取用户信息
	 * 
	 * @return
	 */
	SysUser selectByLoginName(String loginName);
}
