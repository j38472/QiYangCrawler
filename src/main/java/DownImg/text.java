package DownImg;

import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

public class text {
    public static void main(String[] args) {

        RequestConfig requestConfig = RequestConfig.custom()
//                .setProxy(host)
                .setSocketTimeout(15000)
                .setConnectTimeout(15000)
                .setConnectionRequestTimeout(15000).build();
        CloseableHttpClient httpClient = null;
        CloseableHttpResponse response = null;
        HttpEntity entity = null;

        System.out.println("获取页面数据----------------------------------------URL为：：：：：" + "");
        //client 获取页面信息
        httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet("url");// 创建get请求
        // 设置头
        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:6.0.2) Gecko/20100101 Firefox/6.0.2");
//        httpGet.setHeader("ip","");
        httpGet.setHeader("Referer", "http://cdhfgs.foodmate.net/");
        httpGet.setConfig(requestConfig);


    }
}
