package shi_pin_huo_ban_wang_foodmate;

import Dao.MyJDBC;
import Dao.PoJo;
import Dao.Tool;
import org.htmlcleaner.HtmlCleaner;
import org.htmlcleaner.TagNode;
import org.htmlcleaner.XPatherException;
import org.junit.Test;

/**
 * 爬虫
 */
public class Entrance {
    Tool tool = new Tool();
    PoJo poJo = new PoJo();
    String referer = "http://company.foodmate.net/";
    MyJDBC myJDBC  = new MyJDBC();

    /**
     * 获取列表页的数据
     */
    public void getListUrl(String LBURL) {
        poJo = tool.ClientGetHtmlPage(LBURL, referer);
//        System.out.println("poJo.getHtml():::::" + poJo.getHtml());

        System.out.println("poJo.getZTCode()::::" + poJo.getZTCode());

        String html = poJo.getHtml();
        int code = poJo.getZTCode();
        /**
         * 使用HtmlCleaner  xpath解析器
         */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(html);

        String listNameXpath = "//table/tbody/tr/td[3]/ul/li[1]/a/strong/text()";
        String listUrlXpath = "//table/tbody/tr/td[3]/ul/li[1]/a/@href";
        String listZyXpath = "//table/tbody/tr/td[3]/ul/li[2]/text()";


        Object[] listNameObject = new Object[20];
        Object[] listUrlObject = new Object[20];
        Object[] listZyObject = new Object[20];

        try {
            listNameObject = tn.evaluateXPath(listNameXpath);
            listUrlObject = tn.evaluateXPath(listUrlXpath);
            listZyObject = tn.evaluateXPath(listZyXpath);

            System.out.println(listNameObject.length);
            System.out.println(listUrlObject.length);
            System.out.println(listZyObject.length);
            for (int i = 0; i <
//                    3
                    listUrlObject.length
                    ; i++) {
                PoJo poJoData = new PoJo();
                poJoData.setName(listNameObject[i].toString());
                poJoData.setUrl(listUrlObject[i].toString());
                poJoData.setZY(listZyObject[i].toString());

                System.out.println(poJoData.getName());
                System.out.println(poJoData.getUrl());
                System.out.println(poJoData.getZY());

                getListData(poJoData);
            }
        } catch (XPatherException e) {
            e.printStackTrace();
        }

        myJDBC.addplannedpeed(LBURL);
    }

