package hotel.impl;

import hotel.Util.MyDate;
import hotel.dao.HotelMapper;
import hotel.dao.OrderMapper;
import hotel.dao.PlanMapper;
import hotel.model.*;
import hotel.service.OrderService;
import hotel.service.RoomService;
import hotel.service.VipService;
import org.apache.ibatis.annotations.Param;
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
            order.setRoomname(room.getName());
            order.setVipname(username);
//            order.setCount(count);


            int insertResult = orderMapper.insertNewOrder(order);
            if(insertResult > 0){
                addPlans(room.getId(),hotelId,begin,end);
            }
        }


        return 1;
    }

    public int createNoneVipOrder(int hotelId, String phone, String begin, String end, int price, int count) {
        System.out.println("in create Vip order");

        Hotel hotel = hotelMapper.selectByPrimaryKey(hotelId);
        List<Room> rooms= roomService.getRoomByPlanWithPrice(hotelId,begin,end,price);
        if(rooms.size() < count){
            return 0;
        }

        for(Room room:rooms){
            Order order = new Order();
            order.setHotelid(hotelId);
            order.setHotelname(hotel.getName());
            order.setBegintime(MyDate.strToDate(begin));
            order.setEndtime(MyDate.strToDate(end));
            order.setPhone(phone);
            order.setStatus(3);
            order.setPrice(price);
            order.setVipid(null);
            order.setRoomid(room.getId());
            order.setRoomname(room.getName());
            order.setVipname(null);

            int insertResult = orderMapper.insertNewOrder(order);
            if(insertResult > 0){
                addPlans(room.getId(),hotelId,begin,end);
            }
        }


        return 1;
    }

    public List<Order> getOrdersByVipname(String username) {
        return orderMapper.getOrdersByVipname(username);
    }

    public List<Order> getOrdersByHotelid(int hotelid) {
        return orderMapper.getOrdersByHotelId(hotelid);
    }

    public int updateOrder(int orderId,int type,String begin,String end,int roomid) {
        int orderChangeResult = orderMapper.statusChange(orderId,type);
        if(orderChangeResult == 1 && (type == 1 || type == 2)){
            List<Date> dates = MyDate.getDuring(begin,end);
            for(Date date :dates){
                planMapper.cancelPlan(roomid,date);
            }
        }
        return orderChangeResult;
    }

    private void addPlans(int roomid,int hotelId,String begin,String end){
        List<Date> dates = MyDate.getDuring(begin,end);
        for(Date date :dates){
            Plan plan = new Plan();
            plan.setRoomid(roomid);
            plan.setTime(date);
            plan.setStatus(0);
            plan.setHotelid(hotelId);
            planMapper.insertPlan(plan);
        }
    }

}
