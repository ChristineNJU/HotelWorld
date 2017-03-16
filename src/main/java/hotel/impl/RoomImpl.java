package hotel.impl;

import hotel.dao.RoomMapper;
import hotel.model.Room;
import hotel.service.RoomService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/3/16.
 */
@Service("RoomService")
public class RoomImpl implements RoomService{

    @Resource
    private RoomMapper roomMapper;

    public List<Room> getRoomsByHotelId(Integer id) {
        return roomMapper.selectByHotelId(id);
    }
}
