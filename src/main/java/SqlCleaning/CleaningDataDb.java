package SqlCleaning;

import Dao.MyJDBC;
import Dao.PoJo;
import Dao.MyTool;

import java.util.ArrayList;
import java.util.List;

/**
 * 清洗数据库中的数据
 */
public class CleaningDataDb {

    //主营要包含的 关键字
    final static String[] ZY_YES = {"水产", "海产", "土产", "包子", "凉皮", "罐头", "速冻","腊","酒",
            "咖啡", "调味", "汉堡", "灭菌", "切片", "花生", "咖喱", "添加剂", "膨化", "搅拌","乳","橘","梨",
            "农", "豆", "薯", "果", "菌", "肉", "稻", "食品", "食", "厨", "果蔬", "蔬","切","冰","虾"
            , "猪", "牛", "羊", "鱼", "鸟", "鸡", "蛋", "米", "麦", "酱", "谷", "鸭", "鹅", "兔", "瓜"
            , "饼", "菜", "粮", "餐", "素", "骨", "枣", "栗",  "糖", "奶", "饺", "茄", "麸", "糯",
//过于中性了      "料","醒",面
            //做法
            "炒", "煎", "炸", "炖", "煮", "泡", "煸", "煲", "烘", "蒸", "烤", "炖", "烧", "腌", "熏",
            "汤", "粥",  "渔", "筋", "萝", "姜", "蒜", "葱", "辣", "冰", "浆", "糕", "厨", "盐",
            "糖", "笋", "炉", "榨", "碗", "屠", "吃", "腐", "禽", "畜", "麻", "馍", "馒", "蹄", "饮", "盆", "勺", "筷", "锅", "叉",
            "蜜", "孜", "馅", "丸", "罐", "汁水", "蘸",  "酥", "椒", "茶", "酸", "菇", "厨卫", "锅炉", "灶", "油烟", "燃气"
                ,"枣仁","巴氏","餐桌","水果","乳品","面包","餐具","海参","面粉","面条","面团","面浆"
            ,"餐盘","餐车","肠衣","火腿肠","蔬菜","冰箱","快餐","便当","肉制品","肉类","动物油","植物油","电热炉","电磁炉","碗","碟","盘"
            ,"餐椅","餐盒","压面机","切面机","食品机械","烧烤","厨房","橱柜","酒柜","餐车","油炸","火锅","灶具","焙","炊","坚果","西餐","中餐"
            ,"冷库","冷藏","保鲜","粉条","粉皮","增稠","甜味","防腐","营养","酸味","鲜奶","蜂蜜","布丁","液体","苏打","碱","点餐"
            ,"餐饮","餐厅","冷冻","冷柜","蛋类","蛋黄","蛋清","剥皮","蒸笼","馒头","送餐","水饺","饺子","混沌","餐垫","纸碗","塑料碗"
            ,"炒菜","炒菜机","米线","食堂","零食","食品","芝麻","五谷","杂粮","粗粮","榨油","豆制","豆制品","油渣","滤油","炒料","腐竹"
            ,"爆米花","加料","蛋制品","点菜","滚揉","斩拌","解冻","茶油","茶籽","籽油","籽","食用油","炉头","食用","油锅","锅台","火灶"
            ,"灶台","鲜米","碾米","厨房","油炉","集成灶","烤鱼","拌面","削面","麻花","烤箱","饸饹","和面","洗面","米面","定时锅","面锅"
//            ,"糙面","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
    };
    //公司名字中不能包含的数据
    final static String[] LIST_NAME = {"电子科技",
            "展览", "物业", "文化", "软件", "种业", "秸秆", "动物", "策划","网络科技",
            "生物工程", "美容", "医学", "摄影", "网络", "日用品", "医疗", "木材",  "水站",
            "家政", "时尚", "化妆品", "制药", "信息科技", "量贩", "烟酒", "桶装水", "评估", "书店",
//        这个比较中性    "电器","销售","流水","生物科技","机械","金属","仪器",
            "车辆", "中学", "配件", "认证", "机床", "中药", "锦鲤", "孕安", "进出口", "会展", "酒", "广告", "娱乐"
            , "起重",  "药业", "医药", "兽药", "未来科技", "电缆", "光学"
            , "光电", "航天", "线缆", "泵", "水处理", "电气", "制刷", "生物", "环保", "传感器", "净化工程", "橡塑", "环境",
            "仪表",  "机电", "阀门", "臭氧", "辐射", "照明", "高分子", "注塑",  "桑拿",  "电源", "纺织", "量子"
            ,  "健身", "建材", "船舶", "游乐", "体育",  "消防", "家具", "钻孔", "漆油", "塑胶", "陶瓷", "减震器",
            "木业", "工艺品", "木檀",  "公路", "半导体", "热熔胶",  "保温杯", "节能", "平面设计", "家居", "温室", "设计", "木雕", "声学", "文化传播", "棚业", "新媒体",
            "安防", "旅游",  "模型", "石矿", "汽车",  "矿", "化工", "清洁",  "垂钓", "项链", "手链", "手镯", "项坠", "耳钉", "戒指", "水晶"
            , "古建", "雕刻", "饰品", "珠宝", "首饰", "玩具", "钓鱼", "渔具", "铝业", "吊顶", "充电宝", "复合材料", "游泳", "润滑油", "机油", "切削液", "车窗膜", "车膜", "腻子粉", "涂料", "油漆"
            , "砂浆", "焊机", "门窗", "建筑材料", "装饰", "女装", "男装", "服饰", "教育", "管件", "管材", "密封", "墙衣", "砖瓦", "香水", "电影", "日用百货", "袜业"
            , "母婴", "纸尿裤", "云终端", "防爆", "石材", "浮雕", "壁画", "景观", "灯饰", "石业", "工艺制品", "五金", "佛像", "法器", "花卉", "相框", "硼砂", "通风", "电池"
            ,  "化学", "石油", "手袋", "钎具", "车"
            , "纳米", "沥青", "聚合", "聚丙", "钢管", "混凝土", "CPU", "伺服", "电机", "双吸泵", "裤",  "剃须刀", "木屋",  "工程", "厕所", "瓷", "水管", "衣柜", "柜", "钢结构", "GPS"
            , "地板", "栏杆", "施工", "铁路", "结构胶", "修补", "条码", "打印机", "扫码", "石笼", "喷码", "合金", "药典", "洗头", "按摩", "美甲", "资料柜"
            , "汗蒸", "牛皮纸", "包装纸", "纸业", "石墨",  "脚垫", "口罩",  "城堡", "气模", "井盖", "孵化", "承板", "触摸屏", "显微镜", "钢琴"
            ,"钢板","螺杆","扣件","钢筋","套筒","岩棉","钻","数控","墙体","胶泥","凡士林","宝石","陶粒","托盘","声波","尿素"
            ,"打捆","美缝剂","河砂","海砂","彩砂","压机","路障","童装","电子商务","球场","防护","绝缘","仪式","链条","清障","岗亭","治安"
            ,"牛仔裤","T恤","卫衣","凉鞋","鞋","布鞋","隔音","吸声","T桖","裙子","背心","庆典","金蛋","白坯","服装"
            ,"热缩","选矿","破碎","钢模","纤维板","面料","篮球架","滑梯","水泥","导航","镭雕","耳机","线材","公交","磁","手套","塑料"
            ,"荧光","烤漆","青石","升旗","搬家","螺母","螺栓","螺钉","紧固件","疏通","管道","雨伞","物流","运输","屏风","尼龙","泳池"
            ,"防水","卫浴","热力","窗","网带","煤矿","电路","渗透","风批","粘合剂","激光","试剂","试验","检测","假发","假","文胸"
            ,"塔钟","秤","海绵","干燥剂","阻尼","缓冲","闸","物联","三辊","轴承","复印","衬衫","冲锋","加油站","扫帚","拖把","绘本"
            ,"标签","地磅","礼品","切割","珍珠","房产","钮扣","燃料","制衣","焊接","焊锡","焊条","益智","婴幼","宠物"
            ,"冲压","墙壁","节油","培训","咨询","离心","车间","动力","净化","废水","皮带","重工","UV","纸盒","大气","静电","滤芯"
            ,"污水","遮阳","环卫","吸污车","垃圾车","清洗车","科技","护栏","控制","电容","钢化","粪池","帐篷","篷布","升降","扑克"
            ,"卡片","印刷","丝印","刮刮卡","刮刮","胶","屏幕","推土","挖掘","保温","麦拉","隔电","泡棉","贴纸","洒水车","岗","牛仔"
            ,"毛衣","木方","方木","年装","日用","风幕","交通","荷花","商务","商行","阿迪","耐克","头盔","桥架","抗震","房屋","毛绒"
            ,"雕塑","搅拌机","饲料","调节剂","树脂","百货","培养箱","液氮罐","天平","绒布","网布","棉布","布","水磨","地坪","抛光","石英粉"
            ,"纤维","换热","岩","材料","线板","新型材料","加盟","手机","保护","方管","异型管","砂机","涤洗","洗涤","洗衣","钥匙"
            ,"配饰","装修","瓷砖","盐酸","纸箱","纸盒","卡包","卡套","风机","软管","风管","法兰","复合","净化","保温","防火","节能"
            ,"变频","汗蒸","汗蒸","钢丝","化妆","教学","电解","鱼缸","水族箱","景观","施工","分析","探测","救生","珍宝","特种"
            ,"金属加工","花舍","红木","狗粮","猫粮","石板","办公","展厅","绿植","花草","花木"//,"","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""
//            ,"","","","","","","","","","","","","","","","",""

    };

