package hotel.Util;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * Created by christine on 2017/3/17.
 */
public class MyDate {
    public static String getNow(){

        return get(new Date());
    }

    public static String getFormatedDate(Date date){
//        Date date = new Date(d);
        return get(date);

    }

    public static String get(Date date){
        Calendar calendar   =   new GregorianCalendar();
        calendar.setTime(date);
        int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH) + 1;
        int day = calendar.get(Calendar.DAY_OF_MONTH);
        String s = year + "-" + month + "-" + day;
        return s;
    }
}
