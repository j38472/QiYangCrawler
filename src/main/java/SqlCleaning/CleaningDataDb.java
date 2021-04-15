package SqlCleaning;

import Dao.MyJDBC;
import Dao.PoJo;
import Dao.Tool;

import java.util.ArrayList;
import java.util.List;

/**
 * 清洗数据库中的数据
 */
public class CleaningDataDb {

    //主营要包含的 关键字
    final static String[] ZY_YES = {"水产", "海产", "土产",
            "灌装", "封尾", "旋盖", "贴标", "包装", "输送", "喷码", "封口", "速冻",
            "咖啡", "脱皮", "脱壳", "调味", "汉堡", "消毒", "清洗", "灭菌", "切片", "花生", "咖喱", "添加剂", "膨化", "搅拌",
            "粉", "农", "葵", "豆", "薯", "果", "菌", "肉", "稻"
            , "猪", "牛", "羊", "鱼", "鸟", "鸡", "蛋", "米", "麦", "酱", "谷", "鸭", "鹅", "兔", "瓜", "食"
            , "饼", "罐头", "菜", "粮", "餐", "素", "骨", "枣", "栗", "面", "糖", "奶", "饺", "茄", "麸", "糯",
            "炒", "煎", "炸", "炖", "煮", "汤", "粥", "料", "腌", "熏", "渔", "烧", "炖", "筋", "萝", "姜", "蒜", "葱", "辣", "烤", "冰", "浆", "糕", "厨", "蒸", "盐",
            "糖", "泡", "煸", "煲"
            , "笋", "炉", "榨", "碗", "屠", "吃", "腐", "禽", "畜", "烘", "麻", "馍", "馒", "蹄", "饮", "盆", "勺", "筷", "锅", "叉", "膜",
            "蜜", "孜", "馅", "丸", "罐", "汁水", "蘸", "醒", "酥"
//                ,"包子","凉皮","油","","","","","","","","","",""
    };
    final static String[] LIST_NAME = {"电子科技", "仪表",
            "展览", "物业", "宠物", "文化", "软件", "种业", "秸秆", "动物", "策划",
            "生物工程", "配件", "美容", "医学", "摄影", "网络", "日用品", "医疗", "木材", "咨询", "水站",
            "家政", "时尚", "化妆品", "制药", "信息科技", "量贩", "烟酒", "印刷", "桶装水", "评估", "书店",
            "车辆", "中学", "配件", "认证", "渔具", "机床", "中药", "电器", "锦鲤", "孕安", "进出口", "会展", "酒", "广告", "娱乐"
            , "起重", "机械", "药业", "医药", "兽药", "未来科技", "电缆"
            , "光电", "航天", "线缆", "泵", "水处理", "电气", "制刷", "生物", "环保", "传感器", "净化工程", "橡塑", "环境",
            "仪表", "仪器", "显微镜", "机电设备", "阀门", "臭氧", "辐射"
//            ,"","","","","",""
    };


    public static void main(String[] args) {
        CleaningDataDb cleaningDataDb = new CleaningDataDb();


        //        MyJDBC myJDBC = new MyJDBC();
//        Tool tool = new Tool();


//
//        String str = "字符串:---->\n" +
//                "联系人：苏经理电话：18917713620更多联系方式>>\n" +
//                "<----中不存在手机,无法截取目标字符串";

//
//        List<PoJo> listPojo = cleaningEntrance.SJDHCleaning();
//        myJDBC.updataSJDH(listPojo);

//        cleaningEntrance.isSJDHNull();


        /**
         * 清洗不是食品行业的  数据
         *
         * 有主营数据  就根据主营来判断  没有的话  就依据 名字  根据名字来清洗数据的误杀率比较高
         * 先根据名字筛选一遍
         * 筛选出的数据  判断主营业务是不是和食品有关
         */
        cleaningDataDb.del_name_zy();


//        String str = "产";

//        jj:
//        for (int i = 0; i < ZY_YES.length; i++) {
//            if (ZY_YES[i].equals(str)) {
//                System.out.println("已经有的数据：：   " + ZY_YES[i]);
//                System.out.println("有了");
//                break jj;
//            } else {
////                System.out.println("没有啊！");
//            }
//        }

    }


