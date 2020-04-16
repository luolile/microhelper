package com.microhelper.common.util;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.apache.log4j.Logger;
import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import com.alibaba.fastjson.JSONObject;

/**
 * xml解析工具类
 * 
 * @author Yang.Zheng
 *
 */
public class XmlUtil {

	private static final Logger log = Logger.getLogger(XmlUtil.class);

	/**
	 * 将流中返回xml信息解析成map数据
	 * 
	 * @param inputStream
	 *            输入流
	 * @return 返回xml中的key value
	 */
	public static Map<String, String> xmlStream2Map(InputStream inputStream) throws Exception {
		// 将解析结果存储在HashMap中
		Map<String, String> map = new TreeMap<String, String>();
		// 读取输入流
		SAXReader reader = new SAXReader();
		Document document = reader.read(inputStream);
		// 得到xml根元素
		Element root = document.getRootElement();
		// 得到根元素的所有子节点
		List<Element> elementList = root.elements();

		// 遍历所有子节点
		for (Element e : elementList) {
			map.put(e.getName(), e.getText());
		}

		// 释放资源
		inputStream.close();
		inputStream = null;
		return map;
	}

	/**
	 * xml字符串转化为json对象 只转化第一层
	 * 
	 * @param xmlStr
	 * @return
	 */
	public static JSONObject xmlStr2JSonObj(String xmlStr) {
		JSONObject obj = new JSONObject();
		InputStream is = null;
		try {
			is = new ByteArrayInputStream(xmlStr.getBytes("utf-8"));
			SAXReader reader = new SAXReader();
			Document document = reader.read(is);
			// 得到xml根元素
			Element root = document.getRootElement();
			// 得到根元素的所有子节点
			List<Element> elementList = root.elements();
			// 遍历所有子节点
			for (Element e : elementList) {
				obj.put(e.getName(), e.getText());
			}
			is.close();
			is = null;
		} catch (Exception e) {
			log.error("解析xml到json失败,xml参数：" + xmlStr, e);
			try {
				if (is != null)
					is.close();
			} catch (IOException e1) {
				e1.printStackTrace();
			}
		}
		return obj;
	}
}
