package hotel.model;

import com.sun.org.apache.bcel.internal.generic.FLOAD;
import hotel.Util.MyDate;

import java.util.Date;

public class Vip {
    private Integer id;

    private String name;

    private String gender;

    private String phone;

    private String credit;

    private Float money;

    private Integer points;

    private Integer status;

    private String statusbegin;

    private Integer level;

    private String username;

    private String password;

    private String vipNumber;

    private Double discount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
        this.vipNumber = String.format("%07d", id);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender == null ? null : gender.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getCredit() {
        return credit;
    }

    public void setCredit(String credit) {
        this.credit = credit == null ? null : credit.trim();
    }

    public Float getMoney() {
        return money;
    }

    public void setMoney(Float money) {
        this.money = money;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String  getStatusbegin() {
        return statusbegin;
    }

    public void setStatusbegin(Date statusbegin) {

        this.statusbegin = MyDate.getFormatedDate(statusbegin);
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
        this.discount = 1-0.05*level;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVipNumber() {
        return vipNumber;
    }

    public Double getDiscount() {
        return discount;
    }
}