package hotel.model;

/**
 * Created by christine on 2017/3/26.
 */
public class HotelBenefits {

    private int hotelid ;
    private String hotelNumber;
    private String hotelname;
    private int benefit;

    public int getHotelid() {
        return hotelid;
    }

    public void setHotelid(int hotelid) {
        this.hotelid = hotelid;
        this.hotelNumber =  String.format("%07d",hotelid);
    }

    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname;
    }

    public int getBenefit() {
        return benefit;
    }

    public void setBenefit(int benefit) {
        this.benefit = benefit;
    }

    public String getHotelNumber() {
        return hotelNumber;
    }
}
