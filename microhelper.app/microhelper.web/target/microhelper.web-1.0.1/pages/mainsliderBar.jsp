<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script src="${contextPath}/static/js/page/mainsliderBar.js"></script>
<!-- Sidbar Widgets -->
<div class="side-widgets overflow">
    <!-- Profile Menu -->
    <div class="text-center s-widget m-b-25 dropdown" id="profile-menu">
        <a href="" data-toggle="dropdown">
            <img class="profile-pic animated" src="${contextPath}/static/js/backstage/img/profile-pic.jpg" alt="">
        </a>
        <ul class="dropdown-menu profile-menu">
            <li><a href="">我的个人资料</a> <i class="icon left">&#61903;</i><i class="icon right">&#61815;</i></li>
            <li><a href="">消息</a> <i class="icon left">&#61903;</i><i class="icon right">&#61815;</i></li>
            <li><a href="">设置</a> <i class="icon left">&#61903;</i><i class="icon right">&#61815;</i></li>
            <li><a href="">注销</a> <i class="icon left">&#61903;</i><i class="icon right">&#61815;</i></li>
        </ul>
        <h4 class="m-0">马林达霍利威</h4>
        @malinda-h
    </div>
     
    <!-- Calendar -->
    <div class="s-widget m-b-25">
        <div id="sidebar-calendar"></div>
    </div>
    
    <!-- Feeds -->
    <div class="s-widget m-b-25">
        <h2 class="tile-title">
                                                新闻动态
        </h2>
        
        <div class="s-widget-body">
            <div id="news-feed"></div>
        </div>
    </div>
    
    <!-- Projects -->
    <div class="s-widget m-b-25">
        <h2 class="tile-title">
                                               项目进行中
        </h2>
        
        <div class="s-widget-body">
            <div class="side-border">
                <small>Joomla网站</small>
                <div class="progress progress-small">
                     <a href="#" data-toggle="tooltip" title="" class="progress-bar tooltips progress-bar-danger" style="width: 60%;" data-original-title="60%">
                          <span class="sr-only">60% Complete</span>
                     </a>
                </div>
            </div>
            <div class="side-border">
                <small>Opencart电子商务网站</small>
                <div class="progress progress-small">
                     <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-info" style="width: 43%;" data-original-title="43%">
                          <span class="sr-only">43% Complete</span>
                     </a>
                </div>
            </div>
            <div class="side-border">
                <small>社交媒体API</small>
                <div class="progress progress-small">
                     <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-warning" style="width: 81%;" data-original-title="81%">
                          <span class="sr-only">81% Complete</span>
                     </a>
                </div>
            </div>
            <div class="side-border">
                <small>VB.Net软件包</small>
                <div class="progress progress-small">
                     <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-success" style="width: 10%;" data-original-title="10%">
                          <span class="sr-only">10% Complete</span>
                     </a>
                </div>
            </div>
            <div class="side-border">
                <small>Chrome扩展程序</small>
                <div class="progress progress-small">
                     <a href="#" data-toggle="tooltip" title="" class="tooltips progress-bar progress-bar-success" style="width: 95%;" data-original-title="95%">
                          <span class="sr-only">95% Complete</span>
                     </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Side Menu -->
<ul class="list-unstyled side-menu">
    <li class="active">
        <a class="sa-side-home" href="#/tips">
            <span class="menu-item">首页</span>
        </a>
    </li>    
    <li class="dropdown">
        <a class="glyphicon glyphicon-send" >
        <span class="menu-item">派遣</span>
        </a>
        <ul class="list-unstyled menu-item">
            <li><a href="#/sendList"><span class="glyphicon glyphicon-star"></span>&nbsp;&nbsp;人才</a></li>      
            <li><a href="#/customList"><span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;客户</a></li>
            <li><a href="#/companyList"><span class="glyphicon glyphicon-globe"></span>&nbsp;&nbsp;客户公司</a></li>      
        </ul>
    </li>
    <li class="dropdown">
        <a class="glyphicon glyphicon-eye-open" >
            <span class="menu-item">面试</span>
        </a>
        <ul class="list-unstyled menu-item">
            <li><a href="form-elements.html"><span class="icon"style="font-size:18px;">&#61769;</span>&nbsp;&nbsp;试卷</a></li>
            <li><a href="#/interviewList"><span class="icon"style="font-size:18px;">&#61708;</span>&nbsp;&nbsp;面试人员</a></li>
		    <li><a href="form-elements.html"><span class="icon"style="font-size:18px;">&#61753;</span>&nbsp;&nbsp;曲线变量图统计</a></li>
		    <li><a href="form-elements.html"><span class="icon"style="font-size:18px;">&#61721;</span>&nbsp;&nbsp;属性分析图</a></li>
        </ul>
    </li>
    
    <li class="dropdown">
        <a class="glyphicon glyphicon-heart" >
            <span class="menu-item">人事管理</span>
        </a>
        <ul class="list-unstyled menu-item">
            <li><a href="#/organizationList"><span class="glyphicon glyphicon-th-list"></span>&nbsp;&nbsp;组织一览</a></li>
            <li><a href="#/organizationList"><span class="glyphicon glyphicon-th-list"></span>&nbsp;&nbsp;人员一览</a></li>
            <li><a href="#/proclamationList"><span class="glyphicon glyphicon-th-list"></span>&nbsp;&nbsp;公告一览</a></li>
        </ul>
    </li>
    
    <li class="dropdown">
        <a class="glyphicon glyphicon-wrench">
            <span class="menu-item">系统管理</span>
        </a>
        <ul class="list-unstyled menu-item">
            <li><a href="#/taglibList"><span class="icon"style="font-size:18px;">&#61821;</span>&nbsp;&nbsp;标签库</a></li>
        </ul>
    </li>
</ul>