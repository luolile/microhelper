/*! 
 * Depends on: bootstrap.js, bootbox.js, jquery.js
!*/
;
(function($, undefined) {
	$.ajaxSetup({
		cache : false,
		type : "POST",
	});

	// 设置bootbox本地化为中文
	bootbox.setDefaults({locale: "zh_CN"});

	/**
	 * 用弹出的方式显示页面请求 用法$.OpenDialog("对话框标题", "abc.jsp","key=value");
	 * opts:对话框标题或属性
	 * url:请求的连接/页面返回html中必须包含两个callBack函数，confirmCallback, cancelCallback
	 * data:请求的数据 &quot;key1=value1&amp;key2=value2&quot; 或 {key1: 'value1', key2: 'value2'}
	 * callBacks:对话框按钮以及回调函数[{"label":"关闭"},{"label":"取消", "callback": func}]
	 * cssClass:弹出页面的样式调整，需传入css类名
	 * </pre>
	 */
	$.fn.OpenDialog = function(opts, url, data, callBacks, cssClass) {
		// 显示进度条
		$.fn.ShowProgress();
		// ajax提交url
		$.ajax({
			url : url,
			data : data,
			dataType : "html",
			error : function(msg) {
				bootbox.alert("<h3>未知原因导致操作失败！</h3><br/>" + msg.responseText);
			},
			success : function(msg) {
				callBacks = callBacks || [];
				bootbox.dialog({message : msg, buttons : callBacks, title : opts, className : cssClass});
			},
			complete : function () {
				$.fn.ShowProgress("close");
			}
		});
	};

	/**
	 * 用于弹出消息对话框， callBack参数存在时，弹出确认对话框，否则仅仅弹出Alert框
	 * 用法$.MsgBox("消息内容", callBack);
	 * msgContent：消息内容
	 * callBack：选择"确定"按钮时的回调函数
	 */
	$.fn.MsgBox = function(msgContent, callBack) {
		if (callBack) {
			bootbox.confirm(msgContent, function(sel) {
				if (sel) callBack();
			});
		} else {
			bootbox.alert(msgContent);
		}
	};

	/**
	 * 用于链接提交，isJsonResult为false时，将返回结果加载到指定的容器中， <br/>
	 * 否则，仅仅返回一个boolean类型的结果标识是否调用成功<br/>
	 * 用法$("#divCnt").LinkSubmit("url", {name:"value", }); <br/>
	 * url：请求url <br/>
	 * data:数据 <br/>
	 * if
	 */
	$.fn.LinkSubmit = function(url, data, isJsonResult) {
		// 显示进度条
		$.fn.ShowProgress();
		// json形式提交
		if (isJsonResult) {
			data = data || {};
			data["struts.enableJSONValidation"] = "true";
		}
		var jqxhr  = $.ajax({url : url, data : data, async: isJsonResult ? false : true, dataType : isJsonResult ? "json" : "html",});
		var ret = true;
		var targetDiv = this;
		// 成功
		jqxhr.done(function(msg) {
			$.fn.ShowProgress("close");
			ret = $.fn.RequestCallBack(msg, targetDiv, isJsonResult);
		  }).fail(function(msg) {// 失败
			 $.fn.ShowProgress("close");
		    bootbox.alert("<h3>未知原因导致操作失败！</h3><br/>" + msg.responseText);
		    ret = false;
		  });
		return ret;
	};

	/**
	 * 用于提交表单的内容，并将返回结果加载到div中，（该div应包含当前表单）<br/>
	 * 当isJsonResult不为空时，返回值标识调用是否成功，div中只显示错误信息<br/>
	 * 用法：$("#divCnt").SubmitForm($("#targetForm"), "abc.do", {name:"value" });<br/>
	 * 或$("#divErrArea").SubmitForm($("#targetForm"), "abc.do", {name:"value" }, isJsonResult);<br/> 
	 * objForm：提交的form<br/>
	 * url：请求url，如果为空则用objForm的默认action<br/>
	 * data:除却objForm的其他数据 isJsonResult 请求成功后的回调函数，可以不设值<br/>
	 */
	$.fn.SubmitForm = function(objForm, url, data, isJsonResult) {
		// 改变form的请求路径
		if (url && url != "") {
			objForm.attr("action", url);
		}
		// json方式提交时，追加参数，请求json校验
		if (isJsonResult) {
			data = data || {};
			data["struts.enableJSONValidation"] = "true";
		}
		// 如果有参数，修改或追加到form中
		if (data) {
			var elm;
			for ( var obj in data) {
				if (typeof (data[obj]) == "function") continue;
				// 查询form中是否已经存在该参数
				elm = objForm.find("input[name='" + obj + "']");
				if (elm.size() > 0) {
					elm = elm.first();
					elm.val(data[obj]);
				} else {
					// 追加新参数到form中
					objForm.append("<input name=\"" + obj + "\" value=\"" + data[obj] + "\" type=\"hidden\"/>");
				}
			}
		}

		// 显示进度条
		$.fn.ShowProgress();
		var ret = true;
		var targetDiv = this;
		// 提交请求
		objForm.ajaxSubmit({
			type : "POST"
			,async: isJsonResult ? false : true
			,dataType : isJsonResult ? "json" : "html"
			,error : function(msg) {
				$.fn.ShowProgress("close");
				bootbox.alert("<h3>未知原因导致操作失败！</h3><br/>" + msg.responseText);
				ret = false;
			}
			,success : function(msg) {
				$.fn.ShowProgress("close");
				ret = $.fn.RequestCallBack(msg, targetDiv, isJsonResult);
			}
		});
		return ret;
	};

	/**
	 * 将id="#progress"的容器显示活关闭
	 */
	$.fn.ShowProgress = function(stat) {
		// if (! $("#progress").dialog) return;
		if (stat && stat == "close") {
			$("#progress").dialog("close");
		} else {
			// 显示进度条
			$("#progress").dialog({
				width : 390,
				dialogClass : "no_title"
			});
		}
	};

	/**
	 * 请求成功后，根据请求类型，设置后处理
	 */
	$.fn.RequestCallBack = function(msg, targetDiv, isJsonResult) {
		if (isJsonResult) {
			// 取得错误信息
			var msgTxt = "";
			// actionErrors（JSONValidation时，变成了errors）
			msgTxt = $.fn.ExtractMsg(msg.errors, msgTxt, false);
			msgTxt = $.fn.ExtractMsg(msg.actionErrors, msgTxt, false);
			// fieldErrors
			msgTxt = $.fn.ExtractMsg(msg.fieldErrors, msgTxt, true);
			// 有错误信息时
			if (msgTxt != "") {
				bootbox.alert("<ul class=\"errorMessage\">" + msgTxt + "</ul>");
			} else if (msg.result != "1") {
				bootbox.alert("<h3>未知原因导致操作失败！<h3><br/><div>" + msg + "</div>");
			} else {
				//callBack(msg);
				return true;
			}
			return false;
		}
		if (msg.indexOf("<html>") > 0) {
			$("html").html(msg);
		} else {
			targetDiv.html(msg);
		}
		return true;
	};

	/**
	 * 抽取指定数组数据arrData中的消息，添加到msgTxt后面
	 */
	$.fn.ExtractMsg = function(arrData, msgTxt, isArrSub) {
		if (typeof isArrSub == 'undefined' || ! isArrSub) {
			if (arrData && arrData.length > 0) {
				for ( var obj in arrData) {
					msgTxt += "<li><span>" + arrData[obj] + "</span></li>";
				}
			}
		} else {
			if (arrData) {
				for ( var obj in arrData) {
					msgTxt += "<li><span>" + arrData[obj].join(",") + "</span></li>";
				}
			}
		}
		return msgTxt;
	};
})(jQuery);