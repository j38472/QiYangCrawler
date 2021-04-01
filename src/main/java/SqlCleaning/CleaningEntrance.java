package SqlCleaning;

import Dao.MyJDBC;
import Dao.PoJo;
import Dao.Tool;

import java.util.ArrayList;
import java.util.List;

/**
 * 数据库 手机和电话号码的清洗
 */
public class CleaningEntrance {
    public static void main(String[] args) {
        MyJDBC myJDBC = new MyJDBC();
//        Tool tool = new Tool();
                CleaningEntrance cleaningEntrance = new CleaningEntrance();



//
//        String str = "字符串:---->\n" +
//                "联系人：苏经理电话：18917713620更多联系方式>>\n" +
//                "<----中不存在手机,无法截取目标字符串";

//
//        List<PoJo> listPojo = cleaningEntrance.SJDHCleaning();
//        myJDBC.updataSJDH(listPojo);

        cleaningEntrance.isSJDHNull();


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

}
