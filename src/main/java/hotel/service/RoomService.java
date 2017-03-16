package hotel.service;

import hotel.model.Room;
import hotel.vo.RoomCon;

import java.util.List;

/**
 * Created by christine on 2017/3/16.
 */
public interface RoomService {
    List<Room> getRoomsByHotelId(Integer id);

    List<RoomCon> getConRooms(Integer id);
}
