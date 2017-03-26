package hotel.service;

import hotel.model.Bill;
import hotel.model.HotelBenefits;

import java.util.List;

/**
 * Created by christine on 2017/3/26.
 */
public interface BillService {
    List<HotelBenefits> getBenefits();

    List<Bill> getBills();
}
