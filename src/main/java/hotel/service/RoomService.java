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

    List<Room> getRoomByPlan(int hotelId,String begin,String end);

    List<Room> getRoomByPlanWithPrice(int hotelId,String begin,String end,int price);

    int createNewRoom(int hotelId,String name,int price);

    int statusChange(int roomId,int status);
}
