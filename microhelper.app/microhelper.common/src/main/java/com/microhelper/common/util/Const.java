package com.microhelper.common.util;


/**
 * 
 * 创建日期:2015年5月3日
 * Title: 系统常量类
 * Description：对本文件的详细描述，原则上不能少于50字
 * @author caowuchao
 * @mender：（文件的修改者，文件创建者之外的人）
 * @version 1.0
 * Remark：认为有必要的其他信息
 */
public interface Const {

	String SESSION_USER_ID = "session.userId";
	
	String SESSION_USER_INFO = "session.userInfo";
	
	String SESSION_USER_NAME = "session.userName";
	/******************微信***************************/
	// 会员信息
	String SESSION_MEMBER_ID = "session.memberId";
	String SESSION_MEMBER_INFO = "session.memberInfo";
	String SESSION_MEMBER_NAME = "session.memberName";
	
	int PAGE_SIZE = 10;
	
	int YES = 1;
	int NO = 0;
	
	String QUERY_BEAN_PREFIX = "queryBean:";
	
	String IMAGES_DIR = "/resource/images";
	
	Integer INT_DEFAULT = 0;
	String EMPTY_STR = "";
	
}
