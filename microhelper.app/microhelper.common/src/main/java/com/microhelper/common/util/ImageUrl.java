package com.microhelper.common.util;

import org.apache.commons.lang3.StringUtils;

/**
 * 图像地址处理
 * @author kiwiam
 *
 */
public abstract class ImageUrl {

	private static final String imageBasePath = PropertyUtil.getProperty("image.basePath");

	/**
	 * 获取图片访问URL
	 * @param path
	 * @return
	 */
	public static String getUrl(String path) {
		if (StringUtils.isBlank(path)) {
			return "";
		}

		if (path.startsWith("http:")) {
			return path;
		}

		return imageBasePath.concat(path);
	}
}