    public static void main(String[] args) {
        CleaningDataDb cleaningDataDb = new CleaningDataDb();
/**
 * 用于判断  ZY_YES 是不是包含 str
 */
//        String str = "酸";
//
//        for (String str :
//                ZY_YES) {
//            int c = 0;
//            for (int i = 0; i < ZY_YES.length; i++) {
//
//                if (LIST_NAME[i].equals(str)) {
//                    c++;
//                    if (c >=2){
//                        System.out.println("已经有的数据：：   " + LIST_NAME[i]);
//                    }
//                } else {
////                System.out.println("没有啊！");
//                }
//            }
//        }
/**
 * 用于判断  LIST_NAME 是不是包含 str
 *
 */
//
//        for (String str :
//                LIST_NAME) {
//            int c = 0;
//            for (int i = 0; i < LIST_NAME.length; i++) {
//
//                if (LIST_NAME[i].equals(str)) {
//                    c++;
//                    if (c >=2){
//                        System.out.println("已经有的数据：：   " + LIST_NAME[i]);
//                    }
//                } else {
////                System.out.println("没有啊！");
//                }
//            }
//        }


//        cleaningEntrance.isSJDHNull();


        /**
         *需要清洗的 数据表名
         */
        List<String> dataDbList = new ArrayList();
//        dataDbList.add("");
//        dataDbList.add("");
//        dataDbList.add("");
        dataDbList.add("zgny_data");
        for (String dataDb :
                dataDbList) {
            //先清洗手机号  再进行主营 和公司名字  判断是不是食品行业的公司
            /**
             * 应该再加上一个判断   有时候 手机号会在 电话的字段里面   电话 会在手机的字段里面
             */
            cleaningDataDb.SJDHCleaning(dataDb);
            System.out.println("SJDHCleaning结束");
            /**
             * 清洗不是食品行业的  数据
             *
             * 有主营数据  就根据主营来判断  没有的话  就依据 名字  根据名字来清洗数据的误杀率比较高
             * 先根据名字筛选一遍
             * 筛选出的数据  判断主营业务是不是和食品有关
             */
//            cleaningDataDb.del_name_zy(dataDb);
//            System.out.println("del_name_zy 结束");

            cleaningDataDb.isSJDHNull(dataDb);
            System.out.println("isSJDHNull 结束");

//            cleaningDataDb.del_V_Null(dataDb);
//            System.out.println("del_V_Null 结束");
        }


    }

