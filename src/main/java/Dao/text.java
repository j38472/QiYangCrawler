package Dao;

import org.junit.Test;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class text {
    public static void main(String[] args) {
        String strJG = "电话：886-0551-63368968";
        String stri = "3";

        strJG = strJG.replaceAll("86-","");
        System.out.println(strJG);
//        System.out.println(str.indexOf(stri));

//        MyTool myTool = new MyTool();
//        System.out.println(myTool.checkTelephone(str));


//        MyJDBC myJDBC = new MyJDBC();
//        myJDBC.getSelectDb()

    }


    /**
     * 用于处理 &#xf683; 或者  &#60; 将其转换成 中文
     * 这是一中
     */
    @Test
    public void NCR(){
        // 定义正则表达式来搜索中文字符的转义符号
        String s = "&#x.*?;";
        Pattern compile = Pattern.compile(s);
        // 测试用中文字符
        String sourceString = "&#xf561;";
        Matcher matcher = compile.matcher(sourceString);
        // 循环搜索 并转换 替换
        while (matcher.find()) {
            String group = matcher.group();
            System.out.println(group);
            // 获得16进制的码
            String hexcode = "0" + group.replaceAll("(&#|;)", "");
            System.out.println(hexcode);
            // 字符串形式的16进制码转成int并转成char 并替换到源串中
            sourceString = sourceString.replaceAll(group, (char) Integer.decode(hexcode).intValue() + "");
        }
        System.out.println(sourceString);
    }




}
