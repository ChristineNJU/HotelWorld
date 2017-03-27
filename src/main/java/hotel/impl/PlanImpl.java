package hotel.impl;

import hotel.dao.PlanMapper;
import hotel.service.PlanService;
import hotel.vo.CheckIn;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
@Service("PlanService")
public class PlanImpl implements PlanService {

    @Resource
    private PlanMapper planMapper;
    public List<CheckIn> getHotelCheckIns(int hotelId) {
        return planMapper.getCheckIns(hotelId);
    }
}
