package Text;


import javax.xml.crypto.Data;
import java.util.Calendar;

public class text {
    public static void main(String[] args) {

        long l = System.currentTimeMillis();
         String s =Long.toString(l);
        System.out.println(
                l
        );
        System.out.println(

                Calendar.getInstance().getTimeInMillis()
        );
    }
}
