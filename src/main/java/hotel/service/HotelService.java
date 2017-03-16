package hotel.service;

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
    List<Hotel> finaAll()throws Exception;

    /**
     * 通过主键查找用户
     * @return
     * @throws Exception
     */
    Hotel selectByPrimaryKey(Integer id)throws Exception;


}
