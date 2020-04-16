;
(function($, undefined) {
	var BASE = {
		apd : "<input name=\"_name\" value=\"_value\" type=\"hidden\"/>",
		inp : [ "button", "file", "image", "reset", "submit" ],
		pageapd : '<span class="_page_index_number" index="_index">_index</span>',
		tyf : [ "string", "number", "boolean" ],
		closefunction : [ undefined, undefined, undefined, undefined ],
		timerflag : true,
		opnopt : {
			autoOpen : false,
			closeOnEsc : true,
			modal : true,
			width : Math.floor($('body').width() * .70),
			height : Math.floor($('body').height() * .65)
		},
		opnbox : [],
		opnstring : '<div id="openbox_index_x_my_THISID"></div>',
		tablefix : "<tr><td colspan=\"20\" style=\"height:100%;\">&nbsp;</td></tr>",
		nopage : "没有检索到数据",
		options : '<option value="options-value">options-label</option>'
	};
	var _change_reset_timer_f = function() {
		BASE.timerflag = false;
	};
	$.fn.Page = function(Opts) {
		var _$ = $(this);
		var page_inx = parseInt(XUFXS.PAGE.index);
		var page_tot = parseInt(XUFXS.PAGE.total);
		var page_item = parseInt(XUFXS.PAGE.items);
		var _defformid = XUFXS.PAGE.form;
		var _apd = BASE.apd;
		var _Options = {
			type : "POST",
			target : _$,
		};
		if (typeof Opts === "string") {
			if (Opts.indexOf("#") == 0)
				$.extend(_Options, {
					form : Opts
				});
			else
				$.extend(_Options, {
					form : _defformid,
					url : Opts
				});
		} else if (typeof Opts === "object") {
			if (typeof Opts["url"] === "undefined")
				$.extend(_Options, Opts);
			else
				$.extend(_Options, Opts, {
					form : _defformid
				});
			if (typeof Opts["searchflag"] === "undefined")
				$.extend(_Options, {
					searchflag : page_sfg
				});
		}
		var _map = _Options["map"];
		var add_2_form = function(_form, _name, _val) {
			var elm = $(_form).find("input[name='" + _name + "']");
			if (elm.size() > 0) {
				elm = elm.first();
				elm.val(_val);
			} else {
				// 追加新参数到form中
				$(_form).append(_apd.replace("_name", _name).replace("_value", _val));
			}
		};
		var f_form = function(_ind) {
			var _formid = _Options["form"];
			add_2_form(_formid, "popupBean.pageIndex", _ind);
			if (typeof _map != "undefined") {
				for ( var is = 0; is < _map.length; is++)
					add_2_form(_formid, _map[is][0], _map[is][1]);
			}
			if (BASE.timerflag) {
				_change_reset_timer_f();
				$(_formid).ajaxSubmit(_Options);
			}
		};
		var _$K = $('#page_menulist_all_show_popup');
		if (page_item <= 0) {
			_$K.children().remove();
			_$K.html(BASE.nopage);
			return _$;
		}
		var _$M = $('#page_menulist_show_popup');
		if (page_tot <= 1) {
			_$M.remove();
			return _$;
		}
		_$M.on('click', "li._page_index_number", function() {
			var _iix = parseInt($.trim($(this).text()));
			if (_iix != page_inx)
				f_form(_iix);
		}).on('click', 'li._page_index_first', function() {
			if (page_inx != 1) {
				f_form(1);
			}
		}).on('click', 'li._page_index_last', function() {
			if (page_tot != page_inx) {
				f_form(page_tot);
			}
		}).on('click', 'li._page_index_next', function() {
			if (page_inx + 1 <= page_tot) {
				f_form(page_inx + 1);
			}
		}).on('click', 'li._page_index_prev', function() {
			if (page_inx - 1 >= 1) {
				f_form(page_inx - 1);
			}
		}).on('click', 'li._page_index_free', function() {
			var freePage = $("#_pop_page_index_free_page_num").val();
			if (freePage <= 0 || page_inx == freePage) {
				return;
			} else if (freePage > page_tot) {
				f_form(page_tot);
			} else {
				f_form(freePage);
			}
		});
		return _$;
	};
})(jQuery);