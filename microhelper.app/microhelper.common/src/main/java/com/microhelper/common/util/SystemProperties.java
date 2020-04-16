package com.microhelper.common.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;

@Configuration
@PropertySource("classpath:system.properties")
public class SystemProperties {
    /**
     * redis服务器地址
     */
    @Value("${redis.host}")
    private String redisHost;
    /**
     * redis服务器端口
     */
    @Value("${redis.port}")
    private int redisPort;
    /**
     * 图片服务器imagehost
     */
    @Value("${image.basePath}")
    private String imageBasePath;
    /**
     * 微信工程地址wechatBaseUrl
     */
    @Value("${wechatBaseUrl}")
    private String wechatBaseUrl;
    /**
     * 微信js支付回调地址jsNotifyUrl
     */
    @Value("${jsNotifyUrl}")
    private String jsNotifyUrl;
    /**
     * 服务器域名
     */
    @Value("${server.domainName}")
    private String serverDomainName;
    /**
     * 服务器端口
     */
    @Value("${server.port}")
    private Integer serverPort;

    public String getWechatBaseUrl() {
        return wechatBaseUrl;
    }

    public void setWechatBaseUrl(String wechatBaseUrl) {
        this.wechatBaseUrl = wechatBaseUrl;
    }

    public String getJsNotifyUrl() {
        return jsNotifyUrl;
    }

    public void setJsNotifyUrl(String jsNotifyUrl) {
        this.jsNotifyUrl = jsNotifyUrl;
    }

    public String getRedisHost() {
        return redisHost;
    }

    public void setRedisHost(String redisHost) {
        this.redisHost = redisHost;
    }

    public int getRedisPort() {
        return redisPort;
    }

    public void setRedisPort(int redisPort) {
        this.redisPort = redisPort;
    }

    public String getImageBasePath() {
        return imageBasePath;
    }

    public void setImageBasePath(String imageBasePath) {
        this.imageBasePath = imageBasePath;
    }

    public String getServerDomainName() {
        return serverDomainName;
    }

    public void setServerDomainName(String serverDomainName) {
        this.serverDomainName = serverDomainName;
    }

    public Integer getServerPort() {
        return serverPort;
    }

    public void setServerPort(Integer serverPort) {
        this.serverPort = serverPort;
    }

    @Bean
    public static PropertySourcesPlaceholderConfigurer propertySourcesPlaceholderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }

}
