package Dao;

public class text {
    public static void main(String[] args) {
        Tool tool = new Tool();
        String s = "     　孙智伟    　";
        s = s.replaceAll("　", "");
        s = s.replaceAll(" ", "");
        System.out.println(s);
    }
}