    /**
     * 首先取出手机号码和电话号
     * 手机号和电话号码 中  可能会有标签  需要先进行清洗
     * 当只剩下号码 之后  在进行匹配
     */

    public void SJDHCleaning(String dataDb) {
        MyJDBC myJDBC = new MyJDBC();
        List<PoJo> listPojo = new ArrayList<PoJo>();
        listPojo = myJDBC.SelectIdSjDh(dataDb);
        MyTool myTool = new MyTool();
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


//            System.out.println("截取之前的dh" + dh);
//            System.out.println("截取之前的sj" + sj);
            dh = myTool.MyTrim(dh);
            sj = myTool.MyTrim(sj);
//            System.out.println("清洗之后的电话号" + dh);
//            System.out.println("清洗之后的shouji号" + sj);
            if(dh.indexOf("-")<0&& dh.length()>10){
                StringBuffer stringBuilder1=new StringBuffer(dh);
                stringBuilder1.insert(4,"-");
                dh = stringBuilder1.toString();
            }

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
            String cheSj = null;
            String cheDh = null;


            //如果手机号码在匹配手机字段 没有匹配出数据  直接用手机号匹配电话号  以手机号为重
            cheSj = myTool.checkCellphone(sj);
            if (cheSj == null || cheSj.length() < 10) {
                cheSj = myTool.checkCellphone(dh);
            }

            cheDh = myTool.checkTelephone(dh);

            System.out.println("Re之后的电话::::::" + cheDh);
            System.out.println("Re之后的手机::::::" + cheSj);
            //修改实体集合中的数据
            listPojo.get(i).setDH(cheDh);
            listPojo.get(i).setSj(cheSj);
        }

