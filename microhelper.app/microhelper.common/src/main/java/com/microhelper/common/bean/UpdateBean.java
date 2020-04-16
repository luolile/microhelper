package com.microhelper.common.bean;
public class UpdateBean<T> {
	
	private T updateOb;
	
	private T conditionOb;

	private String orderByStr;
	
	public String getOrderByStr() {
		return orderByStr;
	}

	public void setOrderByStr(String orderByStr) {
		this.orderByStr = orderByStr;
	}

	public T getUpdateOb() {
		return updateOb;
	}

	public void setUpdateOb(T updateOb) {
		this.updateOb = updateOb;
	}

	public T getConditionOb() {
		return conditionOb;
	}

	public void setConditionOb(T conditionOb) {
		this.conditionOb = conditionOb;
	}
	
	
}
