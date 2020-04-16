<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <div class="media"><!-- text-center -->
           
            <ul class="pagination">
                 <li ng-click="data.page.pageNo == 1 || doPage(1)" ng-disabled="data.page.pageNo == 1">
                     <a href="javascript:void(0);" aria-label="Previous">
                         <span  class="wedo-bg-white" aria-hidden="true">首页</span>
                     </a>
                 </li>
                 <li ng-click="data.page.pageNo == 1 || doPage(data.page.pageNo - 1)" ng-disabled="data.page.pageNo == 1">
                     <a href="javascript:void(0);">
                         <span aria-hidden="true" class="wedo-bg-white">&laquo;</span>
                     </a>
                 </li>
                 <li ng-repeat="x in pageArray" ng-click="x == data.page.pageNo || doPage(x)" ng-disabled="x == data.page.pageNo ">
                     <a href="javascript:void(0);">
                         <span  class="wedo-bg-white" ng-class="{true: 'active', false: 'inactive'}[isActive]" aria-hidden="true">{{x}}</span>
                     </a>
                 </li>
                 <li ng-click="data.page.pageNo == data.page.pageCount || doPage(data.page.pageNo + 1)" ng-disabled="data.page.pageNo == data.page.pageCount">
                     <a href="javascript:void(0);">
                         <span  class="wedo-bg-white" aria-hidden="true">&raquo;</span>
                     </a>
                 </li>
                 <li ng-click="data.page.pageNo == data.page.pageCount || doPage(data.page.pageCount)" ng-disabled="data.page.pageNo == data.page.pageCount">
                     <a href="javascript:void(0);" aria-label="Next">
                         <span  class="wedo-bg-white" aria-hidden="true">尾页</span>
                     </a>
                  </li>
            </ul>
            <br>
            <br>
                       显示{{(data.page.pageNo - 1) * data.page.pageSize + 1}} - {{(data.page.pageNo - 1) * data.page.pageSize + data.page.pageSize}}条  共{{data.page.dataTotalCount}}条   第{{data.page.pageCount}}页
        </div>