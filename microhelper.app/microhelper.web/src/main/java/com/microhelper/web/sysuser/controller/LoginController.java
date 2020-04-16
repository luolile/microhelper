package com.microhelper.web.sysuser.controller;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.microhelper.common.util.Const;
import com.microhelper.common.util.Constant;
import com.microhelper.common.util.MD5Util;
import com.microhelper.sysuser.bean.AdminUserInfo;
import com.microhelper.sysuser.persistent.model.SysUser;
import com.microhelper.sysuser.service.SysUserService;


/**
 * 
 * 用户登录
 * 
 * @author llh
 *
 */
@Controller("loginController")
public class LoginController {
    
    @Autowired
    private SysUserService sysUserService;

    private static Logger logger=Logger.getLogger(LoginController.class);
    @RequestMapping(value="/login")
    public ModelAndView login(@RequestParam(value="loginName", defaultValue = "") String loginName,
            @RequestParam(value="password", defaultValue = "") String password,
            HttpServletRequest request){
        
        ModelAndView returnMV = new ModelAndView();
        AdminUserInfo adminUserInfo = new AdminUserInfo();
        logger.debug("判断用户名密码是否为空");
        if (StringUtils.isNotEmpty(loginName) && StringUtils.isNotEmpty(password)) {
        	logger.debug("查询登录的用户");
            SysUser userInfo = sysUserService.selectByLoginName(loginName);
            if(userInfo== null 
                    || Constant.DELETE_FLG.equals(userInfo.getDeleteFlag())){
            	logger.debug("login no valid user");
            	returnMV.setViewName("login");
            }else if (userInfo.getPassword().equalsIgnoreCase(MD5Util.MD5(password))) {
                HttpSession session  = request.getSession();
                adminUserInfo.grepPropertyValues(adminUserInfo, userInfo);
                
                /*// 获取用户对应菜单功能权限 列表
                List<Map<String, Object>> rightsList = systemRoleService.selectMenuRightsByAdminId(userInfo.getUserId());
                if (rightsList != null && rightsList.size() > 0) {
                    StringBuilder strBuilder = new StringBuilder();
                    for (Map<String, Object> map : rightsList) {
                        if (map != null && map.get("menu_rights") != null) {
                            strBuilder.append(map.get("menu_rights"));
                        }
                    }
                    adminUserInfo.setMenuRights(strBuilder.toString());
                }*/
                session.setAttribute(Const.SESSION_USER_INFO, adminUserInfo);
                returnMV.setViewName("main");
                
                return returnMV;
            }else{
                returnMV.addObject("errorMessage", "用户名密码错误！");
                returnMV.setViewName("login");
                return returnMV;
            }
        } else {
        	logger.debug("参数为空是否为空");
        }
        returnMV.setViewName("login");
        return returnMV;
    }
    
    /**
     * 退出登录
     * 
     * @param request
     * @return
     */
    @RequestMapping(value="/logout")
    public ModelAndView logout(HttpServletRequest request) {
        ModelAndView returnMV = new ModelAndView();
        HttpSession session  = request.getSession();
        session.removeAttribute(Const.SESSION_USER_ID);
        returnMV.setViewName("login");
        return returnMV;
    }
}
