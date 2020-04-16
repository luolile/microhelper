<%@ page language="java" pageEncoding="UTF-8"%>
<%	
	String path = request.getContextPath();
System.out.print(path);
%>
<script type="text/javascript">

location.href = "<%=path %>" + "/pages/login.jsp";
</script>