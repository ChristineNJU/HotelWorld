package hotel.impl;

import hotel.dao.HotelMapper;
import hotel.model.Hotel;
import hotel.service.HotelService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
@Service("HotelService")
public class HotelImpl implements HotelService {

    @Resource
    private HotelMapper hotelMapper;

    /**
     * 查找所有用户
     * @return
     * @throws Exception
     */
    public List<Hotel> finaAll()throws Exception{
        return hotelMapper.findAll();

    }
}
