package ShiPinSheBeiWangspsb114;

import Dao.*;


import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.htmlcleaner.*;


/**
 * 入口程序
 * 用于获取其他一级页面的url
 * 获取公司的名字
 * 获取公司的
 */
public class Entrance {
    Tool tool = new Tool();
    static int cont = 0; // 记录抓取了几条数据
    int UrlCrawRetry = 1;//记录详情页URL 抓取重试次数
    MyJDBC myJDBC = new MyJDBC();

    // static HttpHost host = new HttpHost("180.153.251.10",7780);
    private static RequestConfig requestConfig = RequestConfig.custom()
            // .setProxy(host)
            .setSocketTimeout(15000)
            .setConnectTimeout(15000)
            .setConnectionRequestTimeout(15000).build();
    static CloseableHttpClient httpClient = null;
    static CloseableHttpResponse response = null;
    static HttpEntity entity = null;

    /**
     * 下载 解析  列表页
     *  拿到大多数数据
     * @param url 入口
     */
    public void DownLB(String url) {

        System.out.println("开始抓取一级列表页的数据----------------------------------------");
        System.out.println("列表页URL--------------"+url);
        //client 获取页面信息
        httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(url);// 创建get请求
        // 设置头
        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:6.0.2) Gecko/20100101 Firefox/6.0.2");
//        httpGet.setHeader("ip","");
        httpGet.setHeader("Referer", "http://www.spsb114.com/company/company_list.php?");

        httpGet.setConfig(requestConfig);


        //执行请求前先休眠  以防止被禁止访问
        tool.MyThreadSleep(1000);


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


        /**
         * 使用HtmlCleaner  xpath解析器
         */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(HtmlPage);


        //获取URL
        String Urlxpath = "//a[@class='blue f16']/@href";
        //公司名字
        String Namexpath = "//a[@class='blue f16']/strong/text()";
        //主营业务
        String ZYxpath = "//table[4]/tbody/tr/td[@class='fgray2']/text()";
        //联系人  电话  手机    需要后期切分 再加工
        String LXRDHSJxpath = "//tbody/tr/td[1]/table[3]/tbody/tr/td/text()";
        //城市地址 需要和详情地址进行拼接     直接获取的有脏数据 ‘|’  需要先清洗
        String CsDzxpath = "//table/tbody/tr/td[1]/table[1]/tbody/tr/td[1]/text()";


        Object[] Urlobjects = new Object[0];
        Object[] Nameobjects = new Object[0];
        Object[] Zyobjects = new Object[0];
        Object[] LXRDHSojects = new Object[0];
        Object[] CsDzobjects = new Object[0];
        try {
            Urlobjects = tn.evaluateXPath(Urlxpath);
            Nameobjects = tn.evaluateXPath(Namexpath);
            Zyobjects = tn.evaluateXPath(ZYxpath);
            LXRDHSojects = tn.evaluateXPath(LXRDHSJxpath);
            CsDzobjects = tn.evaluateXPath(CsDzxpath);
        } catch (XPatherException e) {
            e.printStackTrace();
        }


//        System.out.println("Urlobjects.length::::::" + Urlobjects.length);
//        System.out.println("Nameobjects.length::::::" + Nameobjects.length);
//        System.out.println("Zyobjects.length::::::" + Zyobjects.length);
//        System.out.println("LXRDHSojects.length::::::" + LXRDHSojects.length);
//        System.out.println("CsDzobjects.length::::::" + CsDzobjects.length);
//        System.out.println("tn.evaluateXPath(xpath)::::::"+Nameobjects[1]);

        //详情页面的链接
        String xqurl = null;
        //公司名称
        String name = null;
        //主营业务
        String zy = null;
        //联系人
        String lxr = null;
        //电话
        String dh = null;
        //手机
        String sj = null;
        //地址  城市地址 需要详情页的详细地址拼接
        String csdz = null;
        //完整的地址
        String wzdz = null;


