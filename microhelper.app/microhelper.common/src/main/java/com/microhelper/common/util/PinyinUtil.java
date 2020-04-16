package com.microhelper.common.util;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import net.sourceforge.pinyin4j.PinyinHelper;
import net.sourceforge.pinyin4j.format.HanyuPinyinCaseType;
import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat;
import net.sourceforge.pinyin4j.format.HanyuPinyinToneType;
import net.sourceforge.pinyin4j.format.HanyuPinyinVCharType;
import net.sourceforge.pinyin4j.format.exception.BadHanyuPinyinOutputFormatCombination;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


/**
 * 拼音工具类
 * @author kiwiam
 *
 */
public abstract class PinyinUtil {

	private static final Logger log = Logger.getLogger(PinyinUtil.class);

	protected static final String EMPTY = "";

	/**
	 * 转换为汉字拼音<br>
	 * 非中文字符不进行转换
	 * @param str
	 * @return
	 */
	public static String toPinyin(String str) {
		if(StringUtils.isBlank(str)) {
			return EMPTY;
		}

		char[] charArr = str.toCharArray();

		HanyuPinyinOutputFormat format = getPinyinOutputFormat();
		StringBuilder strBuf = new StringBuilder();
		try {
			for (int i = 0; i < charArr.length; i++) {
				// 判断是否为汉字字符
				if (Character.toString(charArr[i]).matches("[\\u4E00-\\u9FA5]+"))  {
					strBuf.append(PinyinHelper.toHanyuPinyinStringArray(charArr[i], format)[0]);
				} else {
					strBuf.append(charArr[i]);
				}
			}
		} catch (BadHanyuPinyinOutputFormatCombination e) {
			log.error(e);
			e.printStackTrace();
		}

		return strBuf.toString();
	}

	/**
	 * 转换为汉字简拼<br>
	 * 非中文字符不进行转换
	 * @param str
	 * @return
	 */
	public static String toSimplifiedPinyin(String str) {
		if(StringUtils.isBlank(str)) {
			return EMPTY;
		}

		char[] charArr = str.toCharArray();

		HanyuPinyinOutputFormat format = getPinyinOutputFormat();
		StringBuilder strBuf = new StringBuilder();
		try {
			for (int i = 0; i < charArr.length; i++) {
				// 判断是否为汉字字符
				if (Character.toString(charArr[i]).matches("[\\u4E00-\\u9FA5]+")) {
					String pinyin = PinyinHelper.toHanyuPinyinStringArray(charArr[i], format)[0];
					if (StringUtils.isNotBlank(pinyin) && pinyin.length() > 0) {
						strBuf.append(pinyin.charAt(0));
					}
				} else {
					strBuf.append(charArr[i]);					
				}
			}
		} catch (BadHanyuPinyinOutputFormatCombination e) {
			log.error(e);
			e.printStackTrace();
		}

		return strBuf.toString();
	}

	/**
	 * 转换拼音格式
	 * @return
	 */
	private static HanyuPinyinOutputFormat getPinyinOutputFormat() {
		HanyuPinyinOutputFormat format = new HanyuPinyinOutputFormat();
		// 设置小写
		format.setCaseType(HanyuPinyinCaseType.LOWERCASE);
		// 设置不包含音调
		format.setToneType(HanyuPinyinToneType.WITHOUT_TONE);
		// 拼音ü使用 v表示
		format.setVCharType(HanyuPinyinVCharType.WITH_V);
		return format;
	}
	
	/**
	* @Description 将字符串中的emoji表情转换成可以在utf-8字符集数据库中保存的格式（表情占4个字节，需要utf8mb4字符集）
	* @param str
	* 待转换字符串
	* @return 转换后字符串
	* @throws UnsupportedEncodingException
	* exception
	*/
	public static String emojiConvert(String str)
			throws UnsupportedEncodingException {
		String patternString = "([\\x{10000}-\\x{10ffff}\ud800-\udfff])";

		Pattern pattern = Pattern.compile(patternString);
		Matcher matcher = pattern.matcher(str);
		StringBuffer sb = new StringBuffer();
		while(matcher.find()) {
			try {
				matcher.appendReplacement(
				sb,
				"[["
				+ URLEncoder.encode(matcher.group(1),
				"UTF-8") + "]]");
			} catch(UnsupportedEncodingException e) {
				log.debug("emojiConvert error:"+ e);
				log.error("emojiConvert error", e);
				throw e;
			}
		}
		matcher.appendTail(sb);
		log.debug("emojiConvert " + str + " to " + sb.toString()
		+ ", len：" + sb.length());
		return sb.toString();
	}

	/**
	* @Description 还原utf8数据库中保存的含转换后emoji表情的字符串
	* @param str
	* 转换后的字符串
	* @return 转换前的字符串
	* @throws UnsupportedEncodingException
	* exception
	*/
	public static String emojiRecovery(String str)
			throws UnsupportedEncodingException {
			String patternString = "\\[\\[(.*?)\\]\\]";

			Pattern pattern = Pattern.compile(patternString);
			Matcher matcher = pattern.matcher(str);

			StringBuffer sb = new StringBuffer();
			while(matcher.find()) {
				try {
					matcher.appendReplacement(sb,
					URLDecoder.decode(matcher.group(1), "UTF-8"));
				} catch(UnsupportedEncodingException e) {
					log.debug("emojiRecovery error:"+ e);
					log.error("emojiRecovery error", e);
					throw e;
				}
			}
			matcher.appendTail(sb);
			log.debug("emojiRecovery " + str + " to " + sb.toString());
			return sb.toString();
	}
}
