package Dao;



import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
                if (stmt != null) {
                    stmt.close();
                }
            } catch (SQLException se2) {
            }// 什么都不做
            try {
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException se) {
                se.printStackTrace();
            }

        }

    }

    /**
     * 由于网站数据全 只存入公司名字和详情页的URL
     *
     * @param name
     * @param url
     */
    public void addName(String name, String url) {
        MyTool myTool = new MyTool();
        try {
            System.out.println("开始直插入名字");

//            System.out.println("url:: " + tool.MyTrim(url));
//            System.out.println("name:: " + tool.MyTrim(name));
            //执行插入 sql
            System.out.println("执行插入 sql------------------------------------");
            String InsertSql = "INSERT INTO ZiYouName (Name,Url)VALUES('%s','%s');";
            InsertSql = String.format(InsertSql, name, url);
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
        } finally {
            System.out.println("addName方法____________Goodbye!");
        }
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
    public void addData(String name, String url, String zy, String lxr, String dh, String sj, String dz) {
        MyTool myTool = new MyTool();
        try {
            System.out.println("正在入库的数据");
            //消除各种意义上的空格  和 ；
            System.out.println("url:: " + myTool.MyTrim(url));
            System.out.println("name:: " + myTool.MyTrim(name));
            System.out.println("zy:: " + myTool.MyTrim(zy));
            System.out.println("lxr:: " + myTool.MyTrim(lxr));
            System.out.println("dh:: " + myTool.MyTrim(dh));
            System.out.println("sj:: " + myTool.MyTrim(sj));
            System.out.println("dz:: " + myTool.MyTrim(dz));
            //执行插入 sql
            System.out.println("执行插入 sql------------------------------------");
            String InsertSqlFormat = "INSERT INTO chushi_copy2 (Name,Url,Zy,LXR,DH,SJ,DZ)VALUES('%s','%s','%s','%s','%s','%s','%s');";
            String InsertSql = String.format(InsertSqlFormat, name, url, zy, lxr, dh, sj, dz);
            System.out.println(InsertSql);
            stmt.executeUpdate(InsertSql);
        } catch (Exception e) {
            // 处理 Class.forName 错误
            e.printStackTrace();
        }
        System.out.println("addData_____________Goodbye!");

    }

    /**
     * 将传输来的实体类中的数据存入dataBb表中
     *
     * @param poJo   实体数据
     * @param dataDb 表名
     */
    public void addData(PoJo poJo, String dataDb) {
        try {
            System.out.println("正在入库的数据");
            //执行插入 sql
            System.out.println("执行插入 sql------------------------------------");
            String InsertSqlFormat = "INSERT INTO " + dataDb + " (Name,Url,Zy,LXR,DH,SJ,DZ)VALUES('%s','%s','%s','%s','%s','%s','%s');";
            String name = "";
            String zy = "";
            String lxr = "";
            String dh = "";
            String sj = "";
            String dz = "";
            if (!poJo.getName().equals("null")){
                name = poJo.getName();
            }
            if (!poJo.getZY().equals("null")){
                zy = poJo.getZY();
            }
            if (!poJo.getLXR().equals("null")){
                lxr = poJo.getLXR();
            }
            if (!poJo.getDH().equals("null")){
                dh = poJo.getDH();
            }
            if (!poJo.getSj().equals("null")){
                sj = poJo.getSj();
            }
            if (!poJo.getDZ().equals("null")){
                dz = poJo.getDZ();
            }


            String InsertSql = String.format(InsertSqlFormat, name, poJo.getUrl(), zy, lxr, dh, sj, dz);
            System.out.println("sql语句为：：：：：：：" + InsertSql);
            stmt.executeUpdate(InsertSql);
        } catch (Exception e) {
            // 处理 Class.forName 错误
            e.printStackTrace();
        }
        System.out.println("addData_____________Goodbye!");

    }

    /**
     * 根据id  修改数据库中的手机号和电话号
     *
     * @param poJoList pojo实体集合
     */
    public void updataSJDH(List<PoJo> poJoList) {
        for (int i = 0; i < poJoList.size(); i++) {
            String InsertSql = "UPDATE zhongghoushipinwang_pooioo SET DH='" + poJoList.get(i).getDH() + "',Sj='" + poJoList.get(i).getSj() + "' WHERE id=" + poJoList.get(i).getID() + ";";
            System.out.println(InsertSql);
            try {
                stmt.executeUpdate(InsertSql);
            } catch (SQLException e) {
                e.printStackTrace();
            }

        }
    }

    /**
     * 根据id  修改数据库中的手机号和电话号
     *
     * @param poJoList pojo实体集合
     */
    public void updataSJDH(List<PoJo> poJoList, String dataDb) {

        for (int i = 0; i < poJoList.size(); i++) {
            String InsertSql = "UPDATE %s SET DH='%s',Sj='%s' WHERE id=%s;";
            String dh = "";
            String sj = "";
            String pojoDh = poJoList.get(i).getDH();
            String pojosj = poJoList.get(i).getSj();
            if (pojoDh!=null) {
                dh = poJoList.get(i).getDH();
            }
            if (pojosj!=null) {
                sj = poJoList.get(i).getSj();
            }
            InsertSql = String.format(InsertSql, dataDb, dh, sj, poJoList.get(i).getID());
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
     *
     * @param id
     */
    public void deleteID(int id) {
        String strSql = "DELETE FROM zhongghoushipinwang_pooioo WHERE id=" + id + ";";
        System.out.println(strSql);
        try {
            stmt.executeUpdate(strSql);
        } catch (SQLException e) {
            System.out.println("数据库删除id异常！！！");
            e.printStackTrace();
        }
    }

    /**
     * 根据id 删除指定表中数据
     *
     * @param id
     * @param dataDb
     */
    public void deleteID(int id, String dataDb) {
        String strSql = "DELETE FROM " + dataDb + " WHERE id=" + id + ";";
        System.out.println(strSql);
        try {
            stmt.executeUpdate(strSql);
        } catch (SQLException e) {
            System.out.println("数据库删除id异常！！！");
            e.printStackTrace();
        }
    }

    /**
     * 存储爬虫进度的数据
     * 用于爬虫出现异常 停止时  记载当前进度
     *
     * @param LbUrl 当前爬取列表页面的url
     */
    public void addplannedpeed(String LbUrl) {
        //执行插入 sql
        MyJDBC myJDBC = new MyJDBC();
        System.out.println("执行插入 sql------------------------------------");
        String InsertSql = "INSERT INTO plannedspeed (LBUrl,DQTime)VALUES('%s','%s');";
        SimpleDateFormat dateFormat = new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
        InsertSql = String.format(InsertSql, LbUrl, dateFormat.format(new Date()));
        System.out.println("InsertSql::::::" + InsertSql);
        try {
            stmt.executeUpdate(InsertSql);
            System.out.println("sql 插入成功");
        } catch (SQLException e) {
            System.out.println("sql 插入失败了！！");
            e.printStackTrace();
        }
        System.out.println("请注意！！！！，当前列表页进度为：：：：：：" + LbUrl);
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
     * 查询 dataDb 的 id sj dh 存入实体类集合中并返回
     *
     * @param dataDb
     * @return
     */
    public List<PoJo> SelectIdSjDh(String dataDb) {
        List<PoJo> list = new ArrayList();// 定义一个list，用来存放数据

        /**
         * sql语句
         */
        String selectSql = "SELECT id,DH,Sj FROM `" + dataDb + "`;";
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
     * 获取一个表中的全部数据
     *
     * @return
     */
    public List<PoJo> getSelectDb(String dataDb) {
        List<PoJo> list = new ArrayList();// 定义一个list，用来存放数据
        /**
         * sql语句
         */
        String selectSql = "SELECT * FROM `" + dataDb + "`;";
        try {
            PreparedStatement state = conn.prepareCall(selectSql);//通过PreparedStatement执行查询语句
            ResultSet rs = state.executeQuery();//将数据写入到ResultSet中
            while (rs.next()) {
                int id = rs.getInt("id");
                String url = rs.getString("Url");
                String name = rs.getString("Name");
                String zy = rs.getString("Zy");
                String lxr = rs.getString("LXR");
                String dh = rs.getString("DH");
                String sj = rs.getString("SJ");
                String dz = rs.getString("DZ");
                PoJo poJo = new PoJo();
                poJo.setUrl(url);
                poJo.setID(id);
                poJo.setName(name);
                poJo.setZY(zy);
                poJo.setLXR(lxr);
                poJo.setSj(sj);
                poJo.setDH(dh);
                poJo.setDZ(dz);
                list.add(poJo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return list;
    }

    /**
     * 更新数据
     * @param poJo
     * @param dataDb
     */
    public void upDate(PoJo poJo, String dataDb) {
        String InsertSql = "UPDATE %s SET DH='%s',Sj='%s',Name='%s',Zy='%s',LXR='%s',DZ='%s' WHERE id=%s;";
        String dh = "";
        String sj = "";
        String name = "";
        String zy = "";
        String lxr = "";
        String dz = "";

        String pojoDh = poJo.getDH();
        String pojosj = poJo.getSj();
        String pojoName = poJo.getSj();
        String pojoZy = poJo.getSj();
        String pojoLxr = poJo.getSj();
        String pojoDz = poJo.getSj();
        if (pojoDh != null) {
            dh = poJo.getDH();
        }
        if (pojosj != null) {
            sj = poJo.getSj();
        }
        if (pojoName != null) {
            name = poJo.getName();
        }
        if (pojoZy != null) {
            zy = poJo.getZY();
        }
        if (pojoLxr != null) {
            lxr = poJo.getLXR();
        }
        if (pojoDz != null) {
            dz = poJo.getDZ();
        }
        InsertSql = String.format(InsertSql, dataDb, dh, sj,name,zy,lxr,dz, poJo.getID());
        System.out.println(InsertSql);
        try {
            stmt.executeUpdate(InsertSql);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


}



