package clean_china;


import Dao.MyJDBC;
import Dao.PoJo;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author cyh
 * @version 1.0
 * @date 2021/5/8 16:36
 * 用于清洗 cn_china_cn 数据库表
 */
public class stare {
    public static void main(String[] args) {
        String str = "0752-7988852-13719288228";
        String pattern = "^[0-9]{3,4}-[0-9]{7,8}$";

        Pattern r = Pattern.compile(pattern);
        Matcher m = r.matcher(str);
        System.out.println(m.matches());
        String s= m.group();
        System.out.println(s);


//        MyJDBC myJDBC = new MyJDBC();
//        List<PoJo> poJoList =  myJDBC.getSelectDb("cn_china_cn");
//        System.out.println(poJoList.size());


    }


}
