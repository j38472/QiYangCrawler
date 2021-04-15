package Text;

import Dao.PoJo;
import Dao.Tool;

public class ajax {
    public static void main(String[] args) {
        Tool tool =  new Tool();
        String url = "https://spa6.scrape.center/api/movie/?limit=10&offset=0&token=MTZhN2VlZTFjN2EyNGM2ODhlN2FmYmEyYWE0OThmNDdkNDg5MjcwNywxNjE4MzAxMDQ5";
        String urlJs = "https://spa7.scrape.center/js/main.js";
        PoJo poJo = tool.ClientGetHtmlPage(urlJs,"https://spa5.scrape.center/");
        System.out.println(poJo.getHtml());
    }
}
