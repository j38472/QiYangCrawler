package Dao;

public class text {
    public static void main(String[] args) {

        String InsertSqlFormat = "INSERT INTO chushi_copy2 (Name,Url,Zy,LXR,DH,SJ,DZ)VALUES('%s','%s','%s','%s','%s','%s','%s');";
        String xpath = String.format(InsertSqlFormat,"nameaaaa","URlaaa","Zyaaa","LXaaaR","DHaa","SJaaa","aaa");
        System.out.println(xpath);

//        Tool tool = new Tool();
//        String str = "字符串:---->\n" +
//                "联系人：陈玉凤电话：020-32585820更多联系方式>>\n" +
//                "<----中不存在手机,无法截取目标字符串";
//        System.out.println( tool.checkCellphone(str));
//
//
//        MyJDBC myJDBC = new MyJDBC();
//        myJDBC.SelectIdSjDh();
    }
}
