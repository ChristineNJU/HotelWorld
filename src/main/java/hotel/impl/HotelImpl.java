package hotel.impl;

import hotel.dao.HotelMapper;
import hotel.model.Display;
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
    public List<Display> finaAll()throws Exception{
        return hotelMapper.findAll();

    }

    public Hotel selectByPrimaryKey(Integer id) throws Exception {
        return hotelMapper.selectByPrimaryKey(id);
    }

    public int hotelRegister(String username, String password, String name, String city, String address, String bank) {
        Hotel hotel = new Hotel();
        hotel.setUsername(username);
        hotel.setPassword(password);
        hotel.setName(name);
        hotel.setCity(city);
        hotel.setAddress(address);
        hotel.setBank(bank);
        hotel.setMoney(0);
        return hotelMapper.insert(hotel);
    }

    public int selectIdByUsername(String username) {

        return hotelMapper.selectIdByUsername(username);
    }
}
