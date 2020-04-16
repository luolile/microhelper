/*! 
 * Depends on: jquery.ui.js, jquery.js
!*/
;
(function($, undefined) {
	$.ajaxSetup({
		cache : false,
		type : "POST",
	});

	/**
	 * 用弹出的方式显示页面请求 用法$("#divCnt").OpenDialog("对话框标题", "abc.jsp","key=value");
	 * 用法$("#divCnt").OpenDialog({title:"对话框标题",width:500},"abc.jsp", "key=value"); 依赖：jquery.js, jquery.ui.js, jquery.validation.js
	 * opts:对话框标题或属性
	 * buttons,closeOnEscape,closeText,dialogClass,draggable,height
	 * maxHeight,maxWidth,minHeight,minWidth,modal,position,resizable,title,width
	 * url:请求的连接
	 * data:请求的数据 &quot;key1=value1&amp;key2=value2&quot; 或 {key1: 'value1', key2: 'value2'}
	 * 
	 * </pre>
	 */
	$.fn.OpenDialog = function(opts, url, data) {
		var srcElement = this;
		// 获取对话框属性参数
		var params = {};
		if (typeof (opts) == 'string') {
			params["title"] = opts;
		} else if (typeof (opts) == 'object') {
			params = opts;
		}
		// 追加对话框属性，清空按钮，追加关闭回调函数
		params["buttons"] = {};
		params["beforeClose"] = function() {
			// 清空校验提示
			var objForm = srcElement.find("form");
			if (objForm && objForm.clearMsg) {
				objForm.clearMsg();
			}
		};
		// 显示进度条
		ShowProgress();
		// ajax提交url
		$.ajax({
			url : url,
			data : data,
			dataType : "html",
			success : function(msg) {
				ShowProgress("close");
				srcElement.html(msg);
				srcElement.dialog(params);
			},
			error : function(msg) {
				ShowProgress("close");
				srcElement.html("<h3>未知原因导致操作失败！</h3><br/>" + msg.responseText);
				srcElement.dialog({
					title : "错误提示",
					beforeClose : null,
					buttons : {}
				});
			},
		});
	};

	/**
	 * 用于弹出消息对话框，需指定div callBack参数存在时，弹出确认对话框 用法$("#divCnt").MsgBox("消息内容",
	 * callBack); msgContent：消息内容 callBack：选择"确定"按钮时的回调函数
	 */
	$.fn.MsgBox = function(msgContent, callBack) {
		var srcElement = this;
		// 设置默认属性
		var params = {
			title : "系统提示",
			beforeClose : null,
			modal : true
		};
		if (callBack) {
			params["buttons"] = {
				"确定" : function() {
					callBack();
					srcElement.dialog("close");
				},
				"取消" : function() {
					srcElement.dialog("close");
				}
			};
		}
		srcElement.html("<p>" + msgContent + "</p>");
		srcElement.dialog(params);
	};

	/**
	 * 用于链接提交 回调函数callBack未设置时，将返回结果加载到指定的容器中， 否则，调用回调函数，参数为返回数据
	 * 用法$("#divCnt").LinkSubmit("url", {name:"value", }); url：请求url data:数据
	 * callBack 请求成功后的回调函数，可以不设值
	 */
	$.fn.LinkSubmit = function(url, data, callBack) {
		// json形式提交
		if (callBack) {
			data["struts.enableJSONValidation"] = "true";
		}
		// 显示进度条
		ShowProgress();
		// 提交
		var targetDiv = this;
		$.ajax({
			url : url,
			data : data,
			dataType : callBack ? "json" : "html",
			error : function(msg) {
				ShowProgress("close");
				targetDiv.AddErrMsg("<h3>未知原因导致操作失败！</h3><br/>" + msg.responseText);
			},
			success : function(msg) {
				ShowProgress("close");
				RequestCallBack(msg, targetDiv, callBack);
			}
		});
	};

	/**
	 * 用于提交表单的内容，并将返回结果加载到div中，（该div应包含当前表单）
	 * 当callBack不为空时，返回值设置为json格式，div中只显示错误信息
	 * 用法：$("#divCnt").SubmitForm($("#targetForm"), "abc.do", {name:"value" });
	 * 或$("#divErrArea").SubmitForm($("#targetForm"), "abc.do", {name:"value" },
	 * fnCallBack); objForm：提交的form url：请求url，如果为空则用objForm的默认action
	 * data:除却objForm的其他数据 callBack 请求成功后的回调函数，可以不设值
	 */
	$.fn.SubmitForm = function(objForm, url, data, callBack) {
		// 改变form的请求路径
		if (url && url != "") {
			objForm.attr("action", url);
		}
		// json方式提交时，追加参数，请求json校验
		if (callBack) {
			if (!data) {
				data = {};
			}
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
		ShowProgress();
		// 提交请求
		var targetDiv = this;
		objForm.ajaxSubmit({
			type : "POST"
			// ,target : targetDiv
			,dataType : callBack ? "json" : "html"
			,error : function(msg) {
				ShowProgress("close");
				objForm.AddErrMsg("<h3>未知原因导致操作失败！</h3><br/>" + msg.responseText);
			}
			,success : function(msg) {
				ShowProgress("close");
				RequestCallBack(msg, targetDiv, callBack);
			}
		});
	};

	/**
	 * 向指定元素的父元素中追加错误，并以对话框形式显示 使用css的class="errorMessage" msg：消息内容
	 */
	$.fn.AddErrMsg = function(msg) {
		var msgDiv = $(this).parent().find("#errMsg");
		if (msgDiv.size() == 0) {
			$(this).parent().prepend(
							"<div id=\"errMsg\" class=\"errorMessage\" style=\"display:none\"></div>");
			msgDiv = $(this).parent().find("#errMsg").first();
		} else {
			msgDiv = msgDiv.first();
		}
		msgDiv.html(msg);
		msgDiv.dialog({
			title : "错误提示",
			beforeClose : null,
			buttons : {},
			modal : true
		});
	};

	/**
	 * 将id="#progress"的容器显示活关闭
	 */
	ShowProgress = function(stat) {
		if (! $("#progress").dialog) return;
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
	RequestCallBack = function(msg, targetDiv, callBack) {
		if (callBack) {
			// 取得错误信息
			var msgTxt = "";
			// actionErrors（JSONValidation时，变成了errors）
			msgTxt = ExtractMsg(msg.errors, msgTxt, false);
			msgTxt = ExtractMsg(msg.actionErrors, msgTxt, false);
			// fieldErrors
			msgTxt = ExtractMsg(msg.fieldErrors, msgTxt, true);
			// 有错误信息时
			if (msgTxt != "") {
				targetDiv.html("<ul class=\"errorMessage\">" + msgTxt + "</ul>");
			} else if (msg.result != "1") {
				targetDiv.AddErrMsg("<h3>未知原因导致操作失败！<h3><br/><div>" + msg + "</div>");
			} else {
				callBack(msg);
			}
			return;
		}
		if (msg.indexOf("<html>") > 0) {
			$("html").html(msg);
		} else {
			targetDiv.html(msg);
		}
	};

	/**
	 * 抽取指定数组数据arrData中的消息，添加到msgTxt后面
	 */
	ExtractMsg = function(arrData, msgTxt, isArrSub) {
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