package hotel.impl;

import hotel.dao.BillMapper;
import hotel.dao.HotelMapper;
import hotel.model.Bill;
import hotel.model.Hotel;
import hotel.model.HotelBenefits;
import hotel.service.BillService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * Created by christine on 2017/3/26.
 */
@Service("BillService")
public class BillImpl implements BillService {

    @Resource
    private BillMapper billMapper;

    @Resource
    private HotelMapper hotelMapper;

    public List<HotelBenefits> getBenefits() {
        return billMapper.getHotelBenefits();
    }

    public List<Bill> getBills() {
        return billMapper.getAllBills();
    }

    public int createBill(Double percent) {
        List<HotelBenefits> benefitss = this.getBenefits();
        int reserved = 0;
        int give = 0;
        for(HotelBenefits hotelBenefits:benefitss){
            Hotel hotel = hotelMapper.selectHotelByPrimaryKey(hotelBenefits.getHotelid());
            int temp = new Double(hotelBenefits.getBenefit() * (1-percent)).intValue();
            hotel.setMoney(hotel.getMoney()+temp);
            hotelMapper.updateByPrimaryKeySelective(hotel);
            reserved += hotelBenefits.getBenefit() * percent;
            give += temp;
        }


        Date today = new Date();
        Bill bill = new Bill();
        bill.setTime(today);
        bill.setReserve(reserved);
        bill.setGive(give);
        bill.setPercent(percent);
        return billMapper.insert(bill);
    }
}
