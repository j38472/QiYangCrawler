package Dao;

import java.sql.*;

/*
用来处理数据库的信息
 */
public class MyJDBC {
    // MySQL 8.0 以下版本 - JDBC 驱动名及数据库 URL
    // 加载数据库驱动  com.mysql.jdbc.Driver
    static String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    // 获取mysql连接地址
    static String DB_URL = "jdbc:mysql://localhost:3306/qiyangdata?serverTimezone=GMT&useSSL=false";


    // 数据库的用户名与密码，需要根据自己的设置
    static final String USER = "root";
    static final String PASS = "root";

    Connection conn = null;
    Statement stmt = null;
    ResultSet rs = null;

    public MyJDBC(){
        // 注册 JDBC 驱动
        System.out.println("注册 JDBC 驱动------------------------------");
        try {
            Class.forName(JDBC_DRIVER);
            // 打开链接
            System.out.println("连接数据库------------------------------");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            // 实例化Statement对象
            System.out.println(" 实例化Statement对象------------------------------");
            stmt = conn.createStatement();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    /**
     * 关闭数据库链接
     */
    public void GB(){
        // 完成后关闭
        System.out.println("关闭数据链接-----------------------");

        try {
            if (rs!=null){
                rs.close();
            }
            if (stmt!=null){
                stmt.close();
            }
            if (conn!=null){
                conn.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            // 关闭资源
            try {
                if (stmt != null) stmt.close();
            } catch (SQLException se2) {
            }// 什么都不做
            try {
                if (conn != null) conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }

        }

    }

    public void addName(String name,String url){
        Tool tool = new Tool();
        try {


            System.out.println("正在入库的数据");

            System.out.println("url:: " + tool.MyTrim(url));
            System.out.println("name:: " + tool.MyTrim(name));

            //执行插入 sql
            System.out.println("执行插入 sql------------------------------------");
            String InsertSql = "INSERT INTO ZiYouName (Name,Url)VALUES('" + name + "','" + url + "');";
            System.out.println(InsertSql);
            stmt.executeUpdate(InsertSql);


        }
//        catch (SQLException se) {
//            // 处理 JDBC 错误
//            se.printStackTrace();
//        }
        catch (Exception e) {
            // 处理 Class.forName 错误
            e.printStackTrace();
        }
        System.out.println("addName____________Goodbye!");
    }



    /**
     * @param name
     * @param url
     * @param zy
     * @param lxr
     * @param dh
     * @param sj
     * @param dz
     */
    public void add(String name, String url, String zy, String lxr, String dh, String sj, String dz) {
        Tool tool = new Tool();
        try {


            System.out.println("正在入库的数据");

            System.out.println("url:: " + tool.MyTrim(url));
            System.out.println("name:: " + tool.MyTrim(name));
            System.out.println("zy:: " + tool.MyTrim(zy));
            System.out.println("lxr:: " + tool.MyTrim(lxr));
            System.out.println("dh:: " + tool.MyTrim(dh));
            System.out.println("sj:: " + tool.MyTrim(sj));
            System.out.println("dz:: " + tool.MyTrim(dz));

            //执行插入 sql
            System.out.println("执行插入 sql------------------------------------");
            String InsertSql = "INSERT INTO shipinjixieshebeiwang_foodjx (Name,Url,Zy,LXR,DH,SJ,DZ )VALUES('" + name + "','" + url + "','" + zy + "','" + lxr + "','" + dh + "','" + sj + "','" + dz + "');";
            System.out.println(InsertSql);
            stmt.executeUpdate(InsertSql);


        }
//        catch (SQLException se) {
//            // 处理 JDBC 错误
//            se.printStackTrace();
//        }
        catch (Exception e) {
            // 处理 Class.forName 错误
            e.printStackTrace();
        }
        System.out.println("add_____________Goodbye!");

    }


    /**
     * 创建表结构  需要一个表结构名字
     *
     * @param TablesName 表结构名字
     */
    public void addTables(String TablesName) {
        try {
            // 注册 JDBC 驱动
            System.out.println("注册 JDBC 驱动------------------------------");
            Class.forName(JDBC_DRIVER);
            // 打开链接
            System.out.println("连接数据库------------------------------");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);
            // 实例化Statement对象
            System.out.println(" 实例化Statement对象------------------------------");
            stmt = conn.createStatement();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            System.out.println("连接数据库-----------------出错了-------------出错了");
            System.out.println(" 实例化Statement对象---------------出错了---------------出错了");
            e.printStackTrace();
        }

    }

}



