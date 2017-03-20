package hotel.service;

/**
 * Created by christine on 2017/2/23.
 */
public interface OrderService {
    int createOrder(int hotelId,String token,String begin,String end,int price,int count);
}
