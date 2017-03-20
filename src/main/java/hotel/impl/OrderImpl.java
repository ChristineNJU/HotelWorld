package hotel.impl;

import hotel.model.Order;
import hotel.service.OrderService;
import org.springframework.stereotype.Service;

/**
 * Created by christine on 2017/2/23.
 */
@Service("orderService")
public class OrderImpl implements OrderService {
    public int createOrder(int hotelId, String token, String begin, String end, int price, int count) {
        Order order = new Order();

        return 0;
    }
}
