package SqlCleaning;

import Dao.MyJDBC;
import Dao.MyTool;
import Dao.PoJo;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

public class CleaningRepeatData {
    MyJDBC myJDBC = new MyJDBC();
    MyTool myTool = new MyTool();

    public static void main(String[] args) {

//        先清洗一遍search_copy1 自身
//        new CleaningRepeatData().repeatUrl("search_copy1");
//        在用search_copy1 对search 查询去重
//        new CleaningRepeatData().qxSearchAndSearch_copy1();
//        new CleaningRepeatData().repeatDataUrl("cn_china_cn");
//        new CleaningRepeatData().cs();

        String dataDb = "zgny_data";
        new CleaningRepeatData().qxNameZy(dataDb);
    }

    public void cs() {

        HashSet<String> hashSet = new HashSet<String>();
        List<PoJo> poJoListSearch = myJDBC.getSelectDb("cn_china_cn");
        System.out.println(poJoListSearch.size());
        for (PoJo pojo :
                poJoListSearch) {
            hashSet.add(pojo.getUrl());
        }
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        System.out.println(df.format(new Date()));// new Date()为获取当前系统时间
        System.out.println(hashSet.size());
    }

    public void qxSearchAndSearch_copy1() {
        int cont = 0;
        List<PoJo> poJoListSearch = myJDBC.getSearch("search");
        List<PoJo> poJoListSearch_copy1 = myJDBC.getSearch("search_copy1");
        System.out.println(poJoListSearch.size());
        System.out.println(poJoListSearch_copy1.size());
//        i 是ID 前面的已经经过去重的就不要再去重复性操作了
        for (int i = 44394; i < poJoListSearch_copy1.size(); i++) {
            String urlSearch_copy1 = poJoListSearch_copy1.get(i).getUrl();

            for (int j = i + 1; j < poJoListSearch.size(); j++) {
                String urlSearch = poJoListSearch.get(j).getUrl();

                if (urlSearch_copy1 != null && urlSearch != null && urlSearch.equals(urlSearch_copy1)) {
                    System.out.println("下面为重复的数据：");
                    System.out.println("poJoListSearch_copy1  getID()::" + poJoListSearch_copy1.get(i).getID());
                    System.out.println("poJoListSearch   getID()::" + poJoListSearch.get(j).getID());
                    System.out.println("poJoListSearch_copy1    getUrl()::" + poJoListSearch_copy1.get(i).getUrl());
                    System.out.println("poJoListSearch    getUrl()::" + poJoListSearch.get(j).getUrl());
                    myJDBC.deleteID(poJoListSearch_copy1.get(i).getID(), "search_copy1");
                    cont++;

                }
            }
//            if (i)
        }
        System.out.println("一共清除重复数据" + cont + "条！！！！！！！！！！！");

    }

    /**
     * 根据url 清楚重复数据
     * 现在以数量为重  暂时不清理
     *
     * @param dataDb 需要清洗的数据库 表明名字
     */
    public void repeatUrl(String dataDb) {
        int cont = 0;
        List<PoJo> poJoList = myJDBC.getSearch(dataDb);
        System.out.println(poJoList.size());
        //第一层循环 取出去查重的数据
        for (int i = 0; i < poJoList.size(); i++) {
            /**
             * 取出需要查重的关键字段
             */
            String repeati = poJoList.get(i).getUrl();
            //第二层循环去查找是不是有重复的数据
            for (int j = i + 1; j < poJoList.size(); j++) {
                String repeatj = poJoList.get(j).getUrl();
                //如果 包含需要查重的关键字段 则删除该条数据
                if (repeati != null && repeatj != null && repeatj.equals(repeati)) {
                    //删除
                    System.out.println("下面为重复的数据：");
                    System.out.println("poJoList.get(i).getID()::" + poJoList.get(i).getID());
                    System.out.println("poJoList.get(j).getID()::" + poJoList.get(j).getID());
                    System.out.println("poJoList.get(i).getUrl()::" + poJoList.get(i).getUrl());
                    System.out.println("poJoList.get(j).getUrl()::" + poJoList.get(j).getUrl());
                    myJDBC.deleteID(poJoList.get(j).getID(), dataDb);
                    cont++;
                }
            }

        }


        System.out.println("一共清除重复数据" + cont + "条！！！！！！！！！！！");
    }


    /**
     * 根据url 清楚重复数据
     * 现在以数量为重  暂时不清理
     *
     * @param dataDb 需要清洗的数据库 表明名字
     */
    public void repeatDataUrl(String dataDb) {
        int cont = 0;
        List<PoJo> poJoList = myJDBC.getSelectDb(dataDb);
        //第一层循环 取出去查重的数据
        for (int i = 0; i < poJoList.size(); i++) {
            /**
             * 取出需要查重的关键字段
             */
            String repeati = poJoList.get(i).getUrl();
            //第二层循环去查找是不是有重复的数据
            for (int j = i + 1; j < poJoList.size(); j++) {
                String repeatj = poJoList.get(j).getUrl();
                //如果 包含需要查重的关键字段 则删除该条数据
                if (repeati != null && repeatj != null && repeatj.equals(repeati)) {
                    //删除
//                    System.out.println("下面为重复的数据：");
//                    System.out.println("poJoList.get(i).getID()::" + poJoList.get(i).getID());
//                    System.out.println("poJoList.get(j).getID()::" + poJoList.get(j).getID());
//                    System.out.println("poJoList.get(i).getUrl()::" + poJoList.get(i).getUrl());
//                    System.out.println("poJoList.get(j).getUrl()::" + poJoList.get(j).getUrl());
//                    System.out.println("poJoList.get(i).getName()::" + poJoList.get(i).getName());
//                    System.out.println("poJoList.get(j).getName()::" + poJoList.get(j).getName());
                    if (i % 1000 == 0) {
                        System.out.println(i + ":::::" + poJoList.size());
                    }
                    myJDBC.deleteID(poJoList.get(j).getID(), dataDb);
                    poJoList.remove(j);
                    cont++;
                }

            }

        }


        System.out.println("一共清除重复数据" + cont + "条！！！！！！！！！！！");
    }


    public void qxNameZy(String dataDb) {
        List<PoJo> poJoList = myJDBC.getSelectDb(dataDb);
        int id = 0;
        String name = "";
        String zy = "";
        for (PoJo poJo :
                poJoList) {
            id = poJo.getID();
            name = poJo.getName();
            zy = poJo.getZY();
            String[] nameList = name.split("  ");
            if (nameList.length == 2) {
                if (zy.equals("..")) {
                    zy = nameList[1];
                } else {
                    zy = zy + nameList[1];
                }
                name = nameList[0];
            }
            System.out.println(id);
            System.out.println(zy);
            System.out.println(name);
            System.out.println("----------------------------");
            myJDBC.upNameZy(id,name,zy,dataDb);
        }

    }

}
