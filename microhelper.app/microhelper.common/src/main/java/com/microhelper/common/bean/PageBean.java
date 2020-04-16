package com.microhelper.common.bean;

import java.util.List;

public class PageBean <T>{
	/** 每页记录数  */
	private final static int DEFAULT_PAGE_SIZE = 10;
	/** 每页记录数  */
	private final static int DEFAULT_PAGE_SHOW = 10;
	/** 当前页 */
    private int pageNo = 1;
    /** 页数 **/
    private int pageCount = 0;
    /** 一页最大记录数 **/
    private int pageSize = DEFAULT_PAGE_SIZE;
    /**  总记录数 */
    private int dataTotalCount = 0;
    /** 显示页数  */
    private int pageShow  = DEFAULT_PAGE_SHOW;
    /** 显示开始页 */
    private int pageStart  = 1;
    /** 显示结束页  */
    private int pageEnd  = 10;
    
    public int getPageStart() {
		return pageStart;
	}
	public void setPageStart() {
		if (pageNo - pageShow <= 0 ) {
			pageStart = 1;
		} else {
			if (pageNo % pageShow > 0) {
				pageStart = (pageNo/pageShow) * pageShow + 1;
			} else {
				pageStart = (pageNo/pageShow - 1) * pageShow + 1;
			}
		}
	}
	public int getPageEnd() {
		return pageEnd;
	}
	public void setPageEnd() {
		pageEnd = pageStart + pageShow - 1;
		if (pageEnd > pageCount) {
			pageEnd = pageCount;
		}
	}
	public int getPageShow() {
		return pageShow;
	}
	public void setPageShow(int pageShow) {
		this.pageShow = pageShow;
	}
	public int getPageCount() {
		return pageCount;
	}
	public void setPageCount() {
		if (dataTotalCount % pageSize > 0) {
			this.pageCount = dataTotalCount / pageSize + 1;
		} else {
			this.pageCount = dataTotalCount / pageSize;
		}
		setPageStart();
		setPageEnd();
	}
	public int getDataTotalCount() {
		return dataTotalCount;
	}
	public void setDataTotalCount(int dataTotalCount) {
		this.dataTotalCount = dataTotalCount;
		setPageCount();
		
		
	}
	protected int startNum = 0;
    
    public T param;
    public List<T> resultList;
    
	public PageBean() {
		setStartNum();
	}
	public List<T> getResultList() {
		return resultList;
	}
	public void setResultList(List<T> resultList) {
		this.resultList = resultList;
	}
	public int getStartNum() {
		return startNum;
	}
	public void setStartNum() {
		if (pageNo <= 0) {
			pageNo = 1;
		}
		if (pageSize <=0) {
			pageSize = DEFAULT_PAGE_SIZE;
		}
		this.startNum = (pageNo - 1) * pageSize;
	}
	public T getParam() {
		return param;
	}
	public void setParam(T param) {
		this.param = param;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		setStartNum();
		this.pageNo = pageNo;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		setStartNum();
		this.pageSize = pageSize;
	}
	
    
}
