package hotel.impl;

import hotel.Util.MyDate;
import hotel.dao.HotelMapper;
import hotel.dao.OrderMapper;
import hotel.dao.PlanMapper;
import hotel.model.*;
import hotel.service.OrderService;
import hotel.service.RoomService;
import hotel.service.VipService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
@Service("orderService")
public class OrderImpl implements OrderService {


    @Resource
    private HotelMapper hotelMapper;

    @Resource
    private RoomService roomService;

    @Resource
    private VipService vipService;

    @Resource
    private OrderMapper orderMapper;

    @Resource
    private PlanMapper planMapper;

    public int createOrder(int hotelId, String username, String begin, String end, int price, int count) {
        Hotel hotel = hotelMapper.selectByPrimaryKey(hotelId);
        List<Room> rooms= roomService.getRoomByPlanWithPrice(hotelId,begin,end,price);
        Vip vip = vipService.getUserByUsername(username);
        if(rooms.size() < count){
            return 0;
        }

        for(Room room:rooms){
            Order order = new Order();
            order.setHotelid(hotelId);
            order.setHotelname(hotel.getName());
            order.setBegintime(MyDate.strToDate(begin));
            order.setEndtime(MyDate.strToDate(end));
            order.setPhone(vip.getPhone());
            order.setStatus(0);
            order.setPrice(price);
            order.setVipid(vip.getId());
            order.setRoomid(room.getId());
//            order.setCount(count);


            int insertResult = orderMapper.insertNewOrder(order);
            if(insertResult > 0){
                List<Date> dates = MyDate.getDuring(begin,end);
                for(Date date :dates){
                    Plan plan = new Plan();
                    plan.setRoomid(room.getId());
                    plan.setTime(date);
                    plan.setStatus(0);
                    plan.setHotelid(hotelId);
                    planMapper.insertPlan(plan);
                }
            }
        }


        return 1;
    }
}
