package hotel.dao;

import hotel.model.Room;
import hotel.vo.RoomCon;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Room record);

    int insertSelective(Room record);

    Room selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Room record);

    int updateByPrimaryKey(Room record);

    List<Room> selectByHotelId(Integer id);

    List<RoomCon> selectConRooms(Integer id);
}