package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import hotel.model.Hotel;
import hotel.model.Order;
import hotel.model.Room;
import hotel.service.OrderService;
import org.omg.PortableInterceptor.SYSTEM_EXCEPTION;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

/**
 * Created by christine on 2017/3/21.
 */
@Controller
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody
    Map<String,Object> createOrder(@RequestBody String body) throws Exception{

        System.out.println(body);
        JSONObject params = JSON.parseObject(body).getJSONObject("values");
        int hotelId = params.getInteger("hotelId");
        String begin = params.getString("begin");
        String end = params.getString("end");
        String username = params.getString("username");
        int price = params.getInteger("price");
        int count = params.getInteger("count");
        String phone = params.getString("phone");
        String peoplename = params.getString("peoplename");

        int createResult = 0;
        if(username != null){
            createResult = orderService.createOrder(hotelId,username,begin,end,price,count,peoplename);
        }else{
            createResult = orderService.createNoneVipOrder(hotelId,phone,begin,end,price,count,peoplename);
        }

        Map<String,Object> result = new HashMap<String, Object>() ;
        result.put("success",createResult);
        return result;
    }

    /**
     * 查找会员的所有订单
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.GET,params = {"username"})
    public @ResponseBody Map<String,Object> getOrdersByVip(@RequestParam(value="username") String username)throws Exception{

        List<Order> orders = orderService.getOrdersByVipname(username);
        Map<String,Object> result = new HashMap<String,Object>();
        result.put("orders",orders);
        return result;
    }

    /**
     * 查找酒店的所有订单
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.GET,params = {"hotelId"})
    public @ResponseBody Map<String,Object> getOrdersByHotel(@RequestParam(value="hotelId") int hotelid)throws Exception{

        List<Order> orders = orderService.getOrdersByHotelid(hotelid);
        Map<String,Object> result = new HashMap<String,Object>();
        result.put("orders",orders);
        return result;
    }

    /**
     * 会员取消订单：type=1
     * 酒店取消订单：type=2
     * 已入住：type=3,这个在下一个方法
     * 已退房：type=4
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.PATCH)
    public @ResponseBody Map<String,Object> cancelOrder(@RequestBody String body)throws Exception{

//        List<Order> orders = orderService.getOrdersByHotelid(hotelid);
        Map<String,Object> result = new HashMap<String,Object>();
        JSONObject ob = JSON.parseObject(body);
        System.out.println(body);
        int orderId = ob.getInteger("id");
        int type = ob.getInteger("type");
        int hotelId = ob.getInteger("hotelid");
        String begin = ob.getString("begin");
        String end = ob.getString("end");
        int roomid = ob.getInteger("roomid");

        int success = orderService.updateOrder(orderId,type, begin,end,roomid);
        result.put("success",success);
        return result;
    }

    /**
     * 会员入住
     * 已入住：type=3,这个在下一个方法
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.PUT)
    public @ResponseBody Map<String,Object> vipIn(@RequestBody String body)throws Exception{

//        List<Order> orders = orderService.getOrdersByHotelid(hotelid);
        Map<String,Object> result = new HashMap<String,Object>();
        JSONObject ob = JSON.parseObject(body);
        int orderId = ob.getInteger("id");
        String peoplename = ob.getString("peoplename");

        int updateResult = orderService.vipIn(orderId,peoplename);
        result.put("success",updateResult);
        return result;
    }



}
