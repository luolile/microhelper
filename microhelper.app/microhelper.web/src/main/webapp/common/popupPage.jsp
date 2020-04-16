<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%--
概要：本jsp用于显示分页信息
说明：jsp需要从action中取得分页所需的数据，并能提交指定的表单，绑定到action的数据中
使用方法：
      1.在jsp中适当的位置用include引入本jsp，不能在form内部
      2.在document加载后调用Page方法初始化，例如：$("#content").Page("#zy01_Form");
        "content"是一个div的id,zy01_Form是检索条件所在的表单id
      3.在响应的action中实现popupBean的set和get方法，并且popupBean必须是com.object.weblib.common.bean.PageBean的子类
依赖文件:
      1.page.css
      2.jquery.js
      3.jquery.page.js
 --%>
<s:if test="popupBean != null && popupBean.pageTotal > 0">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/page.css" />
<div class="row">
<div class="col-sm-4" id="page_menulist_all_show_popup">
    <small class="text-muted inline m-t-sm m-b-sm">
    显示 <s:property value="popupBean.itemStart" />-<s:property value="popupBean.itemEnd" />条 
     共<s:property value="popupBean.sumItems" />条
    </small>
</div>
<s:if test="popupBean.pageTotal > 1">
<div class="col-sm-8 text-right text-center-xs">
    <ul class="pagination pagination-sm m-t-none m-b-none" id="page_menulist_show_popup">
        <li class="_page_index_first"><a href="#" style="cursor: pointer;">首页</a></li>
        <li class="_page_index_prev"><a href="#"><i class="fa fa-chevron-left"></i></a></li> 
        <s:iterator value="popupBean.pageNo2Show" var="pageIdx">
            <s:if test="%{#pageIdx == popupBean.pageIndex}">
            <li class="_page_index_number" index="<s:property/>"><a style="color: #2a6496;background-color: #eee;border-color: #ddd;" href="#"><s:property/></a></li> 
            </s:if><s:else>
            <li class="_page_index_number"  index="<s:property/>"><a href="#"><s:property/></a></li>
            </s:else>
        </s:iterator>    
        <li class="_page_index_next"><a href="#"><i class="fa fa-chevron-right"></i></a></li>
        <li class="_page_index_last"><a href="#" style="cursor: pointer;">末页</a></li>
		<li style="width: 45px;">
		  <a style="padding: 0px;">
		    <input id="_pop_page_index_free_page_num" type="text" value="<s:property value="popupBean.pageIndex"/>" style="width: 40px; height:27px; border-color: #ffffff" onblur="value=value.replace(/[^\d]/g,'') ">
		  </a>
		</li>
		<li class="_page_index_free"><a href="#" style="cursor: pointer;">跳转</a></li>
    </ul>
</div>
</s:if>
<span style="display:none;"><s:form action="#" method="post" id="_page_from_default_popup"></s:form></span>
</div>
</s:if>

<script type="text/javascript">
$(function($){
    // 如果分页没有定义
    var XUFXS = window.XUFXS;
    if ((! XUFXS) || (typeof XUFXS == 'undefined')) {
        XUFXS = new Object();
        XUFXS = {
            PAGE : null,
            MESSAGE : ""
        };
        XUFXS.PAGE = {
                index : 1,
                searchflag : 0,
                total : 1,
                iteams : 1,
                form : "#_page_from_default_popup"
        };
    }
    XUFXS.PAGE.index = "${popupBean.pageIndex}",
    XUFXS.PAGE.total = "${popupBean.pageTotal}",
    XUFXS.PAGE.items = "${popupBean.sumItems}";
    
    window.XUFXS = XUFXS;
});
</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/jslib/jquery/jquery.popuppage.js"></script>