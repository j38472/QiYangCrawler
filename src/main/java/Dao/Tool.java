package Dao;

import org.apache.http.HttpEntity;
import org.apache.http.StatusLine;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.util.ArrayList;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 工具类
 */
public class Tool {


    /**
     * 获取url的页面信息
     *
     * @param url
     * @return html
     */
    public PoJo GetHtmlPage(String url) {
        PoJo poJo = new PoJo();

        //    static HttpHost host = new HttpHost("115.226.138.33", 58979);
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
        httpGet.setHeader("Referer", "https://www.foodjx.com/");
        httpGet.setConfig(requestConfig);
        //执行请求前先休眠  以防止被禁止访问
        try {
            Thread.sleep(2500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
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

        poJo.setHtml(HtmlPage);
        poJo.setZTCode(statusCode);

        return poJo;
    }


    /**
     * 消除首尾空格  支持半角空格 全角空格
     *
     * @param str 需要匹配的字符串
     * @return
     */
    public String MyTrim(String str) {
        str = str.replaceAll("　", "");
        str = str.replaceAll(" ", "");
        return str;
    }


    /**
     * 注意 这个是未完成的代码模块
     * 正则匹配工具  分组匹配
     * 正则：："地址：([\\u4E00-\\u9FA5A-Za-z0-9]*\\s)*"
     *
     * @param dz 需要匹配的字符串
     * @return 匹配出的结果
     */
    public String DzZz(String dz) {
        System.out.println("开始取出模块---------------------------------------------------------------");
        String zz = "地址：(([\\u4E00-\\u9FA5A-Za-z0-9]*)*|(\\s)*)*电子";
        Pattern pattern = Pattern.compile(zz);
        Matcher matcher = pattern.matcher(dz);
        String group = "";
        if (matcher.find()) {
            try {
                group = matcher.group();
            } catch (IllegalStateException ilse) {
                System.out.println("tool++++++++DzZzDzZzDzZzDzZzDzZzDzZzDzZzDzZzDzZzDzZz");
            }
        }
        System.out.println("结果：：：：：：：" + group);
        System.out.println("正则匹配结束---------------------------------------------------------------");
        return group;

    }


    /**
     * 在此字符串中截取 字段
     *
     * @param str      需要截取的字符串
     * @param strStart 起始位置的字符串
     * @param strEnd   终止位置的字符串
     * @return
     */
    public String subString(String str, String strStart, String strEnd) {

        /* 找出指定的2个字符在 该字符串里面的 位置 */
        int strStartIndex = str.indexOf(strStart);
        int strEndIndex = str.indexOf(strEnd);

        /* index 为负数 即表示该字符串中 没有该字符 */
        if (strStartIndex < 0) {
            return "字符串 :---->" + str + "<---- 中不存在 " + strStart + ", 无法截取目标字符串";
        }
        if (strEndIndex < 0) {
            return "字符串 :---->" + str + "<---- 中不存在 " + strEnd + ", 无法截取目标字符串";
        }
        /* 开始截取 */
        String result = "";
        try {
            result = str.substring(strStartIndex, strEndIndex).substring(strStart.length());
        } catch (IndexOutOfBoundsException ioobe) {
            System.out.println("IndexOutOfBoundsException:tool");
            ioobe.printStackTrace();
        }

        System.out.println("截取结果为：：：：：：：：：" + result);
        return result;
    }


    /**
     * 随机时间，休眠器
     *
     * @param i 微妙 一秒随机数+i 的休眠时间
     */
    public void MyThreadSleep(int i) {
        //执行请求前先休眠  以防止被禁止访问
        Random rand = new Random();
        System.out.println("每请求一次休眠一次，以防止被封，开始休眠一到两秒-------------------");
        try {
            //随机数在1000-2000
            int intSleep = rand.nextInt(1200) + i;
            System.out.println("本次休眠" + intSleep + "微秒");
            Thread.sleep(intSleep);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("休眠结束-------------------");
    }


    /***
     * 去掉字符串中的换行符、回车符等，将连续多个空格替换成一个空格
     * @param string 需要清洗的字符串
     * @return 清洗过的字符串
     */
    public String removeLineBreak(String string) {
//         string = " 公司名称：成都市伟利过滤设备厂\n" +
//                 "                                    　联系人：孙智伟\n" +
//                 "                                    详细地址：四川省 成都 四川省成都市火车南站中国酒城(锦绣家园装饰城)B1区一楼二楼110-112号三楼109-116号\n" +
//                 "                                    电子邮件：wlglsb@wlglsb.com\n" +
//                 "                                    公司电话：028-85184125\n" +
//                 "                                    　　传真：028-85182274\n" +
//                 "                                    　　手机：13808067328\n" +
//                 "                                    　　邮编：610041";
        Pattern p = Pattern.compile("\t|\r|\n");
        Matcher m = p.matcher(string);
        string = m.replaceAll("");
        string = string.replaceAll(" +", " ");
        return string;

    }


    /**
     * 页码拼接
     *
     * @param i
     * @param str
     * @return
     */
    public String setP(int i, String str) {
        int strStartIndex = str.indexOf("_p");
        int strEndIndex = str.indexOf("_TID");
        String resultStart = null;
        String resultEndIndex = null;
        resultStart = str.substring(0, strStartIndex + 2);
        System.out.println("resultStart:::::" + resultStart);
        resultEndIndex = str.substring(strEndIndex, str.length());
        System.out.println("resultEndIndex:::::::::" + resultEndIndex);
        return resultStart + i + resultEndIndex;
    }


    /**
     *
     */


}
