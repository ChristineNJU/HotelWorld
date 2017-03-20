package hotel.Util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by christine on 2017/3/17.
 */
public class MyDate {

    public static SimpleDateFormat sdf = new SimpleDateFormat("yy-MM-dd");
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

    public List<String> getDuring(String begin, String end){
        List<String> days = new ArrayList<String>();
        Date dateBegin = new Date();
        Date dateEnd = new Date();
        try {
            dateBegin =  sdf.parse(begin);
            dateEnd = sdf.parse(end);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Calendar c = Calendar.getInstance();
        Date temp = dateBegin;
        while (dateEnd.getTime() > temp.getTime()){
            days.add(sdf.format((temp)));
            c.setTime(temp);
            c.add(Calendar.DATE, 1);
            temp = c.getTime();
        }

        return days;
    }

    public static int getGap(String begin,String end){
        Date dateBegin = new Date();
        Date dateEnd = new Date();
        try {
            dateBegin =  sdf.parse(begin);
            dateEnd = sdf.parse(end);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        long gap = (dateEnd.getTime() - dateBegin.getTime())/(24*3600*1000);
        int result = (int)gap;
        return result;
    }
}
