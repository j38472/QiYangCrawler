package ShiPinJiXieSheBeiWang_foodjx;

import Dao.PoJo;
import Dao.Tool;
import org.htmlcleaner.HtmlCleaner;
import org.htmlcleaner.TagNode;
import org.htmlcleaner.XPatherException;

import java.util.HashMap;

public class Startover {

    static Entrance entrance = new Entrance();

    public static void main(String[] args) {
        //  376

        // 创建 HashMap 对象 fenLeiSites
        HashMap<String, String> fenLeiSites = new HashMap<String, String>();
        // 添加键值对
        fenLeiSites.put("2183", "食品加工机械");
        fenLeiSites.put("3848", "肉类机械设备");
        fenLeiSites.put("2184", "食品通用设备");
        fenLeiSites.put("4303", "商用厨房设备");
        fenLeiSites.put("2182", "食品包装机械");
        fenLeiSites.put("2999", "食品检测仪器");
        fenLeiSites.put("3606", "食品机械配件");
        fenLeiSites.put("3695", "食品及其他配套设备");
        fenLeiSites.put("4428", "食品种植采摘机械");
        fenLeiSites.put("20362", "仪器仪表");
        fenLeiSites.put("3545", "食品及食品原料");
        //地址循环
        String urlChuShi = null;

        Tool tool = new Tool();
        //地区循环
        for (int t = 7; t < 36; t++) {
            //品类循环
            for (String ch : fenLeiSites.keySet()) {
                // 输出 key 和 value
                System.out.println("key: " + ch + " value: " + fenLeiSites.get(ch));
                //经营模式  经营模式
                for (int tid = 0; tid < 6; tid++) {
                        if (tid != 4) {
                            //详情页 页码
                            for (int k = 1; k < 101; k++) {
                                urlChuShi = "https://www.foodjx.com/company/a_T" + t + "/list_p" + k + "_TID" + tid + "_CH" + ch + "_AN_CP.html";
                                System.out.println("初始列表页链接：：：：：：" + urlChuShi);
                                PoJo poJo = new PoJo();
                                poJo = tool.ClientGetHtmlPage(urlChuShi,"https://www.foodjx.com");
                                String HtmlPage = poJo.getHtml();

                                // 如果有返回值  这是证明本详情页没有数据
                                String xpath = "/html/body/div[13]/div/span";
                                /**
                                 * 使用HtmlCleaner  xpath解析器
                                 */
                                HtmlCleaner hc = new HtmlCleaner();
                                TagNode tn = hc.clean(HtmlPage);

                                Object[] Objects = new Object[0];


                                System.out.println("开始判断页面是否有数据");
                                try {
                                    //判断页面是否有数据   ==null  则说明该页名有数据    !=NULL 则说明该页面没有想要的数据
                                    Objects = tn.evaluateXPath(xpath);
                                    System.out.println(Objects.length);
                                    if (Objects.length == 0) {
                                        entrance.DownLB(HtmlPage);
                                    } else {
                                        break;
                                    }
                                } catch (XPatherException e) {
                                    e.printStackTrace();
                                }
                            }
                        }

                }

            }
        }
    }
}