package hotel.vo;

import java.util.Date;

/**
 * Created by christine on 2017/3/27.
 */
public class CheckIn {
    private Date date;
    private int count;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
