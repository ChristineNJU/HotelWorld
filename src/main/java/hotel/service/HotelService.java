package hotel.service;

import hotel.model.Display;
import hotel.model.Hotel;

import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
public interface HotelService {

    /**
     * 查找所有用户
     * @return
     * @throws Exception
     */
    List<Display> finaAll()throws Exception;

    /**
     * 通过主键查找房间
     * @return
     * @throws Exception
     */
    Display selectDisplayByPrimaryKey(Integer id)throws Exception;

    Hotel selectCheckingByPrimaryKey(Integer id);

    int hotelRegister(String username,String password,String name,String city,String address,String bank);

    int selectIdByUsername(String  username);

    int updateHotel(int hotelId,String name,String city,String address);

    int hotelInfoChecked(int hotelId);
}
