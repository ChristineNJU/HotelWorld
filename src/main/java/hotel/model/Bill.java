package hotel.model;

import hotel.Util.MyDate;

import java.util.Date;

public class Bill {
    private Integer id;

    private Date time;

    private Integer give;

    private Integer reserve;

    private Double percent;

    private String date;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
        this.date = MyDate.getFormatedDate(time);
    }

    public Integer getGive() {
        return give;
    }

    public void setGive(Integer give) {
        this.give = give;
    }

    public Integer getReserve() {
        return reserve;
    }

    public void setReserve(Integer reserve) {
        this.reserve = reserve;
    }

    public Double getPercent() {
        return percent;
    }

    public void setPercent(Double percent) {
        this.percent = percent;
    }

    public String getDate() {
        return date;
    }
}