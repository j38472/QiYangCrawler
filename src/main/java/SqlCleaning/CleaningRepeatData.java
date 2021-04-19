package SqlCleaning;

import Dao.MyJDBC;
import Dao.MyTool;
import Dao.PoJo;

import java.util.List;

public class CleaningRepeatData {
    MyJDBC myJDBC = new MyJDBC();
    MyTool myTool = new MyTool();

    public static void main(String[] args) {
        new CleaningRepeatData().repeatDataUrl("shipinjixieshebeiwang_foodjx");

    }


    /**
     * 根据url 清楚重复数据
     * @param dataDb 需要清洗的数据库 表明名字
     */
    public void repeatDataUrl(String dataDb) {
        int cont = 0;
        String pattern = "st[0-9]+";
        List<PoJo> poJoList = myJDBC.getSelectDb(dataDb);
        //第一层循环 取出去查重的数据
        for (int i = 0; i < poJoList.size(); i++) {
            /**
             * 取出需要查重的关键字段
             */
            String repeati = myTool.reStr(pattern, poJoList.get(i).getUrl());
            //第二层循环去查找是不是有重复的数据
            for (int j = i + 1; j < poJoList.size(); j++) {
                String repeatj = myTool.reStr(pattern, poJoList.get(j).getUrl());
                //如果 包含需要查重的关键字段 则删除该条数据
                if (repeati != null && repeatj != null && repeatj.equals(repeati)) {
                    //删除
                    System.out.println("下面为重复的数据：");
                    System.out.println("poJoList.get(i).getID()::" + poJoList.get(i).getID());
                    System.out.println("poJoList.get(j).getID()::" + poJoList.get(j).getID());
                    System.out.println("poJoList.get(i).getUrl()::" + poJoList.get(i).getUrl());
                    System.out.println("poJoList.get(j).getUrl()::" + poJoList.get(j).getUrl());
                    System.out.println("poJoList.get(i).getName()::" + poJoList.get(i).getName());
                    System.out.println("poJoList.get(j).getName()::" + poJoList.get(j).getName());
                    myJDBC.deleteID(poJoList.get(j).getID(), dataDb);
                    cont++;
                }
            }

        }


        System.out.println("一共清除重复数据" + cont + "条！！！！！！！！！！！");
    }


    /**
     * 取出 https://www.foodjx.com/st469 网站的 url 的 关键字段的方法  st469
     *
     * @return
     */
    public String getFoodix() {


        return null;
    }
}
