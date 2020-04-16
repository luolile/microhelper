package com.microhelper.common.bean;

import java.util.Date;
import java.util.List;

public class ZtreeBean {
    private Integer id;
    private String name;
    private boolean isParent = false;
    private boolean halfCheck = false;
    private Integer ordernum;
    private String des;
    private Integer parentId;
    private String no;
    private Date utime;
    
    private List<ZtreeBean> children;
    
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public boolean isParent() {
        return isParent;
    }
    public void setParent(boolean isParent) {
        this.isParent = isParent;
    }
    public boolean isHalfCheck() {
        return halfCheck;
    }
    public void setHalfCheck(boolean halfCheck) {
        this.halfCheck = halfCheck;
    }
   
    public String getDes() {
        return des;
    }
    public void setDes(String des) {
        this.des = des;
    }
    public Integer getParentId() {
        return parentId;
    }
    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }
    public String getNo() {
        return no;
    }
    public void setNo(String no) {
        this.no = no;
    }
    public Integer getOrdernum() {
        return ordernum;
    }
    public void setOrdernum(Integer ordernum) {
        this.ordernum = ordernum;
    }
    public List<ZtreeBean> getChildren() {
        return children;
    }
    public void setChildren(List<ZtreeBean> children) {
        this.children = children;
    }
    public Date getUtime() {
        return utime;
    }
    public void setUtime(Date utime) {
        this.utime = utime;
    }
}
