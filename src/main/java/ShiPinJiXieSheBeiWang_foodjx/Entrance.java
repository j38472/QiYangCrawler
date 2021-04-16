package ShiPinJiXieSheBeiWang_foodjx;

import Dao.*;

import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.impl.client.CloseableHttpClient;
import org.htmlcleaner.HtmlCleaner;
import org.htmlcleaner.TagNode;
import org.htmlcleaner.XPatherException;

public class Entrance {
    MyTool myTool = new MyTool();

    //    static HttpHost host = new HttpHost("115.226.138.33", 58979);
    private static RequestConfig requestConfig = RequestConfig.custom()
//                 .setProxy(host)
            .setSocketTimeout(15000)
            .setConnectTimeout(15000)
            .setConnectionRequestTimeout(15000).build();
    static CloseableHttpClient httpClient = null;
    static CloseableHttpResponse response = null;
    static HttpEntity entity = null;


    public void yeMaXh(String url) {
        System.out.println(url);
        for (int i = 1; i < 101; i++) {

        }
    }


    /**
     * 下载 解析  列表页
     * 拿到大多数数据
     */
    public void DownLB(String HtmlPage) {
        String SYUrl = "https://www.foodjx.com";

        /**
         * 使用HtmlCleaner  xpath解析器
         */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(HtmlPage);

        Object[] NameObjects = new Object[0]; ///
        Object[] urlObjects = new Object[0]; ///


        try {
            //获取列表页可以取到到的数据
            NameObjects = tn.evaluateXPath("//div[@class='companyName']/a/text()");//公司名字
            urlObjects = tn.evaluateXPath("//div[@class='companyName']/a/@href");//url  该url 需要拼接到首页url 后
            for (int j = 0; j < urlObjects.length; j++) {
                getXQ(SYUrl+urlObjects[j].toString(), NameObjects[j].toString());
            }

        } catch (XPatherException e) {
            e.printStackTrace();
        } catch (IndexOutOfBoundsException es) {
            System.out.println("IndexOutOfBoundsException:entrance");
            es.printStackTrace();
        }

    }

    /***
     * 获取详情页信息
     * @param url 页面的URL
     */
    public void getXQ(String url, String name) {
        MyJDBC  myJDBC = new MyJDBC();


        PoJo poJo = new PoJo();
        poJo = myTool.ClientGetHtmlPage(url,"https://www.foodjx.com");
        String HtmlPage = poJo.getHtml();

        /**
         * 使用HtmlCleaner  xpath解析器
         */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(HtmlPage);


        Object[] DataObjects = new Object[0]; ///
        Object[] SJObjects = new Object[0];
        Object[] DHObjects = new Object[0];
        Object[] LXRObjects = new Object[0];
        Object[] ZYObjects = new Object[0];

        String lxr = null;
        String dh = null;
        String sj = null;
        String dz = null;
        String zy = null;
        try {
            DataObjects = tn.evaluateXPath("//section/div[@class='contactor']/dl/text()");//多项数据
            SJObjects = tn.evaluateXPath("//div[@class='cardBox']/p[@class='phone']/text()");//手机
            DHObjects = tn.evaluateXPath("//div[@class='cardBox']/p[@class='tell']/text()");//电话
            LXRObjects = tn.evaluateXPath("//div[@class='cardBox']/p[@class='person']/text()");//联系人
            ZYObjects = tn.evaluateXPath("//div[@class='companyLogo']/table/tbody/tr/td/p/text()");//主营业务

            //如果同时没有获取到  多项数据  手机号 电话号  的情况下   则是该网站  将此公司的手机号隐藏了  只保存公司名字
            if (DataObjects.length == 0&SJObjects.length == 0 &DHObjects.length == 0){
                System.out.println("只存储公司名字和url");
                myJDBC.addName(name,url);
            }else {
                System.out.println("++++++++++++++++++++++++++");
                String data = null;
                for (int i = 0; i < DataObjects.length; i++) {
                    System.out.println(i);
                    data = DataObjects[i].toString();
                    System.out.println(data);
                    if (data.indexOf("公司地址：") != -1) {
                        dz = data;
                    }
                }
                System.out.println("++++++++++++++++++++++++++");

                System.out.println("DataObjects.length:::::::::" + DataObjects.length);
                System.out.println("LXRObjects.length:::::::::" + LXRObjects.length);
                System.out.println("DHObjects.length:::::::::" + DHObjects.length);
                System.out.println("SJObjects.length:::::::::" + SJObjects.length);
                System.out.println("ZYObjects.length:::::::::" + ZYObjects.length);

                lxr = LXRObjects[0].toString();
                dh = DHObjects[0].toString();
                sj = SJObjects[0].toString();
                zy = ZYObjects[0].toString();


                System.out.println("开始存储正常数据");
                myJDBC.addData(name,url,zy,lxr,dh,sj,dz);
            }

        } catch (XPatherException e) {
            e.printStackTrace();
        }catch (IndexOutOfBoundsException es) {
            System.out.println("IndexOutOfBoundsException:entrance");
            es.printStackTrace();
        }
        System.out.println("aaaaaaaaaaaaa-----------asdasfdsgda------------asf");

        System.out.println(url);
        System.out.println(lxr);
        System.out.println(dh);
        System.out.println(sj);
        System.out.println(dz);
        System.out.println(zy);





    }


}
