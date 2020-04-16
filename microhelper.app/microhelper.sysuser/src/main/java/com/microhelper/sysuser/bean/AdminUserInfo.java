package com.microhelper.sysuser.bean;

import com.microhelper.sysuser.persistent.model.SysUser;



/**
 * 后台用户信息表 （session 中存放）
 * 
 * @author: 
 */
public class AdminUserInfo extends SysUser {

	private String menuRights = "";

	public String getMenuRights() {
		return menuRights;
	}

	public void setMenuRights(String menuRights) {
		this.menuRights = menuRights;
	}
	
	public void grepPropertyValues(AdminUserInfo self, SysUser goal){
		self.setUserId(goal.getUserId());
		self.setUserName(goal.getUserName());
		self.setUserNo(goal.getUserNo());
		self.setDeptId(goal.getDeptId());
	}
}
