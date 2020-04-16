function initTeamTree($http){
	var setting = {
            async: {
                enable: true,
                url:contextPath+"/team/searchList",
                autoParam:["id", "name=n", "level=lv"],
                otherParam:{"otherParam":"zTreeAsyncTest"},
                dataFilter: filter
            },
            view: {expandSpeed:"",
                addHoverDom: addHoverDom,
                removeHoverDom: removeHoverDom,
                selectedMulti: false
            },
            edit: {
                enable: true,
                showRemoveBtn : showRemoveBtnFun,
                showRenameBtn : showRenameBtnFun
            },
            data: {
                simpleData: {
                    enable: true
                }
            },
            callback: {
                beforeRemove: beforeRemove,
                beforeRename: beforeRename
            }
        };
	    // 删除按钮是否显示
	    function showRemoveBtnFun(treeId, treeNode){
	    	if (treeNode.id == 0) {
	    		// 如果是根目录,不可删除
	    		return false;
	    	} else {
	    		return true;
	    	}
	    }
	    // 编辑按钮是否显示
	    function showRenameBtnFun(treeId, treeNode) {
	    	if (treeNode.id == 0) {
	    		// 如果是根目录,不可编辑
	    		return false;
	    	} else {
	    		return true;
	    	}
	    }
	    
        function filter(treeId, parentNode, childNodes) {
            if (!childNodes) return null;
            for (var i=0, l=childNodes.length; i<l; i++) {
                childNodes[i].name = childNodes[i].name.replace(/\.n/g, '.');
            }
            return childNodes;
        }
        function beforeRemove(treeId, treeNode) {
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            zTree.selectNode(treeNode);
            return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
        }       
        function beforeRename(treeId, treeNode, newName) {
            if (newName.length == 0) {
                setTimeout(function() {
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                    zTree.cancelEditName();
                    alert("节点名称不能为空.");
                }, 0);
                return false;
            }
            return true;
        }

        var newCount = 1;
        function addHoverDom(treeId, treeNode) {
            var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
            var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
                + "' title='add node' onfocus='this.blur();'></span>";
            sObj.after(addStr);
            var btn = $("#addBtn_"+treeNode.tId);
            if (btn) btn.bind("click", function(){
                var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                var nodes = zTree.getNodes();
                var parentBrotherId = null;
                if (nodes != null && nodes.length > 0) {
                	parentBrotherId = nodes[nodes.length - 1].id;
                }
                // 添加一个组织结构
                var dataSaved = {
                	parentId : treeNode.id,
                	preBrotherId : parentBrotherId,
                	teamName : "新组织_" + newCount,
                	oldDate : null
                }
                $http({
                    method:"POST",
                    url:contextPath+"/team/addSave",
                    data:dataSaved
                }).then(function successCallback(response) {
                	if (response.data.code == "200") {
                		// 添加成功
                		zTree.addNodes(treeNode, {id:response.data.data.teamId, pId:treeNode.id, name:response.data.data.teamName});
                	} else {
                		// 添加失败
                		alert(response.data.msg);
                	}
                },function errorCallback(response) {
                		alert("系统异常,请联系管理员!");
                });
                return false;
            });
        };
        function removeHoverDom(treeId, treeNode) {
            $("#addBtn_"+treeNode.tId).unbind().remove();
        };

        $.fn.zTree.init($("#treeDemo"), setting);
//        setTimeout(function(){
//        	var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
//        	defaultExpand(treeObj.getNodes()[0].tId);
//        }, 1000);
//        
        
        // var nodes = treeObj.getSelectedNodes();
        // if (nodes.length>0) {
        //	treeObj.expandNode(nodes[0], true, true, true);
        //}
}

//function defaultExpand(id){
//	var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
//	var node = treeObj.getNodeByTId(id);
//	treeObj.expandNode(node, true, true, true);
//}

app.controller('teamController',
		function ($scope, $route,$http, $location) {
	$(function(){
		initTeamTree($http);
	});
});