        myJDBC.updataSJDH(listPojo, dataDb);


    }

    /**
     * 删除掉表中  根据公司名字判断公司是不是食品相关的
     * 将清洗出的数据存入 根据名字删除的数据  表中
     */
    public void del_name_zy(String dataDb) {

        /**
         * 取出所有的ID　和　　公司名字
         * 循环判断
         * 分支　－－
         *          删除　　存入　清洗出的数据表
         *
         */
        MyJDBC myJDBC = new MyJDBC();
        List<PoJo> poJoArrayList = myJDBC.getSelectDb(dataDb);
        int cote = 0;
        for (PoJo poJo : poJoArrayList) {
            //            权重系数
            int QZ = 0;
            String name = poJo.getName();
            String zy = poJo.getZY();
            int id = poJo.getID();
//            for (int i = 0; i < ZY_YES.length; i++) {
//                String yes = ZY_YES[i];
//                //如果大于-1  则代表包含必要关键字 同时停止该循环
//                if (zy.indexOf(yes) > -1) {
//                    boo = false;
//                    System.out.println("主营中存在必要关键字，不依据主营清洗该数据！！");
//                    break;
//                }
//            }


            //考虑到  可能主营 数据缺失  在主营中不包含必要关键字的情况下  再次判断公司名字一次
            for (String del_name : LIST_NAME) {
                //如果小于 0  则代表  公司名字中存在 不该有的关键字
                if (name.indexOf(del_name) > -1 ) {
                    QZ--;
                }
                if ( zy.indexOf(del_name) > -1){
                    QZ--;
                }
            }

            //考虑到  可能主营 数据缺失  在主营中不包含必要关键字的情况下  再次判断公司名字一次
            for (String B_name : ZY_YES) {
                if (name.indexOf(B_name) > -1 ) {
                    QZ +=1.5;
                }
                if ( zy.indexOf(B_name) > -1){
                    QZ +=1.5;

                }
            }
//            if (boo) {
//                //如果是个体户就不清楚该数据
//                if (name.indexOf("个体户") > -1) {
//                    boo = false;
//                }
//            }

            //判断手机号和电话号是不是都存在
//            String sj = poJo.getSj();
//            String dh = poJo.getDH();

//            //只要有一个手机号 或者电话号 存在  我就不删除数据
//            if (sj.length() > 11 || dh.length() > 8) {
//                boo = false;
//            }
            boolean boo = true;

            if (QZ <= 0) {
                boo = true;
            } else {
                boo = false;
            }
            if (boo) {
                System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>系数为  " + QZ + ">>>>>>" + id + "  " + poJo.getName() + "  " + poJo.getZY());
                System.out.println("------------------------------------------------");
                myJDBC.deleteID(id, dataDb);

//                myJDBC.updataUniquelyIdentifies(id, "1", dataDb);
//                myJDBC.addData(poJo, "cn_china_cn_jieguo");
                cote++;
            }


        }
        System.out.println("本次一共 " + cote + "条数据！！！！");


    }

    /**
     * 将数据库中数值为null值得数据改为 空
     */
    public void del_V_Null(String dataDb) {
        MyJDBC myJDBC = new MyJDBC();
        List<PoJo> poJoArrayList = myJDBC.getSelectDb(dataDb);
        boolean boo = false;
        for (PoJo pojo :
                poJoArrayList) {
            if (pojo.getName().equals("null")) {
                pojo.setName("");
                boo = true;
            }
            if (pojo.getZY().equals("null")) {
                pojo.setZY("");
                boo = true;

            }
            if (pojo.getSj().equals("null")) {
                pojo.setSj("");
                boo = true;

            }
            if (pojo.getLXR().equals("null")) {
                pojo.setLXR("");
                boo = true;

            }
            if (pojo.getDZ().equals("null")) {
                pojo.setDZ("");
                boo = true;

            }
            if (pojo.getDH().equals("null")) {
                pojo.setDH("");
                boo = true;
            }

            if (boo) {
                myJDBC.upDate(pojo, dataDb);
                boo = false;
            }

        }
    }

    /**
     * 判断是手机号和电话号是不是都是空的
     *
     * @return
     */
    public void isSJDHNull(String dataDb) {
        MyJDBC myJDBC = new MyJDBC();
        List<PoJo> listPojo = myJDBC.getSelectDb(dataDb);

        String dh = null;
        String sj = null;
        int id = 0;
        int cotn = 0;
        boolean boo = false;
        for (PoJo poJo : listPojo) {
            //获取数据
            dh = poJo.getDH();
            sj = poJo.getSj();
            id = poJo.getID();

            if (dh.length() < 8 && sj.length() < 10) {
                boo = true;
            }
            if (boo) {
                myJDBC.deleteID(id, dataDb);
                myJDBC.addData(poJo, "cleaning");
                cotn++;
                boo = false;
            }

        }
        System.out.println("isSJDHNull 删除了" + cotn + "条数据");

    }


}
