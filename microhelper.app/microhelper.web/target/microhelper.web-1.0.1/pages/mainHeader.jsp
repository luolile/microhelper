<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script src="${contextPath}/static/js/page/mainHeader.js"></script>
<a href="" id="menu-toggle"></a> 
<a class="logo pull-left" href="index.html">小邦系统</a>

<div class="media-body">
    <div class="media" id="top-menu">
        <div class="pull-left tm-icon">
            <a data-drawer="messages" class="drawer-toggle" href="">
                <i class="sa-top-message"></i>
                <i class="n-count animated">5</i>
                <span>信息</span>
            </a>
        </div>
        <div class="pull-left tm-icon">
            <a data-drawer="notifications" class="drawer-toggle" href="">
                <i class="sa-top-updates"></i>
                <i class="n-count animated">9</i>
                <span>更新</span>
            </a>
        </div>
        <div id="time" class="pull-right">
            <span id="hours"></span>
            :
            <span id="min"></span>
            :
            <span id="sec"></span>
        </div>
        
        <div class="media-body">
            <input type="text" class="main-search">
        </div>
    </div>
</div>