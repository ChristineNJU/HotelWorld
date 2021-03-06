package hotel.dao;

import hotel.model.Order;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderMapper {
    int insertNewOrder(Order order);

    List<Order> getOrdersByVipname(String vipname);

    List<Order> getOrdersByHotelId(int hotelid);

    int statusChange(@Param("orderid") int orderid, @Param("status") int status);

    int vipIn(@Param("orderid") int orderid,
              @Param("peoplename") String peoplename);

    Order getOrderByKey(int id);
}