package hotel.service;

import hotel.model.Order;

import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
public interface OrderService {
    int createOrder(int hotelId,String username,String begin,String end,int price,int count);

    List<Order>  getOrdersByVipname(String vipname);

    List<Order> getOrdersByHotelid(int hotelid);
}
