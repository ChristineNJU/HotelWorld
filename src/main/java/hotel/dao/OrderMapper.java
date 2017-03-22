package hotel.dao;

import hotel.model.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderMapper {
    int insertNewOrder(Order order);
}