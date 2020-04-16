var app = angular.module('Home', ['ngRoute']);
// 金额处理
app.filter('myFormatSalary', function() {
	salaryCn = function(value){
    	//var value = $scope.applicant.salary;
    	// 1000000000(亿)
//    	var unity = 100000000;
//    	var yv = salaryCnUnit(value, unity);
    	
//    	// 10000(万)
//    	value = value%unity;
//    	var unitw = 10000;
//    	var wv = salaryCnUnit(value, unitw);
    	// 1000(千)
//    	value = value%unitw;
    	var unitq = 1000;
    	var qv = salaryCnUnit(value, unitq);
//    	// 100(百)
//    	value = value%unitq;
//    	var unitb = 100;
//    	var bv = salaryCnUnit(value, unitb);
//    	
//    	// 10(十)
//    	value = value%unitb;
//    	var units = 10;
//    	var sv = salaryCnUnit(value, units);
//    	
//    	// 1(个)
//    	value = value%units;
//    	var unitg = 1;
//    	var gv = salaryCnUnit(value, unitg);
    	
    	var result = "";
//    	if (yv > 0) {
//    		result += yv + "亿";
//    	}
//    	if (wv > 0) {
//    		result += wv + "万"; 
//    	}
    	if (qv > 0) {
    		result += qv + "k"; 
    	}
//    	if (bv > 0) {
//    		result += bv + "百"; 
//    	}
//    	if (sv > 0) {
//    		result += sv + "十"; 
//    	}
//    	if (gv > 0) {
//    		result += gv; 
//    	}
    	return result;
    }
    
    salaryCnUnit = function(value, unit){
    	if (value == null || value == undefined) {
    		return 0;
    	}
    	if (value >= unit) {
    		return value/unit;
    	}
    	return 0;
    }
    
    return function(x) {
        return salaryCn(x);
    };
});
// 路由器
app.config(function ($routeProvider) {
        $routeProvider
                .when('/tips', {
                    templateUrl: contextPath+'/pages/tips.jsp'
                })
                //kwoks -- 客户 客户公司
                .when('/customList', {
                	// 客户
                    templateUrl: contextPath +'/pages/custom/customList.jsp'
                })
                .when('/customadd', {
                	// 客户添加
                    templateUrl: contextPath +'/pages/custom/customadd.jsp'
                })
                .when('/customEdit', {
                	// 客户修改
                    templateUrl: contextPath +'/pages/custom/customEdit.jsp'
                })
                .when('/companyList', {
                	//客户公司
                	templateUrl: contextPath +'/pages/company/companyList.jsp'
                })
                .when('/companyAdd', {
                	//客户公司添加
                	templateUrl: contextPath +'/pages/company/companyAdd.jsp'
                })
                .when('/companyEdit', {
                	//客户公司编辑
                	templateUrl: contextPath +'/pages/company/companyAdd.jsp'
                })
                .when('/companyDetail', {
                	 // 标签编辑
                    templateUrl: contextPath +'/pages/taglib/companyDetail.jsp'
                })
                .when('/organizationList', {
                	// 组织一览
                    templateUrl: contextPath +'/pages/organization/organizationList.jsp'
                 })
                 .when('/organizationAdd', {
                	// 组织添加
                    templateUrl: contextPath +'/pages/organization/organizationAdd.jsp'
                 })
                 .when('/organizationEdit', {
                	 // 组织编辑
                    templateUrl: contextPath +'/pages/organization/organizationAdd.jsp'
                })
                .when('/organizationDetail', {
                	 // 组织详情
                    templateUrl: contextPath +'/pages/organization/organizationDetail.jsp'
                })
                
                .when('/proclamationList', {
                	// 公告一览
                    templateUrl: contextPath +'/pages/proclamation/proclamationList.jsp'
                 })
                 .when('/proclamationAdd', {
                	// 公告添加
                    templateUrl: contextPath +'/pages/proclamation/proclamationAdd.jsp'
                 })
                 .when('/proclamationEdit', {
                	 // 公告编辑
                    templateUrl: contextPath +'/pages/proclamation/proclamationAdd.jsp'
                })
                .when('/proclamationDetail', {
                	 // 公告详情
                    templateUrl: contextPath +'/pages/proclamation/proclamationDetail.jsp'
                })
//                .when('/proclamationUpload', {
//                	 // 公告上传
//                    templateUrl: contextPath +'/pages/proclamation/proclamationUpload.jsp'
//                })
                .when('/taglibList', {
                	// 标签一览
                    templateUrl: contextPath +'/pages/taglib/taglibList.jsp'
                 })
                 .when('/taglibAdd', {
                	// 标签添加
                    templateUrl: contextPath +'/pages/taglib/taglibAdd.jsp'
                 })
                 .when('/taglibEdit', {
                	 // 标签编辑
                    templateUrl: contextPath +'/pages/taglib/taglibAdd.jsp'
                })
                .when('/taglibDetail', {
                	 // 标签编辑
                    templateUrl: contextPath +'/pages/taglib/taglibDetail.jsp'
                })
                .when('/interviewList', {
                	// 面试人员一览页面
                    templateUrl: contextPath +'/pages/interview/interviewList.jsp'
                 })
                 .when('/interviewAdd', {
                	 // 面试添加页面
                    templateUrl: contextPath +'/pages/interview/interviewAdd.jsp'
                 })
                 .when('/interviewEdit/', {
                	 // 面试编辑页面
                    templateUrl: contextPath +'/pages/interview/interviewDetailSelect.jsp'
                })
                .when('/interviewDetail/', {
                	// 面试编辑页面
                    templateUrl: contextPath +'/pages/interview/interviewDetail.jsp'
                })
                .when('/interviewAppointmentDetail/', {
                	//预约面试页面
                	templateUrl: contextPath+'/pages/interview/interviewAppointmentDetail.jsp'
                })
                .when('/interviewAnswerDetail/', { 
                	//答题面试环节
                	templateUrl: contextPath+'/pages/interview/interviewAnswer.jsp'
                })
                .when('/interviewTalkDetail/',{
                	//洽谈环节
                	templateUrl: contextPath+'/pages/interview/interviewTalkDetail.jsp'
                })
                .when('/interviewFeedBackDetail/',{
                	//回访环节
                	templateUrl: contextPath+'/pages/interview/interviewFeedBackDetail.jsp'
                })
               .when('/sendList/',{
                	//派遣人才列表
                	templateUrl: contextPath+'/pages/send/sendPersonList.jsp'
                })
                .when('/sendAdd/',{
                	//派遣人才添加
                	templateUrl: contextPath+'/pages/send/sendPersonAdd.jsp'
                })
                .otherwise({
                	// 默认跳转页
                    redirectTo: '/tips'
                 });
    });

