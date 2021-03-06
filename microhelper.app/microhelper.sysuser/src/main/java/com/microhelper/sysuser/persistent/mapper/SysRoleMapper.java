package com.microhelper.sysuser.persistent.mapper;

import com.microhelper.sysuser.persistent.model.SysRole;

public interface SysRoleMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sys_role
     *
     * @mbggenerated Mon Apr 13 20:56:34 CST 2020
     */
    int deleteByPrimaryKey(Integer roleId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sys_role
     *
     * @mbggenerated Mon Apr 13 20:56:34 CST 2020
     */
    int insert(SysRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sys_role
     *
     * @mbggenerated Mon Apr 13 20:56:34 CST 2020
     */
    int insertSelective(SysRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sys_role
     *
     * @mbggenerated Mon Apr 13 20:56:34 CST 2020
     */
    SysRole selectByPrimaryKey(Integer roleId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sys_role
     *
     * @mbggenerated Mon Apr 13 20:56:34 CST 2020
     */
    int updateByPrimaryKeySelective(SysRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table sys_role
     *
     * @mbggenerated Mon Apr 13 20:56:34 CST 2020
     */
    int updateByPrimaryKey(SysRole record);
}