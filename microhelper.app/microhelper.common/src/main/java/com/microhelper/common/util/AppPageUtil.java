package com.microhelper.common.util;

import java.util.ArrayList;
import java.util.List;

public abstract class AppPageUtil {

	public static final int PAGE_SIZE = 10;

	/**
	 * 功能: 获取分页开始索引
	 * 作者: caowuchao
	 * 创建日期:2015年8月9日
	 * 修改者: mender
	 * @return
	 */
	public static int getStartIndex(int pageNum) {
		if (pageNum <= 0) {
			return 0;
		}

		return (pageNum - 1) * PAGE_SIZE;
	}
	
	/**
	 * 功能: 获取分页开始索引
	 * 作者: caowuchao
	 * 创建日期:2015年8月15日
	 * 修改者: mender
	 * 修改日期: modifydate
	 * @return
	 */
	public static int getStartIndex(int pageNum, int pageSize) {
		if (pageNum <= 0) {
			return 0;
		}

		return (pageNum - 1) * pageSize;
	}
	
	/**
	 * 内存分页
	 * @param list
	 * @param pageNum
	 * @return
	 */
	public static <T> List<T> paging(List<T> list, int pageNum) {
		if (list == null || list.size() == 0) return list;

		List<T> pagelist = new ArrayList<T>();
		// 开始索引
		int startIndex = AppPageUtil.getStartIndex(pageNum);
		// 每页大小
		int pageSize = AppPageUtil.PAGE_SIZE;
		int j = 0;
		for (int i=startIndex; i<list.size(); i++) {
			if (j >= pageSize) {
				break;
			}
			pagelist.add(list.get(i));
			j++;
		}
		return pagelist;
	}
}
