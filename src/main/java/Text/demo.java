package Text;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;


/**
 * @author cyh
 * @version 1.0
 * @date 2021/4/29 11:09
 */
public class demo {

    public static void main(String[] args) {

        String url = "http://24log.chacuo.net/my";
//        String url = "http://httpbin.org/ip";
        UnitGetHemlData(url);

    }

    /**
     * httpUnit 获取页面数据
     */
    public static void UnitGetHemlData(String url){
        try {
            HttpClient client = HttpClients.createDefault();// 创建默认http连接
            HttpGet get = new HttpGet(url);// 创建一个post请求
            HttpResponse response = client.execute(get);// 用http连接去执行get请求并且获得http响应
            HttpEntity entity = response.getEntity();// 从response中取到响实体
            String html = EntityUtils.toString(entity);// 把响应实体转成文本
            System.out.println(html);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }


    }

}
