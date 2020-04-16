/******************************************************************************
 * Poshy Tip jQuery plugin v1.2
 * http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips/
 * Copyright 2010-2013, Vasil Dinkov, http://vadikom.com/
 * Modified :remove resize event handler;2014-12-3
 ******************************************************************************/
;(function(e){var a=[],d=/^url\(["']?([^"'\)]*)["']?\);?$/i,c=/\.png$/i,b=!!window.createPopup&&document.documentElement.currentStyle.minWidth=="undefined";function f(){e.each(a,function(){this.refresh(true)})};e.Poshytip=function(h,g){this.$elm=e(h);this.opts=e.extend({},e.fn.poshytip.defaults,g);this.$tip=e(['<div class="',this.opts.className,'">','<div class="tip-inner tip-bg-image"></div>','<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>',"</div>"].join("")).appendTo(document.body);this.$arrow=this.$tip.find("div.tip-arrow");this.$inner=this.$tip.find("div.tip-inner");this.disabled=false;this.content=null;this.init()};e.Poshytip.prototype={init:function(){a.push(this);var g=this.$elm.attr("title");this.$elm.data("title.poshytip",g!==undefined?g:null).data("poshytip",this);if(this.opts.showOn!="none"){this.$elm.bind({"mouseenter.poshytip":e.proxy(this.mouseenter,this),"mouseleave.poshytip":e.proxy(this.mouseleave,this)});switch(this.opts.showOn){case"hover":if(this.opts.alignTo=="cursor"){this.$elm.bind("mousemove.poshytip",e.proxy(this.mousemove,this))}if(this.opts.allowTipHover){this.$tip.hover(e.proxy(this.clearTimeouts,this),e.proxy(this.mouseleave,this))}break;case"focus":this.$elm.bind({"focus.poshytip":e.proxy(this.showDelayed,this),"blur.poshytip":e.proxy(this.hideDelayed,this)});break}}},mouseenter:function(g){if(this.disabled){return true}this.$elm.attr("title","");if(this.opts.showOn=="focus"){return true}this.showDelayed()},mouseleave:function(g){if(this.disabled||this.asyncAnimating&&(this.$tip[0]===g.relatedTarget||jQuery.contains(this.$tip[0],g.relatedTarget))){return true}if(!this.$tip.data("active")){var h=this.$elm.data("title.poshytip");if(h!==null){this.$elm.attr("title",h)}}if(this.opts.showOn=="focus"){return true}this.hideDelayed()},mousemove:function(g){if(this.disabled){return true}this.eventX=g.pageX;this.eventY=g.pageY;if(this.opts.followCursor&&this.$tip.data("active")){this.calcPos();this.$tip.css({left:this.pos.l,top:this.pos.t});if(this.pos.arrow){this.$arrow[0].className="tip-arrow tip-arrow-"+this.pos.arrow}}},show:function(){if(this.disabled||this.$tip.data("active")){return}this.reset();this.update();if(!this.content){return}this.display();if(this.opts.timeOnScreen){this.hideDelayed(this.opts.timeOnScreen)}},showDelayed:function(g){this.clearTimeouts();this.showTimeout=setTimeout(e.proxy(this.show,this),typeof g=="number"?g:this.opts.showTimeout)},hide:function(){if(this.disabled||!this.$tip.data("active")){return}this.display(true)},hideDelayed:function(g){this.clearTimeouts();this.hideTimeout=setTimeout(e.proxy(this.hide,this),typeof g=="number"?g:this.opts.hideTimeout)},reset:function(){this.$tip.queue([]).detach().css("visibility","hidden").data("active",false);this.$inner.find("*").poshytip("hide");if(this.opts.fade){this.$tip.css("opacity",this.opacity)}this.$arrow[0].className="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left";this.asyncAnimating=false},update:function(j,k){if(this.disabled){return}var i=j!==undefined;if(i){if(!k){this.opts.content=j}if(!this.$tip.data("active")){return}}else{j=this.opts.content}var h=this,g=typeof j=="function"?j.call(this.$elm[0],function(l){h.update(l)}):j=="[title]"?this.$elm.data("title.poshytip"):j;if(this.content!==g){this.$inner.empty().append(g);this.content=g}this.refresh(i)},refresh:function(h){if(this.disabled){return}if(h){if(!this.$tip.data("active")){return}var k={left:this.$tip.css("left"),top:this.$tip.css("top")}}this.$tip.css({left:0,top:0}).appendTo(document.body);if(this.opacity===undefined){this.opacity=this.$tip.css("opacity")}var l=this.$tip.css("background-image").match(d),m=this.$arrow.css("background-image").match(d);if(l){var i=c.test(l[1]);if(b&&i){this.$tip.css("background-image","none");this.$inner.css({margin:0,border:0,padding:0});l=i=false}else{this.$tip.prepend('<table class="tip-table" border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({border:0,padding:0,"background-image":"none","background-color":"transparent"}).find(".tip-bg-image").css("background-image",'url("'+l[1]+'")').end().find("td").eq(3).append(this.$inner)}if(i&&!e.support.opacity){this.opts.fade=false}}if(m&&!e.support.opacity){if(b&&c.test(m[1])){m=false;this.$arrow.css("background-image","none")}this.opts.fade=false}var o=this.$tip.find("> table.tip-table");if(b){this.$tip[0].style.width="";o.width("auto").find("td").eq(3).width("auto");var n=this.$tip.width(),j=parseInt(this.$tip.css("min-width")),g=parseInt(this.$tip.css("max-width"));if(!isNaN(j)&&n<j){n=j}else{if(!isNaN(g)&&n>g){n=g}}this.$tip.add(o).width(n).eq(0).find("td").eq(3).width("100%")}else{if(o[0]){o.width("auto").find("td").eq(3).width("auto").end().end().width(document.defaultView&&document.defaultView.getComputedStyle&&parseFloat(document.defaultView.getComputedStyle(this.$tip[0],null).width)||this.$tip.width()).find("td").eq(3).width("100%")}}this.tipOuterW=this.$tip.outerWidth();this.tipOuterH=this.$tip.outerHeight();this.calcPos();if(m&&this.pos.arrow){this.$arrow[0].className="tip-arrow tip-arrow-"+this.pos.arrow;this.$arrow.css("visibility","inherit")}if(h&&this.opts.refreshAniDuration){this.asyncAnimating=true;var p=this;this.$tip.css(k).animate({left:this.pos.l,top:this.pos.t},this.opts.refreshAniDuration,function(){p.asyncAnimating=false})}else{this.$tip.css({left:this.pos.l,top:this.pos.t})}},display:function(h){var i=this.$tip.data("active");if(i&&!h||!i&&h){return}this.$tip.stop();if((this.opts.slide&&this.pos.arrow||this.opts.fade)&&(h&&this.opts.hideAniDuration||!h&&this.opts.showAniDuration)){var n={},m={};if(this.opts.slide&&this.pos.arrow){var l,g;if(this.pos.arrow=="bottom"||this.pos.arrow=="top"){l="top";g="bottom"}else{l="left";g="right"}var k=parseInt(this.$tip.css(l));n[l]=k+(h?0:(this.pos.arrow==g?-this.opts.slideOffset:this.opts.slideOffset));m[l]=k+(h?(this.pos.arrow==g?this.opts.slideOffset:-this.opts.slideOffset):0)+"px"}if(this.opts.fade){n.opacity=h?this.$tip.css("opacity"):0;m.opacity=h?0:this.opacity}this.$tip.css(n).animate(m,this.opts[h?"hideAniDuration":"showAniDuration"])}h?this.$tip.queue(e.proxy(this.reset,this)):this.$tip.css("visibility","inherit");if(i){var j=this.$elm.data("title.poshytip");if(j!==null){this.$elm.attr("title",j)}}this.$tip.data("active",!i)},disable:function(){this.reset();this.disabled=true},enable:function(){this.disabled=false},destroy:function(){this.reset();this.$tip.remove();delete this.$tip;this.content=null;this.$elm.unbind(".poshytip").removeData("title.poshytip").removeData("poshytip");a.splice(e.inArray(this,a),1)},clearTimeouts:function(){if(this.showTimeout){clearTimeout(this.showTimeout);this.showTimeout=0}if(this.hideTimeout){clearTimeout(this.hideTimeout);this.hideTimeout=0}},calcPos:function(){var n={l:0,t:0,arrow:""},h=e(window),k={l:h.scrollLeft(),t:h.scrollTop(),w:h.width(),h:h.height()},p,j,m,i,q,g;if(this.opts.alignTo=="cursor"){p=j=m=this.eventX;i=q=g=this.eventY}else{var o=this.$elm.offset(),l={l:o.left,t:o.top,w:this.$elm.outerWidth(),h:this.$elm.outerHeight()};p=l.l+(this.opts.alignX!="inner-right"?0:l.w);j=p+Math.floor(l.w/2);m=p+(this.opts.alignX!="inner-left"?l.w:0);i=l.t+(this.opts.alignY!="inner-bottom"?0:l.h);q=i+Math.floor(l.h/2);g=i+(this.opts.alignY!="inner-top"?l.h:0)}switch(this.opts.alignX){case"right":case"inner-left":n.l=m+this.opts.offsetX;if(this.opts.keepInViewport&&n.l+this.tipOuterW>k.l+k.w){n.l=k.l+k.w-this.tipOuterW}if(this.opts.alignX=="right"||this.opts.alignY=="center"){n.arrow="left"}break;case"center":n.l=j-Math.floor(this.tipOuterW/2);if(this.opts.keepInViewport){if(n.l+this.tipOuterW>k.l+k.w){n.l=k.l+k.w-this.tipOuterW}else{if(n.l<k.l){n.l=k.l}}}break;default:n.l=p-this.tipOuterW-this.opts.offsetX;if(this.opts.keepInViewport&&n.l<k.l){n.l=k.l}if(this.opts.alignX=="left"||this.opts.alignY=="center"){n.arrow="right"}}switch(this.opts.alignY){case"bottom":case"inner-top":n.t=g+this.opts.offsetY;if(!n.arrow||this.opts.alignTo=="cursor"){n.arrow="top"}if(this.opts.keepInViewport&&n.t+this.tipOuterH>k.t+k.h){n.t=i-this.tipOuterH-this.opts.offsetY;if(n.arrow=="top"){n.arrow="bottom"}}break;case"center":n.t=q-Math.floor(this.tipOuterH/2);if(this.opts.keepInViewport){if(n.t+this.tipOuterH>k.t+k.h){n.t=k.t+k.h-this.tipOuterH}else{if(n.t<k.t){n.t=k.t}}}break;default:n.t=i-this.tipOuterH-this.opts.offsetY;if(!n.arrow||this.opts.alignTo=="cursor"){n.arrow="bottom"}if(this.opts.keepInViewport&&n.t<k.t){n.t=g+this.opts.offsetY;if(n.arrow=="bottom"){n.arrow="top"}}}this.pos=n}};e.fn.poshytip=function(h){if(typeof h=="string"){var g=arguments,l=h;Array.prototype.shift.call(g);if(l=="destroy"){this.die?this.die("mouseenter.poshytip").die("focus.poshytip"):e(document).undelegate(this.selector,"mouseenter.poshytip").undelegate(this.selector,"focus.poshytip")}return this.each(function(){var m=e(this).data("poshytip");if(m&&m[l]){m[l].apply(m,g)}})}var j=e.extend({},e.fn.poshytip.defaults,h);if(!e("#poshytip-css-"+j.className)[0]){e(['<style id="poshytip-css-',j.className,'" type="text/css">',"div.",j.className,"{visibility:hidden;position:absolute;top:0;left:0;}","div.",j.className," table.tip-table, div.",j.className," table.tip-table td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;vertical-align:middle;}","div.",j.className," td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:",j.bgImageFrameSize,"px;width:",j.bgImageFrameSize,"px;overflow:hidden;}","div.",j.className," td.tip-right{background-position:100% 0;}","div.",j.className," td.tip-bottom{background-position:100% 100%;}","div.",j.className," td.tip-left{background-position:0 100%;}","div.",j.className," div.tip-inner{background-position:-",j.bgImageFrameSize,"px -",j.bgImageFrameSize,"px;}","div.",j.className," div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}","</style>"].join("")).appendTo("head")}if(j.liveEvents&&j.showOn!="none"){var i,k=e.extend({},j,{liveEvents:false});switch(j.showOn){case"hover":i=function(){var m=e(this);if(!m.data("poshytip")){m.poshytip(k).poshytip("mouseenter")}};this.live?this.live("mouseenter.poshytip",i):e(document).delegate(this.selector,"mouseenter.poshytip",i);break;case"focus":i=function(){var m=e(this);if(!m.data("poshytip")){m.poshytip(k).poshytip("showDelayed")}};this.live?this.live("focus.poshytip",i):e(document).delegate(this.selector,"focus.poshytip",i);break}return this}return this.each(function(){new e.Poshytip(this,j)})};e.fn.poshytip.defaults={content:"[title]",className:"tip-yellow",bgImageFrameSize:10,showTimeout:500,hideTimeout:100,timeOnScreen:0,showOn:"hover",liveEvents:false,alignTo:"cursor",alignX:"right",alignY:"top",offsetX:-22,offsetY:18,keepInViewport:true,allowTipHover:true,followCursor:false,fade:true,slide:true,slideOffset:8,showAniDuration:300,hideAniDuration:300,refreshAniDuration:200}})(jQuery);

/*******************************************************************************
 * jQuery Library Plugin jquery.validation.js v 3.1.0
 * 
 *  COPYRIGHT
 *  2012 jQuery Foundation and other contributors Released under the
 *  GPL,LGPL,MIT license
 *  
 * AUTHOR : nanyuantingfeng
 * Date:2013-07-20 17:54:00 GMT+0800 (CHINA STANDARD TIME)
 * 
 * @method: $(#id).verify() 即时方法,已绑定于keyup事件之中.
 * @method: $(#id).validation() 验证方法,用于表单提交前校验.此方法返回boolean
 * @param : S -> String, I -> Integer , F -> Double, E -> Email , D -> Date,
 *          P -> Phone , M -> Mphone , H -> Http , N -> ZHCN
 * @param : ! -> ! 不可为空.
 * @param :  S:!:{3,},I:[104,7788]...
 *          {}中的数字表示输入的长度限制,
 *          []表示值限制,
 *          如果校验的是日期格式,邮箱,电话等(D/M/T/P),则,不应设置长度.
 ******************************************************************************/
;
(function($, undefined) {
    var _Date = /^((?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29))(\s(?:[01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/,
    _Email = /^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/i,
    _Mphone = /^(\+86)?1\d{10}$/,
    _Phone = /^(0\d{2,3}(-\d{3})?-)?\d{6,8}$/,
    _ContainZHCN = /^([\u4e00-\u9fa5]+[\.]?)?[\u4e00-\u9fa5]+$/,
    _Http = /^((http[s]?|ftp|mms):\/\/)?(\w+\.)+\w+[\w-_.\/\w]*$/,
    _Integer = /^[-]?\d*$/,
    _Double = /^[-]?\d*[\.]?\d*$/,
    _String = /^[\w\W]*$/,
    _IDCard = /^\d{15}(\d{2}[\dxX])?$/;
    var STACK = {};
    var R = {};
    R.TYPE = {
        Integer: _Integer,
        Date: _Date,
        Mphone: _Mphone,
        Phone: _Phone,
        ZHCN: _ContainZHCN,
        Http: _Http,
        ID: _IDCard,
        Email: _Email,
        Double: _Double,
        String: _String,
        I: _Integer,
        D: _Date,
        M: _Mphone,
        P: _Phone,
        N: _ContainZHCN,
        H: _Http,
        Q: _IDCard,
        E: _Email,
        F: _Double,
        S: _String
    };
    R.XY = {
        right: {
            className: "tip-green",
            showOn: "none",
            alignTo: "target",
            alignX: "right",
            alignY: "center",
            offsetX: 10,
            showTimeout: 100
        },
        left: {
            className: "tip-green",
            showOn: "none",
            alignTo: "target",
            alignX: "left",
            alignY: "center",
            offsetX: 10,
            showTimeout: 100
        },
        top: {
            className: "tip-green",
            showOn: "none",
            alignTo: "target",
            alignX: "inner-left",
            offsetX: 0,
            offsetY: 5,
            showTimeout: 100
        },
        bottom: {
            className: "tip-green",
            showOn: "none",
            alignTo: "target",
            alignX: "center",
            alignY: "bottom",
            offsetX: 0,
            offsetY: 5,
            showTimeout: 100
        }
    };
    R.M_HEADER = {
        Integer: "数字",
        Date: "日期",
        Mphone: "手机号码",
        Phone: "电话号码",
        ZHCN: "包含中文",
        Http: "网址",
        ID: "身份证号",
        Email: "邮箱",
        Double: "浮点数",
        String: "字符串",
        I: "整数",
        D: "日期",
        M: "手机号码",
        P: "电话号码",
        N: "包含中文",
        H: "网址",
        Q: "身份证号",
        E: "邮箱",
        F: "浮点数",
        S: "字符串"
    };
    R.M_VL = {
        L: ["最多输入 ", "最少输入 ", "输入长度应在  ", "之间", "个字符"],
        V: ["输入值已大于 ", "输入值小于 ", "输入值不在 ", "中", ""]
    };
    R.NET_R = {
        "<": 0,
        lt: 0,
        ">": 1,
        gt: 1,
        "=": 2,
        "==": 2,
        "<=": 3,
        "lt=": 3,
        ">=": 4,
        "gt=": 4,
        "!=": 5
    };
    var parse_oublue = function(arx) {
        arx = $.type(arx) === "string" ? parseFloat(arx) : arx;
        return isNaN(arx) ? "X": arx
    };
    var format_options = function(verify) {
        var r = {
            not: false,
            require: false,
            testL: false,
            testV: false
        };
        var arr = verify.split(":");
        arr = arr.reverse();
        var _pop = $.trim(arr.pop());
        if (_pop.indexOf("!") == 0) {
            _pop = _pop.slice(1);
            r.not = true
        }
        r.regex = R.TYPE[_pop] || alert("ERROR :: @verify : 没有找到相应的类型");
        r.type = _pop;
        r.msgfix = R.M_HEADER[_pop];
        if ((_pop = arr.pop()) === undefined) {
            return r
        }
        var _req = $.trim(_pop);
        var _mm;
        if (_req === "!") {
            r.require = true;
            if ((_pop = arr.pop()) === undefined) {
                return r
            }
            _mm = $.trim(_pop)
        } else {
            _mm = _req
        }
        if (/^\[.*\]$/.test(_mm)) {
            r.testV = true
        } else {
            if (/^\{.*\}$/.test(_mm)) {
                r.testL = true
            }
        }
        _mm = _mm.slice(1, _mm.length - 1);
        _mm = _mm.split(",");
        if (_mm.length === 1) {
            r.min = r.max = parse_oublue(_mm[0])
        } else {
            r.min = parse_oublue(_mm[0]),
            r.max = parse_oublue(_mm[1])
        }
        return r
    };
    var format_net = function(_net) {
        var r = {};
        if ( !! _net) {
            var arr = _net.split(":");
            r.net_rule = arr[0];
            r.net_elem = arr[1]
        }
        return r
    };
    $.Verify = function(elem) {
        var _$, _p, o;
        this._$ = _$ = $(elem);
        this.title = _$.attr("title") || "";
        this.verify = _p = _$.attr("verify");
        o = format_options(_p);
        this.type = o.type;
        this.msgfix = o.msgfix;
        this.testL = o.testL;
        this.testV = o.testV;
        this.max = o.max;
        this.min = o.min;
        this.message = "";
        this.regex = o.regex;
        this.not = o.not;
        this.require = o.require;
        this.flag = 1;
        this.xy = _p = _$.attr("xy") || "right";
        _$.poshytip(R.XY[_p]);
        this.net = _p = _$.attr("net");
        o = format_net(_p);
        this.net_rule = o.net_rule;
        this.net_elem = o.net_elem;
        this.value = undefined
    };
    var Check_Net_Main = function(thisA, thisB, i) {
        var A = thisA.value;
        var B = $.trim(thisB.val());
        var tA = "[  " + thisA.title + "  ]";
        var tB = "[  " + thisB.attr("title") + "  ]";
        var rt = [1, ""];
        var temp = " 的值";
        switch (i) {
        case 0:
            rt = A < B ? rt: [0, tA + temp + "应小于  " + tB + temp];
            break;
        case 1:
            rt = A > B ? rt: [0, tA + temp + "应大于  " + tB + temp];
            break;
        case 2:
            rt = A == B ? rt: [0, tA + temp + "应等于  " + tB + temp];
            break;
        case 3:
            rt = A <= B ? rt: [0, tA + temp + "不能大于  " + tB + temp];
            break;
        case 4:
            rt = A >= B ? rt: [0, tA + temp + "不能小于  " + tB + temp];
            break;
        case 5:
            rt = A != B ? rt: [0, tA + temp + "不能等于  " + tB + temp];
            break;
        default:
            break
        }
        return rt
    };
    $.Verify.prototype = {};
    $.Verify.prototype.checkRequire = function() {
        if (this.require && this.value.length === 0) {
            this.flag = 0;
            this.message = "不可为空"
        } else {
            this.flag = 1
        }
    };
    $.Verify.prototype.int = function() {
        if (this.msgfix == "整数" && !(/^(\+)?\d+$/.test(this.value))) {
            this.flag = 0;
            this.message = "类型必须是正整数"
        } else {
            this.flag = 1
        }
    };
    $.Verify.prototype.checkVL = function(i, arr) {
        if (!this.require) {
            if (this.value == '') {
                return;
            }
        }
        var len;
        if (i === 0) {
            len = this.value.length
        } else {
            len = this.value
        }
        if (this.min === "X") {
            if (len > this.max) {
                this.flag = 0;
                this.message = arr[0] + this.max + arr[4]
            }
        } else {
            if (this.max === "X") {
                if (len < this.min) {
                    this.flag = 0;
                    this.message = arr[1] + this.min + arr[4]
                }
            } else {
                if (len < this.min || len > this.max) {
                    this.flag = 0;
                    this.message = arr[2] + this.min + " 到  " + this.max + arr[3]
                }
            }
        }
    };
    $.Verify.prototype.checkLength = function() {
        if (!this.testL) {
            return
        }
        this.checkVL(0, R.M_VL.L)
    };
    $.Verify.prototype.checkValue1 = function() {
        if (!this.testV) {
            return
        }
        this.checkVL(1, R.M_VL.V)
    };
    $.Verify.prototype.checkValue0 = function() {
        if ((!this.not && this.regex.test(this.value)) || (this.not && !this.regex.test(this.value))) {
            this.flag = 1
        } else {
            this.flag = 0;
            if(this.msgfix == "电话号码"){
            	
            	this.message = "请输入" + this.msgfix+"(例:010-62129999)"
            }
            else if(this.msgfix == "手机号码"){

            	this.message = "请输入" + this.msgfix+"(例:13333333333)"
            }else if(this.msgfix == "邮箱"){
            	this.message = "例:member@object.com"
            }
            else if(this.msgfix == "浮点数" && !(/^(\+)?\d+$/.test(this.value))){
            	this.message = "必须是整数或小数"
            }
        }
    };
    $.Verify.prototype.checkNet = function() {
        if (!this.net_rule) {
            return
        }
        var _id = this.net_elem;
        var rt = Check_Net_Main(this, $(_id), R.NET_R[this.net_rule]);
        this.flag = rt[0];
        this.message = rt[1]
    };
    $.Verify.prototype.showMsg = function() {
        if (this.flag === 1) {
            this.message = "";
            this._$.removeClass("verify_error");
            this._$.poshytip("hide")
        } else {
            this._$.addClass("verify_error");
            this._$.poshytip("update", this.message);
            this._$.poshytip("show")
        }
    };
    $.Verify.prototype.clearMsg = function() {
    	this.message = "";
        this._$.removeClass("verify_error");
        this._$.poshytip("hide")
    }
    $.Verify.prototype.check = function() {
        this.checkRequire();
        this.showMsg();
        if (this.flag == 0) {
            return this.flag
        }
        // 没有任何输入的话不用继续校验
        if (this.value.length === 0) return this.flag;
        this.int();
        this.showMsg();
        if (this.flag == 0) {
            return this.flag
        }
        this.checkValue0();
        this.showMsg();
        if (this.flag == 0) {
            return this.flag
        }
        this.checkValue1();
        this.showMsg();
        if (this.flag == 0) {
            return this.flag
        }
        this.checkLength();
        this.showMsg();
        if (this.flag == 0) {
            return this.flag
        }
        this.checkNet();
        this.showMsg();
        return this.flag
    };
    var Factory_Create_Instance = function(item, i) {
        var _f_key = "index_" + i + item.attr("verify");
        var _instance = STACK[_f_key];
        if (_instance == undefined) {
            STACK[_f_key] = _instance = new $.Verify(item)
        }
        return _instance
    };
    $.fn.verify = function(options) {
        STACK = {};
        options = options || "focusout";
        var _$Form = $(this);
        if (_$Form.is("form")) {
            _$Form = $(":input[verify]", this)
        }
        _$Form.each(function(i) {
            var _$ = $(this);
            var current_instance = Factory_Create_Instance(_$, i);
            _$.on(options,
            function() {
                current_instance.value = $.trim(_$.val());
                current_instance.check()
            })
        })
    };
    $.fn.validation = function() {
        var _r_f = 1;
        var _$Form = $(this);
        if (_$Form.is("form")) {
            _$Form = $(":input[verify]", this)
        }
        _$Form.each(function(i) {
            var _$ = $(this);
            var current_instance = Factory_Create_Instance(_$, i);
            current_instance.value = $.trim(_$.val());
            var _unit = current_instance.check();
            _r_f = _r_f === 1 ? _unit === 1 ? 1 : 0 : 0
        });
        return _r_f
    }

    /** 清除校验提示信息 */
    $.fn.clearMsg = function() {
    	$(".tip-green").hide();
    }
})(jQuery);