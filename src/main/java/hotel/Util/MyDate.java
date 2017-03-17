package hotel.Util;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * Created by christine on 2017/3/17.
 */
public class MyDate {
    public static String getNow(){
        Date now = new Date();
        Calendar calendar   =   new GregorianCalendar();
        calendar.setTime(now);
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH) + 1;
        int day = calendar.get(Calendar.DAY_OF_MONTH);
        String today = year + "-" + month + "-" + day;
        return today;
    }
}
