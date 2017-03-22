package hotel.dao;

import hotel.model.Order;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderMapper {
    int insertNewOrder(Order order);

    List<Order> getOrdersByVipname(String vipname);

    List<Order> getOrdersByHotelId(int hotelid);
}