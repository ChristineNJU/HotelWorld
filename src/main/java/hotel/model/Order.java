package hotel.model;

import hotel.Util.MyDate;

import java.util.Date;
import java.util.StringTokenizer;

public class Order {
    private Integer id;

    private Integer hotelid;

    private String hotelname;

    private Date begintime;
    private Date endtime;

    private String phone;

    //0 预定，1 顾客取消，2酒店取消，3结账
    private Integer status;

    private Integer price;

    private Integer vipid;

    private Integer roomid;

    private String begin;
    private String end;

    private String roomname;

    private String vipname;

    private String vipNumber;

    private String peoplename;

    public String getPeoplename() {
        return peoplename;
    }

    public void setPeoplename(String peoplename) {
        this.peoplename = peoplename;
    }

    public String getBegin() {
        return begin;
    }

    public String getEnd() {
        return end;
    }

    public String getVipname() {
        return vipname;
    }

    public void setVipname(String vipname) {
        this.vipname = vipname;
    }
    //    private Integer count;



    public String getRoomname() {
        return roomname;
    }

    public void setRoomname(String roomname) {
        this.roomname = roomname;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getHotelid() {
        return hotelid;
    }

    public void setHotelid(Integer hotelid) {
        this.hotelid = hotelid;
    }

    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname == null ? null : hotelname.trim();
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getVipid() {
        return vipid;
    }

    public void setVipid(Integer vipid) {
        this.vipid = vipid;
        this.vipNumber = String.format("%07d", vipid);
    }

    public Integer getRoomid() {
        return roomid;
    }

    public void setRoomid(Integer roomid) {
        this.roomid = roomid;
    }

    public Date getBegintime() {
        return begintime;
    }

    public void setBegintime(Date begintime) {
        this.begintime = begintime;
        this.begin = MyDate.getFormatedDate(begintime);
    }

    public Date getEndtime() {
        return endtime;
    }

    public void setEndtime(Date endtime) {
        this.endtime = endtime;
        this.end = MyDate.getFormatedDate(endtime);
    }

    public String getVipNumber() {
        return vipNumber;
    }

}