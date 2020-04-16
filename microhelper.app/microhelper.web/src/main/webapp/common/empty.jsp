<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<%-- 用于标识处理失败的div，action中的result默认是处理成功 --%>
<s:if test="result != 1"><div id="_error"   style="display:none"></div></s:if>