package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.Util.MyDate;
import hotel.dao.PlanMapper;
import hotel.dao.RoomMapper;
import hotel.model.Plan;
import hotel.model.Room;
import hotel.service.RoomService;
import hotel.vo.RoomCon;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by christine on 2017/3/16.
 */
@Service("RoomService")
public class RoomImpl implements RoomService{

    @Resource
    private RoomMapper roomMapper;

    @Resource
    private PlanMapper planMapper;

    public List<Room> getRoomsByHotelId(Integer id) {
        return roomMapper.selectByHotelId(id);
    }

    public List<RoomCon> getConRooms(Integer id) {
        return roomMapper.selectConRooms(id);
    }

    public List<Room> getRoomByPlan(int hotelId,String begin,String end){
        List<Room> allRooms = this.getRoomsByHotelId(hotelId);
        List<Room> filteredRooms = new ArrayList<Room>();

        int gap = MyDate.getGap(begin,end);
//        System.out.println(gap);
        for(Room room : allRooms){
            List<Plan> plans = planMapper.getPlansByRoomId(room.getId(),begin,end);
//            System.out.println(JSON.toJSONString(plans));
            if(plans.size() == 0){
                filteredRooms.add(room);
            }

        }
        return filteredRooms;
    }

    public List<Room> getRoomByPlanWithPrice(int hotelId,String begin,String end,int price){
        List<Room> rooms = this.getRoomByPlan(hotelId,begin,end);
        List<Room> result = new ArrayList<Room>();
        for (Room room:rooms){
            if(room.getPrice() == price){
                result.add(room);
            }
        }
        return result;
    }

    public int createNewRoom(int hotelId, String name, int price) {
        Room room = new Room();
        room.setHotelid(hotelId);
        room.setName(name);
        room.setPrice(price);
        room.setStatus(1);
        return roomMapper.insert(room);
    }

    public int statusChange(int roomId, int status) {

        Room room = new Room();
        room.setId(roomId);
        room.setStatus(status);

        return roomMapper.updateByPrimaryKeySelective(room);
    }
}
