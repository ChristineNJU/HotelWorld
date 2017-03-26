package hotel.impl;

import hotel.dao.BillMapper;
import hotel.model.Bill;
import hotel.model.HotelBenefits;
import hotel.service.BillService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/3/26.
 */
@Service("BillService")
public class BillImpl implements BillService {

    @Resource
    private BillMapper billMapper;
    public List<HotelBenefits> getBenefits() {
        return billMapper.getHotelBenefits();
    }

    public List<Bill> getBills() {
        return billMapper.getAllBills();
    }
}
