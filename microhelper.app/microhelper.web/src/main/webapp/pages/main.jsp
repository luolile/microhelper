<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ include file="/common/top.jspf"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no">
        <meta charset="UTF-8">
        <meta name="description" content="Violate Responsive Admin Template">
        <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">
        <title>小邦系统</title>
        <jsp:directive.include file="/common/introduction.jspf"/>
        <script type="text/javascript" src="${contextPath}/static/js/page/main.js"></script> 
</head>
<body id="skin-blur-violate" ng-app="Home">
        <header id="header" class="media">
            <jsp:directive.include file="mainHeader.jsp"/>
        </header>
        
        <div class="clearfix"></div>
        
        <section id="main" class="p-relative" role="main">
            
            <!-- Sidebar -->
            <aside id="sidebar">
                <jsp:directive.include file="mainsliderBar.jsp"/>
            </aside>
        
            <!-- Content -->
            <section id="content" class="container">
		        <div ng-view></div>
                <jsp:directive.include file="mainAlert.jsp"/>
		        <jsp:directive.include file="mainChat.jsp"/>
		    </section>
    </section>
</body>
</html>
  