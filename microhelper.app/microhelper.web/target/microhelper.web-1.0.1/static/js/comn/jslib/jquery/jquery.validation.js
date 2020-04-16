/*******************************************************************************
 * jQuery Library Plugin jquery.validation.js v 3.1.0
 * 
 *  Depends on jquery.
 *  COPYRIGHT
 *  2012 jQuery Foundation and other contributors Released under the
 *  GPL,LGPL,MIT license
 *  
 * AUTHOR : Jonny
 * Date:2014-12-03 17:54:00 GMT+0800 (CHINA STANDARD TIME)
 * 
 * @method: $(#id).bindVerify() 向form绑定校验
 * @method: $(#id).verify() 向form绑定校验被bindVerify取代了
 * @method: $(#id).validates() 验证方法,用于表单提交前校验.此方法返回boolean
 * @method: $(#id).validation() 验证方法,被validates取代了
 * 
 * input textarea select中追加以下属性即可校验
 * 必须		: [required(html5)|data-required|data-required="true"|data-required="false"]
 * Email		: [type="email"(html5)|data-type="email"]
 * 数值		: [data-type="number"]
 * 整数		: [type="number"(html5)|data-type="integer"]
 * 数字		: [data-type="digits"]
 * 英数字	: [data-type="alphanum"]
 * Url			: [type="url"(html5)|data-type="url"]
 * 最小长度: [data-minlength="6"]
 * 最大长度: [data-maxlength="6"]
 * 最小值	: [min="6"(html5)|data-min="6"]
 * 最大值	: [max="6"(html5)|data-max="6"]
 * 范围值	: [type="range"(html5)|data-range="[6,10]"]
 * 正则式	: [pattern="\d+"(html5)|data-pattern="\d+"]
 * 复选框最少选中: [data-mincheck="3"]
 * 复选框最大选中: [data-maxcheck="3"]
 * 复选框选中范围: [data-check="[1, 3]"]
 * 项目相等: [data-equalto="#anotherfield"]
 * 
 * 扩展
 * 大于		: [data-gt="#anotherfield"]
 * 大于等于: [data-gte="#anotherfield"]
 * 小于		: [data-lt="#anotherfield"]
 * 小于等于: [data-lte="#anotherfield"]
 * 最小词数: [data-minwords="200"]
 * 最大词数: [data-maxwords="200"]
 * 词数范围: [data-words="[200, 600]"]
 ******************************************************************************/
;
var formInstance;
(function($, undefined) {
	/**
	 * 为form绑定校验
	 */
    $.fn.verify = $.fn.bindVerify = function(opts) {
    	if (typeof $.fn.parsley === 'undefined' ) return;
    	var myOpts = {"namespace" : "data-"};
    	$.extend(myOpts, opts);
    	formInstance = $(this).parsley(myOpts);
    };
    /**
     * 校验表单
     */
    $.fn.validation = $.fn.validates = function() {
        if (typeof formInstance === 'undefined') return false;
        return formInstance.validate(null, true);
    };
    /** 清除校验提示信息 */
    $.fn.clearMsg = function() {
    	if (typeof formInstance === 'undefined') return;
    	formInstance.reset();
    };
})(jQuery);