    /**
     * 获取详情页数据  的  联系人  电话  手机   地址
     * <p>
     * 每抓取十条数据 就向进度表中存储一个  记录  用于应对停电等  不可抵抗的异常情况
     * <p>
     * 不存在该公司的详情页面 需要加上一个逻辑判断
     * http://sdtianxin.foodmate.net/
     */
//    @Test
    public void getListData(PoJo poJodata) {
        String url = poJodata.getUrl();
        //联系方式的页面 拼接
        poJo = tool.ClientGetHtmlPage(url, referer);
        String html = poJo.getHtml();
        int code = poJo.getZTCode();
        String contact = "contact/";

        //有可能存在邮箱等类似信息  全部取出这个数据 判断
        String dataXpath = "//*[@id='side']/div[6]/ul/li/text()";
        String dataXpath2 = "//div[@class='side_body'][4]/ul/li/text()";
        String dataXpath3 = "//*[@id='side']/div[8]/ul/li/text()";
        // 使用 string 的 format 方法
        String liXpath = "//div[6]/ul/li[%s]/@title";
        String liXpath2 = "//div[8]/ul/li[%s]/@title";
        String liXpath3 = "//div[8]/ul/li[%s]/@title";

        Object[] dataObject = new Object[0];

/**
 * 使用HtmlCleaner  xpath解析器
 */
        HtmlCleaner hc = new HtmlCleaner();
        TagNode tn = hc.clean(html);
        boolean boo = false;//判断当前的规则  是不是正确的
        /**
         * 获取到  电话号  手机号  联系人
         */
        try {
            dataObject = tn.evaluateXPath(dataXpath);

            for (Object obj :
                    dataObject) {
                if (obj.toString().indexOf("联系人：")!=-1){
                    boo = true;
                }
                if (obj.toString().indexOf("电话：")!=-1){
                    boo = true;
                }
                if (obj.toString().indexOf("手机：")!=-1){
                    boo = true;
                }
            }
            //
            if (boo){
                System.out.println("开始执行第一套规则");
                int cote = 1;
                for (Object s :
                        dataObject) {
                    String data = s.toString();
                    /**
                     * 开始获取data中的 电话  手机  联系人
                     */
                    if (data != null) {
                        if (data.indexOf("电话") > -1) {
                            System.out.println(cote);
                            /**
                             * 根据 cote 记载的电话  所在的li 列表的索引
                             * 生成具体的xpath 获取电话号
                             */
                            String xpath = String.format(liXpath, cote);
                            Object[] dhOB = tn.evaluateXPath(xpath);
                            for (Object str :
                                    dhOB) {
                                System.out.println("电话号码：：：：" + str);
                                poJodata.setDH(str.toString());
                            }
                        }
                        if (data.indexOf("手机") > -1) {
                            /**
                             * 根据 cote 记载的电话  所在的li 列表的索引
                             * 生成具体的xpath 获取手机号
                             * 与获取电话号一样的方法
                             */
                            System.out.println(cote);
                            Object[] sjOB = tn.evaluateXPath(String.format(liXpath, cote));
                            for (Object str :
                                    sjOB) {
                                System.out.println("手机shi：：：：" + str);
                                poJodata.setSj(str.toString());
                            }
                        }
                        if (data.indexOf("联系人") > -1) {
                            System.out.println(cote);
                            String lxr = null;
                            /**
                             * 判断冒号是不是中文冒号  还是英文冒号
                             */
                            if (data.indexOf(":") != -1) {
                                lxr = tool.mySplitRTwo(data, ":");
                            }
                            if (data.indexOf("") != -1) {
                                lxr = tool.mySplitRTwo(data, "：");
                            }
                            System.out.println("联系人：：：：" + lxr);
                            poJodata.setLXR(lxr);
                        }
                    }
                    cote++;
                }
            }else {
                dataObject = tn.evaluateXPath(dataXpath2);
                for (Object obj :
                        dataObject) {
                    if (obj.toString().indexOf("联系人：")!=-1){
                        boo = true;
                    }
                    if (obj.toString().indexOf("电话：")!=-1){
                        boo = true;
                    }
                    if (obj.toString().indexOf("手机：")!=-1){
                        boo = true;
                    }
                }

                if (boo){
                    System.out.println("                    //开始第二套规则");
                    int cote = 1;
                    for (Object s :
                            dataObject) {
                        String data = s.toString();
                        /**
                         * 开始获取data中的 电话  手机  联系人
                         */
                        if (data != null) {
                            if (data.indexOf("电话") > -1) {
                                System.out.println(data);
                                System.out.println(cote);
                                /**
                                 * 根据 cote 记载的电话  所在的li 列表的索引
                                 * 生成具体的xpath 获取电话号
                                 */
                                String xpath = String.format(liXpath2, cote);
                                Object[] dhOB = tn.evaluateXPath(xpath);
                                for (Object str :
                                        dhOB) {
                                    System.out.println("电话号码：：：：" + str);
                                    poJodata.setDH(str.toString());
                                }
                            }
                            if (data.indexOf("手机") > -1) {
                                /**
                                 * 根据 cote 记载的电话  所在的li 列表的索引
                                 * 生成具体的xpath 获取手机号
                                 * 与获取电话号一样的方法
                                 */
                                System.out.println(cote);
                                Object[] sjOB = tn.evaluateXPath(String.format(liXpath2, cote));
                                for (Object str :
                                        sjOB) {
                                    System.out.println("手机shi：：：：" + str);
                                    poJodata.setSj(str.toString());
                                }
                            }
                            if (data.indexOf("联系人") > -1) {
                                System.out.println(cote);
                                String lxr = null;
                                /**
                                 * 判断冒号是不是中文冒号  还是英文冒号
                                 */
                                if (data.indexOf(":") != -1) {
                                    lxr = tool.mySplitRTwo(data, ":");
                                }
                                if (data.indexOf("") != -1) {
                                    lxr = tool.mySplitRTwo(data, "：");
                                }
                                System.out.println("联系人：：：：" + lxr);
                                poJodata.setLXR(lxr);
                            }
                        }
                        cote++;
                    }
                }else {
                    // 第三套规则  只有 dataxpath 与第二套不同
                    dataObject = tn.evaluateXPath(dataXpath3);
                    for (Object obj :
                            dataObject) {
                        if (obj.toString().indexOf("联系人：")!=-1){
                            boo = true;
                        }
                        if (obj.toString().indexOf("电话：")!=-1){
                            boo = true;
                        }
                        if (obj.toString().indexOf("手机：")!=-1){
                            boo = true;
                        }
                    }

                    if (boo){
                        System.out.println("开始第三套规则！！！！！！！！！！！！");
                        int cote = 1;
                        for (Object s :
                                dataObject) {
                            String data = s.toString();
                            /**
                             * 开始获取data中的 电话  手机  联系人
                             */
                            if (data != null) {
                                if (data.indexOf("电话") > -1) {
                                    System.out.println(cote);
                                    /**
                                     * 根据 cote 记载的电话  所在的li 列表的索引
                                     * 生成具体的xpath 获取电话号
                                     */
                                    String xpath = String.format(liXpath2, cote);
                                    Object[] dhOB = tn.evaluateXPath(xpath);
                                    for (Object str :
                                            dhOB) {
                                        System.out.println("电话号码：：：：" + str);
                                        poJodata.setDH(str.toString());
                                    }
                                }
                                if (data.indexOf("手机") > -1) {
                                    /**
                                     * 根据 cote 记载的电话  所在的li 列表的索引
                                     * 生成具体的xpath 获取手机号
                                     * 与获取电话号一样的方法
                                     */
                                    System.out.println(cote);
                                    Object[] sjOB = tn.evaluateXPath(String.format(liXpath2, cote));
                                    for (Object str :
                                            sjOB) {
                                        System.out.println("手机shi：：：：" + str);
                                        poJodata.setSj(str.toString());
                                    }
                                }
                                if (data.indexOf("联系人") > -1) {
                                    System.out.println(cote);
                                    String lxr = null;
                                    /**
                                     * 判断冒号是不是中文冒号  还是英文冒号
                                     */
                                    if (data.indexOf(":") != -1) {
                                        lxr = tool.mySplitRTwo(data, ":");
                                    }
                                    if (data.indexOf("") != -1) {
                                        lxr = tool.mySplitRTwo(data, "：");
                                    }
                                    System.out.println("联系人：：：：" + lxr);
                                    poJodata.setLXR(lxr);
                                }


                            }
                            cote++;
                        }
                    }else {
                        System.out.println("第三套规则同样没有取到数据  ，！！！！！！！！！！！！！！！！！！！！！！！！");
                    }


                }



            }

        } catch (XPatherException e) {
            e.printStackTrace();
        }

        /**
         * 获取到地址信息
         */
        String dzXpath = "//*[@id=\"main\"]/div[3]/div/table/tbody/tr[2]/td[2]/text()";


        poJo = tool.ClientGetHtmlPage(url + contact, referer);
        html = poJo.getHtml();
        code = poJo.getZTCode();
        System.out.println(code);
        Object[] dz = new Object[10];
        tn = hc.clean(html);
        String dzStr = "";
        try {
            dz = tn.evaluateXPath(dzXpath);
            for (Object obDz :
                    dz) {
                dzStr += obDz.toString();
                poJodata.setDZ(dzStr);
            }
        } catch (XPatherException e) {
            e.printStackTrace();
        }
        System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
        System.out.println("输出下获取到的全部数据");
        System.out.println(poJodata.getName());
        System.out.println(poJodata.getUrl());
        System.out.println(poJodata.getLXR());
        System.out.println(poJodata.getZY());
        System.out.println(poJodata.getSj());
        System.out.println(poJodata.getDH());
        System.out.println(poJodata.getDZ());
        System.out.println("--------------------------------------------------------------------------------------------------------------------------------");
        myJDBC.addData(poJodata,"shipinhuobanwang_foodmate");
    }


}