        /**
         * 如果没有抓取到详情页的URl  则再次尝试4次
         */
        if (Urlobjects.length == 0 & UrlCrawRetry < 5) {
            System.out.println("本次详情页URL  没有采集到  现在是第" + UrlCrawRetry + "次采集了！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！");
            UrlCrawRetry++;
            DownLB(url);
        } else {
            //重试次数归零
            UrlCrawRetry = 0;
            /**
             * CsDzobjects 需要先清洗出不需要的数据  有不需要的‘|’
             */

            String LXRDHS = "";
            try {
                for (int i = 0; i < Urlobjects.length; i++) {
                    System.out.println("---------------------------------------------------------------------------------------------------------------------");

                    xqurl = Urlobjects[i].toString();
                    name = Nameobjects[i].toString();
                    zy = Zyobjects[i].toString();
//                    System.out.println("xqurl::" + xqurl);
//                    System.out.println("name::" + name);
//                    System.out.println("zy::" + zy);
                    //切分出 联系人 电话  手机
                    LXRDHS = LXRDHSojects[i + 1].toString();
                    lxr = tool.subString(LXRDHS, "人：", "电话");//联系人
                    dh = tool.subString(LXRDHS, "话：", "手机");//电话
                    sj = tool.subString(LXRDHS, "机：", "更多");//手机
//                    System.out.println("截取联系人::" + lxr);
//                    System.out.println("截取电话::" + dh);
//                    System.out.println("截取手机::" + sj);
                    csdz = tool.subString(CsDzobjects[i + 5].toString(), "[", "]");
//                    System.out.println("城市地址::" + csdz);
                    String xqdzsq =  XqDz(xqurl);
                    if (xqdzsq!=null){
                        wzdz = csdz + XqDz(xqurl);
                    }
//                    System.out.println("完整的地址::" + wzdz);
                    System.out.println("----------------------打印下最后的数据------------------------------------------------------------------");
                    System.out.println();

                    System.out.println("xqurl::+" + xqurl);
                    System.out.println("name::+" + name);
                    System.out.println("zy::+" + zy);
                    System.out.println("lxr::+" + lxr);
                    System.out.println("dh::+" + dh);
                    System.out.println("sj::+" + sj);
                    System.out.println("wzdz::+" + wzdz);
                    System.out.println();

                    //入库
                    myJDBC.addData(name, xqurl, zy, lxr, dh, sj, wzdz);
                }

            } catch (IndexOutOfBoundsException es) {
                System.out.println("IndexOutOfBoundsException:entrance");
                es.printStackTrace();
            }

        }


    }


    int xqyI = 0;

    /***
     * 解析详情页信息  为了拿到详细地址
     * @param url  详情页URL
     * @return 详细地址
     */
    public String XqDz(String url) {
        String xqdz = null;//模块信息

        System.out.println("开始详情地址数据----------------------------------------URL为：：：：：" + url);
        //client 获取页面信息
        httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(url);// 创建get请求
        // 设置头
        httpGet.setHeader("User-Agent", "Mozilla/5.0 (Windows NT 6.1; rv:6.0.2) Gecko/20100101 Firefox/6.0.2");
//        httpGet.setHeader("ip","");
        httpGet.setHeader("Referer", "http://www.spsb114.com/company/company_list.php?");
        httpGet.setConfig(requestConfig);
        //执行请求前先休眠  以防止被禁止访问
        tool.MyThreadSleep(1000);
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
        /**
         * 使用HtmlCleaner  xpath解析器
         */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(HtmlPage);
        //用于提取出包含详细地址的 数组
        Object[] DataDzObjects = new Object[0]; ///
        /**
         * 网站规则不同
         */
        //xpath 规则

        // 取出数据之后 还需要 这个规则需要从字段中 截取出 需求数据   址： --- 电子
        String xqdzXpath1 = "//table[5]/tbody/tr/td[1]/table/tbody/tr[2]/td/text()";
        String xqdzXpath2 = "//table[2]/tbody/tr/td[1]/table/tbody/tr[2]/td/text()";
        String xqdzXpath3 = "//table[1]/tbody/tr/td[1]/table/tbody/tr[2]/td/text()";
        /***
         * 下面出现的次数最少  放到后面
         */
        String xqdzXpath4 = "//div[@class='layui-row']/table[@class='layui-table']/tbody/tr[2]/td[2]/text()";
        String xqdzXpath5 = "//tbody/tr/td/table[4]/tbody/tr/td[1]/table/tbody/tr[2]/td/text()";

        System.out.println();
        /**
         * 1111111111
         */
        String data = "";
        try {
            DataDzObjects = tn.evaluateXPath(xqdzXpath1);

            if (DataDzObjects.length == 0) {
                System.out.println("Xpath1 抓取结果为空  ，开始Xpath2");
                /**
                 *222222222222
                 */
                DataDzObjects = tn.evaluateXPath(xqdzXpath2);
                if (DataDzObjects.length == 0) {
                    System.out.println("Xpath2 抓取结果为空  ，开始Xpath3");

                    /**
                     *33333333333333
                     */
                    DataDzObjects = tn.evaluateXPath(xqdzXpath3);
                    if (DataDzObjects.length == 0) {
                        System.out.println("Xpath3 抓取结果为空  ，开始Xpath4");

                        /**
                         *4444444444444
                         */
                        DataDzObjects = tn.evaluateXPath(xqdzXpath4);
                        if (DataDzObjects.length == 0) {
                            System.out.println("Xpath4 抓取结果为空  ，开始Xpath5");
                            /**
                             *5555555555555555
                             */
                            DataDzObjects = tn.evaluateXPath(xqdzXpath5);
                            if (DataDzObjects.length == 0){
                                System.out.println("Xpath5 抓取结果为空  ，重试");
                                //重新获取
                                if (xqyI < 5) {
                                    System.out.println("重试次数：：：："+xqyI);
                                    xqyI++;
                                    XqDz(url);
                                }
                            }else {
                                //调用正则切分
                                for (int i = 0; i < DataDzObjects.length; i++) {
                                    data += DataDzObjects[i];
                                }
                                System.out.println(data);
                            }

                        } else {
                            //调用正则切分
                            for (int i = 0; i < DataDzObjects.length; i++) {
                                data += DataDzObjects[i];
                            }
                            System.out.println(data);
                        }

                    } else {
                        //调用正则切分
                        for (int i = 0; i < DataDzObjects.length; i++) {
                            data += DataDzObjects[i];
                        }
                        System.out.println(data);
                    }
                } else {
                    //调用正则切分
                    for (int i = 0; i < DataDzObjects.length; i++) {
                        data += DataDzObjects[i];
                    }
                    System.out.println(data);
                }
            } else {
                //调用正则切分
                for (int i = 0; i < DataDzObjects.length; i++) {
                    data += DataDzObjects[i];
                }
                System.out.println(data);
            }
        } catch (XPatherException e) {
            e.printStackTrace();
        }
        xqyI = 0;//归零
        //去除字符串中的换行符、回车符等，将连续多个空格替换成一个空格
        data = tool.removeLineBreak(data);
        System.out.println("开始截取详情地址数据" + data);
        System.out.println("待修改的地址：：：：：：：：：：：：" + data);

        //如果该网页中有详情地址
        if (data.indexOf("地址：") != -1) {
            if (data.indexOf(" 电") != -1) {
                xqdz = tool.subString(data, "址：", " 电");
            } else if (data.indexOf(" 公") != -1) {
                xqdz = tool.subString(data, "址：", " 公");
            } else if (data.indexOf(" 传") != -1) {
                xqdz = tool.subString(data, "址：", " 传");
            } else if (data.indexOf(" 手") != -1) {
                xqdz = tool.subString(data, "址：", " 手");
            } else if (data.indexOf(" 邮") != -1) {
                xqdz = tool.subString(data, "址：", " 邮");
            }
        }
        System.out.println("详情地址：：最终结果：： " + xqdz);
//        System.out.println("直接截取：：：：：：："+tool.subString(HtmlPage,"址：","电子"));

        return xqdz;
    }




}
