<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${contextPath}/static/js/page/tips.js"></script> 
<div class="container">
<!-- Breadcrumb -->
                <ol class="breadcrumb hidden-xs">
                    <li><a href="#">*</a></li>
                    <li><a href="#">*</a></li>
                    <li class="active">首页</li>
                </ol>
                <h4 class="page-title">首页</h4>
</div>
<div class="block-area">
                    <h3 class="block-title">全球观</h3>
                    
                    <div class="row">
                        <!-- World Map -->
                        <div class="col-md-8">
                            <div class="tile">
                                <h2 class="tile-title">全球地图</h2>
                                <div class="tile-config dropdown">
                                    <a data-toggle="dropdown" href="" class="tooltips tile-menu" title="Options"></a>
                                    <ul class="dropdown-menu animated pull-right text-right">
                                        <li><a href="">Refresh</a></li>
                                        <li><a href="">Settings</a></li>
                                    </ul>
                                </div>
                                
                                <div id="world-map" style="height: 400px"></div>
                            </div>
                        </div>
                        
                        <!-- USA Map -->
                        <div class="col-md-4">
                            <div class="tile">
                                <h2 class="tile-title">米国地图</h2>
                                <div class="tile-config dropdown">
                                    <a data-toggle="dropdown" href="" class="tooltips tile-menu" title="Options"></a>
                                    <ul class="dropdown-menu animated pull-right text-right">
                                        <li><a href="">Refresh</a></li>
                                        <li><a href="">Settings</a></li>
                                    </ul>
                                </div>
                                
                                <div id="usa-map"></div>
                            </div>
                        </div>
                    </div>
                </div>
</div>