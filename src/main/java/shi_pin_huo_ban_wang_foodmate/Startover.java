package shi_pin_huo_ban_wang_foodmate;

/**
 * 入口
 *
 * 生产企业 ：  http://company.foodmate.net/list-5524.html
 *              http://company.foodmate.net/list-5524-%s.html
 * 商业服务 ：  http://company.foodmate.net/list-420.html
 *              http://company.foodmate.net/list-420-200.html
 * 代理经销商 ：  http://company.foodmate.net/search.php?kw=&vip=0&type=0&catid=5551&mode=0&areaid=0&size=0&mincapital=&maxcapital=&x=54&y=2&page=1
 *              http://company.foodmate.net/search.php?kw=&vip=0&type=0&catid=5551&mode=0&areaid=0&size=0&mincapital=&maxcapital=&x=54&y=2&page=2
 */
public class Startover {
    public static void main(String[] args) {
        Entrance entrance = new Entrance();
        for (int scqy = 0; scqy <= 2120 ; scqy++) {
            String str=String.format("http://company.foodmate.net/list-5524-%s.html", scqy);
            System.out.println(str);
            entrance.getListUrl(str);
        }
        for (int qyfw = 0; qyfw <= 212 ; qyfw++) {
            String str=String.format("http://company.foodmate.net/list-420-%s.html", qyfw);
            System.out.println(str);
            entrance.getListUrl(str);
        }
        for (int dljxs = 0; dljxs <= 174; dljxs++) {
            String str=String.format("http://company.foodmate.net/search.php?kw=&vip=0&type=0&catid=5551&mode=0&areaid=0&size=0&mincapital=&maxcapital=&x=54&y=2&page=%s", dljxs);
            System.out.println(str);
            entrance.getListUrl(str);
        }
        
    }
}
