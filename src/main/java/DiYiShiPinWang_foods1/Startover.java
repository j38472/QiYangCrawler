package DiYiShiPinWang_foods1;

import Dao.MyTool;

public class Startover {

    static Entrance entrance = new Entrance();
    static Startover startover = new Startover();
    static MyTool myTool = new MyTool();
    public static void main(String[] args) {
//        startover.EntranceDownLB();
//        System.out.println(tool.removeLineBreak(""));
//tool.DzZz("公司名称：成都市伟利过滤设备厂 　联系人：孙智伟 详细地址：四川省 成都 四川省成都市火车南站中国酒城(锦绣家园装饰城)B1区一楼二楼110-112号三楼109-116号 电子邮件：wlglsb@wlglsb.com 公司电话：028-85184125 　　传真：028-85182274 　　手机：13808067328 　　邮编：610041 ");
        entrance.getXQUrl("http://www.foods1.com/company?page=2500");

    }


    /**
     *   一共6705页
     *   http://www.foods1.com/company?page=
     *
     *
     *   http://www.foods1.com/
     *   /company/88039
     *   /index
     */
    public void EntranceDownLB() {
        for (int i = 1435; i < 2067; i++) {
//            entrance.DownLB("http://www.spsb114.com/company/company_list.php?gopage="+i);

        }


//        entrance.XqDz("http://1147067.cn.spsb114.com");


    }
}
