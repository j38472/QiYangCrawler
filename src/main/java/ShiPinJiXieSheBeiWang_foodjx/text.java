package ShiPinJiXieSheBeiWang_foodjx;


import Dao.Tool;

public class text {
    static Entrance entrance = new Entrance();

    public static void main(String[] args) {
//        entrance.DownLB("https://www.foodjx.com/company/a_T34/list_p1_TID0_CH2999_AN_CP.html");

//        entrance.getXQ("https://www.foodjx.com/st202643/","1");

//        entrance.yeMaXh("https://www.foodjx.com/company/a_T35/list_p1_TID5_CH4428_AN_CP.html");

//        demo();


        Tool tool = new Tool();


        System.out.println(tool.ClientGetHtmlPage("https://www.foodjx.com/st216650/","https://www.foodjx.com").getHtml());

//       String s=  tool.setP(2,"https://www.foodjx.com/company/a_T35/list_p1_TID5_CH3606_AN_CP.html");
//        System.out.println(s);


    }

    public static void demo(String url) {
        System.out.println("初始列表页链接：：：：：：" + url);


//        int y = 0;
//        for (int i = 0; i < 100; i++) {
//            System.out.println(i+"           "+y++);
//            if (y==10){
//
//                break;
//            }
//        }
    }
}
