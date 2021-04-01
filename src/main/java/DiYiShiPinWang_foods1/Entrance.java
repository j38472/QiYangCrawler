package DiYiShiPinWang_foods1;

import Dao.MyJDBC;
import Dao.PoJo;
import Dao.Tool;
import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.htmlcleaner.HtmlCleaner;
import org.htmlcleaner.TagNode;
import org.htmlcleaner.XPatherException;


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

    /**
     * 根据列表页URl获取到详情页的URL
     *
     * @param url 列表页URL
     */
    public void getXQUrl(String url) {
        PoJo poJo = new PoJo();
        poJo = tool.GetHtmlPage(url);
        String htmlPage = poJo.getHtml();
        //下面两个需要和获取到的url进行拼接
        String chuShiUrl = "http://www.foods1.com/";
        String JieWeiUrl = "/index";
        String sapthUrl = "//div[@class='nr_k']/div[@class='qg_bt']/div[@class='bt_zi']/a/@href";
        Object[] urlObjects = new Object[0]; //


        /**
         * 使用HtmlCleaner  xpath解析器
         */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(htmlPage);


        try {
            urlObjects = tn.evaluateXPath(sapthUrl);
            for (int i = 0; i < urlObjects.length; i++) {
                System.out.println(chuShiUrl + urlObjects[i] + JieWeiUrl);
            }
        } catch (XPatherException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取详情页的详细数据
     * @param url 详情页URl
     */
    public void getXQ(String url) {
        PoJo poJo =tool.GetHtmlPage(url);
        String htmlPage = poJo.getHtml();

        /**
         * 使用HtmlCleaner  xpath解析器
         */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(htmlPage);





        String dataXpath = "//div[3]/div[2]/ul/li";
        String zyXpath = "//div[@class='main_a']/div[@class='nr']";
        Object[] dataObjects = new Object[0]; //
        Object[] zyObjects = new Object[0]; //

        for (int i = 0; i < dataObjects.length; i++) {

        }
        for (int i = 0; i < zyObjects.length; i++) {

        }




    }


}
