package Text;


import org.apache.commons.lang3.StringEscapeUtils;
import org.junit.Test;

import java.math.BigInteger;
import java.util.Calendar;

public class text {
    public static void main(String[] args) {
    }


    @Test
    public void ncr (){

//        System.out.println(new BigInteger("f5ed",16));


//        System.out.println(StringEscapeUtils.unescapeHtml3("&#x10017;"));
        /**
         * escapeEcmaScript
         * escapeJson
         *
         *
         *
         */
        String s = "dong";
        System.out.println(StringEscapeUtils.escapeXml11(s));
    }
}