    /**
     * 首先取出手机号码和电话号
     * 手机号和电话号码 中  可能会有标签  需要先进行清洗
     * 当只剩下号码 之后  在进行匹配
     */
    public List<PoJo> SJDHCleaning() {
        MyJDBC myJDBC = new MyJDBC();
        List<PoJo> listPojo = new ArrayList<>();
        listPojo = myJDBC.SelectIdSjDh();
        Tool tool = new Tool();
        String dh = null;
        String sj = null;
        for (int i = 0; i < listPojo.size(); i++) {
//            System.out.println("--------------------------------");
//            System.out.println("list.get(i).getID()::::::" + listPojo.get(i).getID());
//            System.out.println("list.get(i).getSj()::::::" + listPojo.get(i).getSj());
//            System.out.println("list.get(i).getDH()::::::" + listPojo.get(i).getDH());

            //获取数据
            dh = listPojo.get(i).getDH();
            sj = listPojo.get(i).getSj();

            System.out.println("截取之前的dh" + dh);


            dh = tool.MyTrim(dh);
            System.out.println("清洗之后的电话号" + dh);
//            //将电话号中的脏数据清洗一下
//            try {
//                if (dh.indexOf("电") != -1) {
//                    dh = tool.subString(dh, "话：", "");
//                    System.out.println("截取之后的dh"+dh);
//                }
//            } catch (NullPointerException e) {
//
//            }


//            System.out.println("清洗前的电话::::::" + dh);
//            System.out.println("清洗前的手机::::::" + sj);
            //清洗数据
            sj = tool.checkCellphone(sj);
            dh = tool.checkTelephone(dh);
            System.out.println("清洗之后的电话::::::" + dh);
            System.out.println("清洗之后的手机::::::" + sj);
            //修改实体集合中的数据
            listPojo.get(i).setDH(dh);
            listPojo.get(i).setSj(sj);

        }
        return listPojo;

    }


    /**
     * 判断是手机号和电话号是不是都是空的
     *
     * @return
     */
    public void isSJDHNull() {
        MyJDBC myJDBC = new MyJDBC();
        List<PoJo> listPojo = new ArrayList<>();
        listPojo = myJDBC.SelectIdSjDh();
        Tool tool = new Tool();
        String dh = null;
        String sj = null;
        int id = 0;
        for (int i = 0; i < listPojo.size(); i++) {
            //获取数据
            dh = listPojo.get(i).getDH();
            sj = listPojo.get(i).getSj();
            id = listPojo.get(i).getID();
            System.out.println(dh);
            if (dh.equals("null") & sj.equals("null")) {
                myJDBC.deleteID(id);
            }

        }

    }


    /**
     * 删除掉表中  根据公司名字判断公司是不是食品相关的
     * 将清洗出的数据存入 根据名字删除的数据  表中
     */
    public void del_name_zy() {

        /**
         * 取出所有的ID　和　　公司名字
         * 循环判断
         * 分支　－－
         *          删除　　存入　清洗出的数据表
         *
         */
        String dataDb = "shipinjixieshebeiwang_foodjx";
        MyJDBC myJDBC = new MyJDBC();
        List<PoJo> poJoArrayList = myJDBC.getSelectDb(dataDb);

        int cote = 0;

        for (PoJo poJo :
                poJoArrayList) {
            //默认 删除当前数据
            boolean boo = true;

            String name = poJo.getName();
            String zy = poJo.getZY();
            int id = poJo.getID();


            for (int i = 0; i < ZY_YES.length; i++) {
                String yes = ZY_YES[i];
                //如果大于-1  则代表包含必要关键字 同时停止该循环
                if (zy.indexOf(yes) > -1) {
                    boo = false;
                    System.out.println("主营中存在必要关键字，不依据主营清洗该数据！！");
                    break;
                }
            }

            //考虑到  可能主营 数据缺失  在主营中不包含必要关键字的情况下  再次判断公司名字一次
            if (boo) {
                for (int j = 0; j < LIST_NAME.length; j++) {
                    String del_name = LIST_NAME[j];
                    //如果小于 0  则代表  公司名字中没有不该有的关键字
                    if (name.indexOf(del_name) > -1) {
                        boo = true;
                        System.out.println("公司名字中不存在必要关键字，不清洗该数据！！");
                        break;
                    } else {
                        boo = false;
                    }
                }
            }


            if (boo) {
                //如果是个体户就不清楚该数据
                if (name.indexOf("个体户") > -1) {
                    boo = false;
                }
            }
            if (boo) {
                //判断手机号和电话号是不是都存在
                String sj = poJo.getSj();
                String dh = poJo.getDH();

                //只要有一个手机号 或者电话号 存在  我就不删除数据
                if (sj.length() > 11 || dh.length() > 8) {
                    boo = false;
                }
            }

            if (boo) {
                myJDBC.deleteID(id, dataDb);
                myJDBC.addData(poJo, "Cleaning");
                cote++;
            }


        }
        System.out.println("本次一共删除 " + cote + "条数据！！！！");


    }


}
