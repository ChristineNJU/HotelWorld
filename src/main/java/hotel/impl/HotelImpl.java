package hotel.impl;

import com.alibaba.fastjson.JSON;
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

    public List<Hotel> findUnchecked() {
        return hotelMapper.findUnchecked();
    }

    public Display selectDisplayByPrimaryKey(Integer id) throws Exception {
        return hotelMapper.selectDisplayByPrimaryKey(id);
    }

    public Hotel selectCheckingByPrimaryKey(Integer id) {
        return hotelMapper.selectHotelByPrimaryKey(id);
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

    public int updateHotel(int hotelId, String name, String city, String address) {
        Hotel hotel = hotelMapper.selectHotelByPrimaryKey(hotelId);
        hotel.setName(name);
        hotel.setCity(city);
        hotel.setAddress(address);
        hotel.setDisplay(2);
        System.out.println(JSON.toJSONString(hotel));
//        return 1;
        return hotelMapper.updateByPrimaryKeySelective(hotel);
    }

    public int hotelInfoChecked(int hotelId) {
        Hotel hotel = hotelMapper.selectHotelByPrimaryKey(hotelId);
        int displayStatus = hotel.getDisplay();
        Display display = new Display();
        display.setId(hotelId);
        display.setName(hotel.getName());
        display.setCity(hotel.getCity());
        display.setAddress(hotel.getAddress());

        int result  = 0;
        if (displayStatus == 0){
            result = hotelMapper.insertDisplay(display);
        }else if(displayStatus == 2){
            result = hotelMapper.updateDisplay(display);
        }
        if(result == 1){
            hotel.setDisplay(1);
            hotelMapper.updateByPrimaryKeySelective(hotel);
        }

        return result;
    }
}
