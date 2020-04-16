/** 验证中文化 */
(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "不能为空",
                    "alertTextCheckboxMultiple": "请输入一个选项",
                    "alertTextCheckboxe": "此复选框是必选的",
                    "alertTextDateRange": "日期必须输入"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "无效 ",
                    "alertText2": "日期范围"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "无效 ",
                    "alertText2": "日期时间范围"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "最小 ",
                    "alertText2": "允许的字符"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "最小 ",
                    "alertText2": "允许的字符"
                },
				"groupRequired": {
                    "regex": "none",
                    "alertText": "必须填写一项"
                },
                "min": {
                    "regex": "none",
                    "alertText": "最小值 "
                },
                "max": {
                    "regex": "none",
                    "alertText": "最小值 "
                },
                "past": {
                    "regex": "none",
                    "alertText": "之前的日期 "
                },
                "future": {
                    "regex": "none",
                    "alertText": "时间过去 "
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "最小 ",
                    "alertText2": "允许的选项"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "请选择 ",
                    "alertText2": " 选项"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "该字段不匹配"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "请输入正确卡号"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
                    "alertText": "请输入正确的电话号码"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    "alertText": "请输入正确的邮箱地址"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "请输入整数"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "无效浮点十进制数"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			 "alertText": "Invalid date, must be in YYYY-MM-DD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "请输入正确的IP地址"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "请输入正确的URL地址"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "数字"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "字母"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "不允许特殊字符"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "此用户已经注册",
                    "alertTextLoad": "验证中，请稍后"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "此用户可以使用",
                    "alertText": "此用户已经注册",
                    "alertTextLoad": "验证中，请稍后"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "此用户已经注册",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "此用户可以使用",
                    // speaks by itself
                    "alertTextLoad": "验证中，请稍后"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "此用户已经注册",
	                    // speaks by itself
	                    "alertTextLoad": "验证中，请稍后"
	                },
                "validate2fields": {
                    "alertText": "Please input Wendy"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "请输入有效日期"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "无效日期或日期格式",
                    "alertText2": "预期的格式: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            },
	            //tls warning:homegrown not fielded
	            "idCardNum" : {
	            	 "regex": /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
	                 "alertText": "请输入有效身份证号"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
    $.extend($.fn.selectpicker.defaults, {noneSelectedText:'未选择'});
    
})(jQuery);

$(".shut").click(function(){
$("#modalDefault").hide(200);
});
// 公用初期化方法
function pageOnloadDefault() {
	console.log("common-pageOnloadDefault");
	// 初始化checkbox
	pageInitUIChk();
	//初始化Components
	pageInitUICompnts();
	//初始化校验效果
	validateInitUI();
	
}
// 初始化checkbox
function pageInitUIChk(){
	if($('input:checkbox, input:radio')[0]) {
          //Checkbox + Radio skin
	       	$('input:checkbox:not([data-toggle="buttons"] input, .make-switch input), input:radio:not([data-toggle="buttons"] input)').iCheck({
	       		    checkboxClass: 'icheckbox_minimal',
	       		    radioClass: 'iradio_minimal',
	       		    increaseArea: '80%' // optional
	       	});
	           
	       	//Checkbox listing
	       	var parentCheck = $('.list-parent-check');
	       	var listCheck = $('.list-check');
	           
	       	parentCheck.on('ifChecked', function(){
	       		$(this).closest('.list-container').find('.list-check').iCheck('check');
	       	});
	           
	       	parentCheck.on('ifClicked', function(){
	       		$(this).closest('.list-container').find('.list-check').iCheck('uncheck');
	       	});
	           
	       	listCheck.on('ifChecked', function(){
	       		    var parent = $(this).closest('.list-container').find('.list-parent-check');
	       		    var thisCheck = $(this).closest('.list-container').find('.list-check');
	       		    var thisChecked = $(this).closest('.list-container').find('.list-check:checked');
	       	    
	       		    if(thisCheck.length == thisChecked.length) {
	       		    	parent.iCheck('check');
	       		    }
	       	});
	           
	       	listCheck.on('ifUnchecked', function(){
	       		    var parent = $(this).closest('.list-container').find('.list-parent-check');
	       		    parent.iCheck('uncheck');
	       	});
	           
	       	listCheck.on('ifChanged', function(){
	       		    var thisChecked = $(this).closest('.list-container').find('.list-check:checked');
	       		    var showon = $(this).closest('.list-container').find('.show-on');
	       		    if(thisChecked.length > 0 ) {
	       			showon.show();
	       		    }
	       		    else {
	       			showon.hide();
	       		    }
	       	});
    }
	
}

//初始化Components
function pageInitUICompnts(){
    /* Textarea */
	if($('.auto-size')[0]) {
	    $('.auto-size').autosize();
	}

        //Select
	if($('.select')[0]) {
	    $('.select').selectpicker();
	}
        
        //Sortable
        if($('.sortable')[0]) {
	    $('.sortable').sortable();
	}
	
        //Tag Select
	if($('.tag-select')[0]) {
	    $('.tag-select').chosen();
	}
        
        /* Tab */
	if($('.tab')[0]) {
	    $('.tab a').click(function(e) {
		e.preventDefault();
		$(this).tab('show');
	    });
	}
        
        /* Collapse */
	if($('.collapse')[0]) {
	    $('.collapse').collapse();
	}
    /* Accordion */
    $('.panel-collapse').on('shown.bs.collapse', function () {
        $(this).prev().find('.panel-title a').removeClass('active');
    });

    $('.panel-collapse').on('hidden.bs.collapse', function () {
        $(this).prev().find('.panel-title a').addClass('active');
    });

    //Popover
	if($('.pover')[0]) {
	    $('.pover').popover();
	} 
}

//初始化select
function pageInitUISelect(selectId){
    //Select
    $('#' + selectId).selectpicker();
}

// 初期化验证
function validateInitUI() {
	if ($("[class*='form-validation']")[0]) {
		$("[class*='form-validation']").validationEngine();

		//Clear Prompt
		$('body').on('click', '.validation-clear', function(e) {
			e.preventDefault();
			$(this).closest('form').validationEngine('hide');
		});
	}
};

function pageCloseModalDefault(){
	$('#modalDefault').modal('hide');
	// $("#modalDefault").remove();
}

// 模态窗口
function pageModalDefault(context) {
//	if (!$("#modalDefault").length == 0) {
//		$("#modalDefault").remove();
//	}
	var modalHtl = 
		'<div class="modal fade" id="modalDefault" tabindex="-1" role="dialog" aria-hidden="true">'+
		'<div class="modal-dialog">'+
		'    <div class="modal-content">'+
		'        <div class="modal-header">'+
		'            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
		'            <h4 class="modal-title">提示</h4>'+
		'        </div>'+
		'        <div class="modal-body">'+
		'            <p>'+context+'</p>'+
		'        </div>'+
		'        <div class="modal-footer">'+
		'            <button type="button" class="btn btn-sm" data-dismiss="modal">Close</button>'+
		'        </div>'+
		'    </div>'+
		'</div>'+
		'</div>';
	// $('#main').append(modalHtl);
	$('#modalDefault').show(200);
}