// 初期焕肤模块
$(document).ready(function(){
    /* --------------------------------------------------------
	Template Settings
    -----------------------------------------------------------*/
    
    var settings =  '<a id="settings" href="#changeSkin" data-toggle="modal">' +
			'<i class="fa fa-gear"></i> Change Skin' +
		    '</a>' +   
		    '<div class="modal fade" id="changeSkin" tabindex="-1" role="dialog" aria-hidden="true">' +
			'<div class="modal-dialog modal-lg">' +
			    '<div class="modal-content">' +
				'<div class="modal-header">' +
				    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
				    '<h4 class="modal-title">Change Template Skin</h4>' +
				'</div>' +
				'<div class="modal-body">' +
				    '<div class="row template-skins">' +
					'<a data-skin="skin-blur-violate" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-violate.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-lights" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-lights.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-city" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-city.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-greenish" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-greenish.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-night" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-night.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-blue" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-blue.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-sunny" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-sunny.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-cloth" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-cloth.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-tectile" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-tectile.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-chrome" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-chrome.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-ocean" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-ocean.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-sunset" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-sunset.jpg" alt="">' +
					'</a>' +
					'<a data-skin="skin-blur-yellow" class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-yellow.jpg" alt="">' +
					'</a>' +
					'<a  data-skin="skin-blur-kiwi"class="col-sm-2 col-xs-4" href="">' +
					    '<img src="' + contextPath + '/static/js/backstage/img/skin-kiwi.jpg" alt="">' +
					'</a>' +
				    '</div>' +
				'</div>' +
			    '</div>' +
			'</div>' +
		    '</div>';
    $('#main').prepend(settings);
            
    $('body').on('click', '.template-skins > a', function(e){
		e.preventDefault();
		var skin = $(this).data('skin');
		$('body').attr('id', skin);
		$('#changeSkin').modal('hide');
    });
});