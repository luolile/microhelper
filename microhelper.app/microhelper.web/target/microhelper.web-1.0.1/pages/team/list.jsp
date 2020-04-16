<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <link rel="stylesheet" href="${contextPath}/static/js/zTreev3/css/demo.css" type="text/css">
    <link rel="stylesheet" href="${contextPath}/static/js/zTreev3/css/zTreeStyle/zTreeStyle.css" type="text/css">
    <script type="text/javascript" src="${contextPath}/static/js/zTreev3/js/jquery.ztree.core.js"></script>
    <script type="text/javascript" src="${contextPath}/static/js/zTreev3/js/jquery.ztree.excheck.js"></script>
    <script type="text/javascript" src="${contextPath}/static/js/zTreev3/js/jquery.ztree.exedit.js"></script>
    
<!-- Main content -->
<section class="content" ng-controller="teamController">
    <div class="zTreeDemoBackground left">
        <span>组织结构</span>
        <ul id="treeDemo" class="ztree"></ul>
    </div>
</section>
<!-- /.content -->
