package com.microhelper.sysuser.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.microhelper.sysuser.persistent.mapper.SysUserMapper;
import com.microhelper.sysuser.persistent.model.SysUser;



@Service("sysUserService")
public class SysUserServiceImpl implements SysUserService{

	/*@Autowired
	private SysUserMoreMapper sysUserMoreMapper;*/
	
	@Autowired
	private SysUserMapper sysUserMapper;

	/**
	 * 根据登录名称查找用户信息
	 */
	@Override
	public SysUser selectByLoginName(String loginName) {
		return sysUserMapper.selectByPrimaryKey(new Integer(1));
		//return sysUserMoreMapper.selectByLoginName(loginName);
	}
	
}
