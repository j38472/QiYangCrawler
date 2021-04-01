package DownImg;

import org.apache.http.HttpEntity;
import org.apache.http.StatusLine;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;

public class Demo {
    public static void main(String[] args) {

        newFile();
    }

    /**
     * @param url  图片或者视频 的URL
     * @param path 下载的路径机器名字还有格式
     */
    public static void newFile() {
        int a = 0;
        String url = "http://users.foodmate.net/api/image.png.php?auth=fff6mLGmb-P-7re6D7ADc9F-P-zrhPor1JUekuRdgjn3FD5B3r80SSn1tK2iEQ";
        try {
            RequestConfig requestConfig = RequestConfig.custom()
//                .setProxy(host)
                    .setSocketTimeout(15000)
                    .setConnectTimeout(15000)
                    .setConnectionRequestTimeout(15000).build();
            CloseableHttpClient httpClient = null;
            CloseableHttpResponse response = null;
            HttpEntity entity = null;

            System.out.println("获取页面数据----------------------------------------URL为：：：：：" + url);
            //client 获取页面信息
            httpClient = HttpClients.createDefault();
            HttpGet httpGet = new HttpGet(url);// 创建get请求
            // 设置头
            httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:6.0.2) Gecko/20100101 Firefox/6.0.2");
//        httpGet.setHeader("ip","");
            httpGet.setHeader("Referer", "http://cdhfgs.foodmate.net/");
            httpGet.setConfig(requestConfig);


            // 执行请求
            System.out.println("执行请求-----------");
            String HtmlPage = "";
            try {
                response = httpClient.execute(httpGet);
                entity = response.getEntity();
                HtmlPage = EntityUtils.toString(entity, "UTF-8");
            } catch (Exception e) {
                e.getStackTrace();
            }

            StatusLine statusLine = null;
            int statusCode = 0;
            try {
                statusLine = response.getStatusLine();
                statusCode = statusLine.getStatusCode();
            } catch (NullPointerException e) {
                System.out.println("get ,请求出问题了！！！！！！！！！！！");
            }
            System.out.println("状态码:::::::::::" + statusCode);

            InputStream input = entity.getContent();
            BufferedInputStream bufferedInput = new BufferedInputStream(input);
            File file = new File("F:/demo/1.png"); //设置下载目录以及文件名称及其格式f
            FileOutputStream output = new FileOutputStream(file);
            byte[] imgByte = new byte[1024 * 2];
            int len = 0;
            while ((len = bufferedInput.read(imgByte, 0, imgByte.length)) != -1) {
                output.write(imgByte, 0, len);
            }
            input.close();
            output.close();
            System.out.println("http://users.foodmate.net/api/image.png.php?auth=fff6mLGmb-P-7re6D7ADc9F-P-zrhPor1JUekuRdgjn3FD5B3r80SSn1tK2iEQ" + " 已完成.");
            a++;

        } catch (Exception e) {
            System.err.println("下载图片失败！！！");
        }

    }
}
