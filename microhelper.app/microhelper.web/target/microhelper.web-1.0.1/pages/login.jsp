<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ include file="/common/top.jspf"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no">
        <meta charset="UTF-8">
        <meta name="description" content="Violate Responsive Admin Template">
        <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">
        <title>小邦系统</title>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/login.css">
        <jsp:directive.include file="/common/introduction.jspf"/>
         <script src="${contextPath}/static/js/backstage/js/functions.js"></script>
        </head>
<body id="skin-blur-violate">
<form:form id="loginForm" modelAttribute="sysUser" action="${pageContext.request.contextPath}/login" method="post">
 <section id="login">
            <header>
                <h1>小邦系统</h1><br>
                <p>床前明月光，有事找小邦^v^</p>
            </header>
        
            <div class="clearfix"></div>
            
            <!-- Login -->
            <div class="box tile animated active" id="box-login">
                <h2 class="m-t-0 m-b-15">登录</h2>
                <input type="text" class="login-control m-b-10"id="usercode" name="loginName" placeholder="ID">
                <input type="password" class="login-control" id="password" name="password"  placeholder="密码">
                <div class="checkbox m-b-20">
                    <label>
                        <input type="checkbox">
                                                             记住我
                    </label>
                </div>
                <button class="btn btn-sm m-r-5" id="btn_submit">登录</button>
                
                <small>
                    <a class="box-switcher" data-switch="box-register" href="">还没有账号？</a> 或
                    <a class="box-switcher" data-switch="box-reset" href="">忘记密码？</a>
                </small>
            </div>
        </section>    
</form:form>
<script type="text/javascript">
function validate() {
	var passwd = $("#password").val();
	var usercode = $("#usercode").val();
	if (passwd == "" && usercode == "") {
		return false;
	}
	var defValue = document.getElementById("usercode").defaultValue;
	if ($('#usercode').val() == defValue) {
		return false;
	}
	
	$("#btn_submit").click(function() {
	       //校验成功后提交表单
	       if ($('#loginForm').validates()) {
	           $("#contentDiv").SubmitForm($("#loginForm"), "${pageContext.request.contextPath}/login");
	       }
	    }); 
	return true;
}
</script>
</body>
</html>