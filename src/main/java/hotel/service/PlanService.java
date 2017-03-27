package hotel.service;

import hotel.vo.CheckIn;

import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
public interface PlanService {
    List<CheckIn> getHotelCheckIns(int hotelId);
}
