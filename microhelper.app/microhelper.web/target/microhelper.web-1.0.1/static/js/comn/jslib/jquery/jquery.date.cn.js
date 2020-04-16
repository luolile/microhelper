/**
 * jquery.ui里的日期控件中文化
 * jquery.ui.v1.10.2
 * 修改:clearButton 2014-09-30
 */
;
(function($){
$.datepicker.regional['cn'] = {
		clearText : '清空',
		closeText : '关闭',
		prevText : '<上月',
		nextText : '下月>',
		currentText : '今天',
		monthNames : [ '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月',
				'10月', '11月', '12月' ],
		monthNamesShort : [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
				'十一', '十二' ],
		dayNames : [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
		dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
		dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
		weekHeader : '周',
		dateFormat : 'yy-mm-dd',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : true,
		initStatus : '请选择日期',
		yearSuffix : '年'
	};
	$.datepicker.setDefaults($.datepicker.regional['cn']);
})(jQuery);