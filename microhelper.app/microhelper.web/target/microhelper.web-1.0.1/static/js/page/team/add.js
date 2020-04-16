app.controller('companyAddCnt', 
		['$scope', '$route', '$http', '$location', 'FileUploader', 
		 function ($scope, $route, $http,$location, FileUploader){
			// 取得初始化参数
			var uploader = $scope.uploader = new FileUploader({
				//headers : {"content-type": "text/plain;charset=utf-8"},
	            url: contextPath+'/company/uploadFile'
	        });
			// a sync filter
	        uploader.filters.push({
	            name: 'syncFilter',
	            fn: function(item /*{File|FileLikeObject}*/, options) {
	                console.log('syncFilter');
	                return this.queue.length < 10;
	            }
	        });
	      
	        // an async filter
	        uploader.filters.push({
	            name: 'asyncFilter',
	            fn: function(item /*{File|FileLikeObject}*/, options, deferred) {
	                console.log('asyncFilter');
	                setTimeout(deferred.resolve, 1e3);
	            }
	        });

	        // CALLBACKS
	        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
	        	$.fn.MsgBox("上传失败！");
	        };
	        uploader.onAfterAddingFile = function(fileItem) {
	        	if (uploader.queue.length == 1) {
	        		console.info('onAfterAddingFile', uploader.queue);
	        		uploader.queue[0].upload();
	        	}
	        };
	        uploader.onSuccessItem = function(fileItem, response, status, headers) {
	        	$scope.applicant.resumeName = fileItem.file.name;
	        	$scope.applicant.resume = response.resume;
	        };
	        uploader.onErrorItem = function(fileItem, response, status, headers) {
	        	$.fn.MsgBox("上传失败！");
	        };
        $http({
            method:'POST',
            url:contextPath + "/company/addInit",
            data:$route.current.params
        }).then(function successCallback(response) {
        	console.log(response)
        	$scope.data = response.data;
            // 性别
            $scope.genderData = $scope.data.genderList;
            // 状态
            $scope.statusListData = $scope.data.statusList;
            // 职业
            $scope.professionData = $scope.data.professionList;
            // 行业
            $scope.businessData = $scope.data.businessList;
            // 居住地
            $scope.addressData = $scope.data.addressList;
            if ($route.current.params.personId == null || $route.current.params.personId == "") {
            	// 新建页面
            } else {
            	// 修正页面,绑定值
            	$scope.applicant = $scope.data.personInfo;
            	// $scope.applicant.salaryCnVal = $scope.salaryCn();
            }
        },function (response) {
        	$.fn.MsgBox("系统错误！");
        })

	    // 保存
	    $scope.doSave = function () {
          // 验证
          
	      $http({
	          method:'POST',
	          url:contextPath + "/company/addSave",
	          data:$scope.applicant
	      }).then(function successCallback(response) {
	    	  $route.reload();
	    	  $.fn.MsgBox("保存成功！");
	      },function (response) {
	    	  $.fn.MsgBox("系统错误！");
	      });
	    };
	    
	    $scope.doBack = function () {
	    	$location.path("/applicantList");
	    }
	    
	    $scope.removeFileResume = function() {
	    	// 删除上传文件
	    	$scope.applicant.resumeName = null;
	    	$scope.applicant.resume = null;
	    	uploader.queue = [];
	    }
	    
//	    $scope.salaryCn = function(value){
//	    	//var value = $scope.applicant.salary;
//	    	// 1000000000(亿)
//	    	var unity = 100000000;
//	    	var yv = $scope.salaryCnUnit(value, unity);
//	    	
//	    	// 10000(万)
//	    	value = value%unity;
//	    	var unitw = 10000;
//	    	var wv = $scope.salaryCnUnit(value, unitw);
//	    	// 1000(千)
//	    	value = value%unitw;
//	    	var unitq = 1000;
//	    	var qv = $scope.salaryCnUnit(value, unitq);
//	    	// 100(百)
//	    	value = value%unitq;
//	    	var unitb = 100;
//	    	var bv = $scope.salaryCnUnit(value, unitb);
//	    	
//	    	// 10(十)
//	    	value = value%unitb;
//	    	var units = 10;
//	    	var sv = $scope.salaryCnUnit(value, units);
//	    	
//	    	// 1(个)
//	    	value = value%units;
//	    	var unitg = 1;
//	    	var gv = $scope.salaryCnUnit(value, unitg);
//	    	
//	    	var result = "";
//	    	if (yv > 0) {
//	    		result += parseInt(yv) + "亿"; 
//	    	}
//	    	if (wv > 0) {
//	    		result += wv + "万"; 
//	    	}
//	    	if (qv > 0) {
//	    		result += qv + "千"; 
//	    	}
//	    	if (bv > 0) {
//	    		result += bv + "百"; 
//	    	}
//	    	if (sv > 0) {
//	    		result += sv + "十"; 
//	    	}
//	    	if (gv > 0) {
//	    		result += gv; 
//	    	}
//	    	return result;
//	    }
//	    
//	    $scope.salaryCnUnit = function(value, unit){
//	    	if (value == null || value == undefined) {
//	    		return 0;
//	    	}
//	    	if (value >= unit) {
//	    		return value/unit;
//	    	}
//	    	return 0;
//	    }
}]);