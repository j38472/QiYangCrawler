package Dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
用来处理数据库的信息
 */
public class MyJDBC {
    // MySQL 8.0 以下版本 - JDBC 驱动名及数据库 URL
    // 加载数据库驱动  com.mysql.jdbc.Driver
    static String JDBC_DRIVER = "com.mysql.jdbc.Driver";


    // 数据库的用户名与密码，需要根据自己的设置
    static final String USER = "root";
    static final String PASS = "root";

    Connection conn = null;
    Statement stmt = null;
    ResultSet rs = null;

    public MyJDBC() {
        // 获取mysql连接地址
        String DB_URL = "jdbc:mysql://localhost:3306/qiyangdata?serverTimezone=GMT&useSSL=false";

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
    public void GB() {
        // 完成后关闭
        System.out.println("关闭数据链接-----------------------");

        try {
            if (rs != null) {
                rs.close();
            }
            if (stmt != null) {
                stmt.close();
            }
            if (conn != null) {
                conn.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
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

    public void addName(String name, String url) {
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
     * 查询数据库的 ID 手机号 电话号  存入实体  并返回
     *
     * @return 包含 ID 手机号 电话 的实体
     */
    public List<PoJo> SelectIdSjDh() {


        List<PoJo> list = new ArrayList();// 定义一个list，用来存放数据

        /**
         * sql语句
         */
        String selectSql = "SELECT id,DH,Sj FROM `zhongghoushipinwang_pooioo`;";
        try {
            PreparedStatement state = conn.prepareCall(selectSql);//通过PreparedStatement执行查询语句
            ResultSet rs = state.executeQuery();//将数据写入到ResultSet中

            while (rs.next()) {
                int id = rs.getInt("id");
                String dh = rs.getString("DH");
                String sj = rs.getString("SJ");
                PoJo poJo = new PoJo();
                poJo.setID(id);
                poJo.setSj(sj);
                poJo.setDH(dh);
                list.add(poJo);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }


        return list;

    }


    /**
     * 根据id  修改数据库中的手机号和电话号
     * @param poJoList  pojo实体集合
     */
    public void updataSJDH(List<PoJo> poJoList){
        for (int i = 0; i < poJoList.size(); i++) {
            String InsertSql = "UPDATE zhongghoushipinwang_pooioo SET DH='"+poJoList.get(i).getDH()+"',Sj='"+poJoList.get(i).getSj()+"' WHERE id="+poJoList.get(i).getID()+";";
            System.out.println(InsertSql);
            try {
                stmt.executeUpdate(InsertSql);
            } catch (SQLException e) {
                e.printStackTrace();
            }

        }


    }


    /**
     * 根据id 删除指定数据
     * @param id
     */
    public void deleteID(int id){
        String strSql = "DELETE FROM zhongghoushipinwang_pooioo WHERE id="+id+";";
        System.out.println(strSql);
        try {
            stmt.executeUpdate(strSql);
        } catch (SQLException e) {
            System.out.println("数据库删除id异常！！！");
            e.printStackTrace();
        }
    }

}



