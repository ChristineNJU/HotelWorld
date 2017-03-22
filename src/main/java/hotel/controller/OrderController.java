package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import hotel.model.Room;
import hotel.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by christine on 2017/3/21.
 */
@Controller
@RequestMapping("/order")
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

        int createResult = orderService.createOrder(hotelId,username,begin,end,price,count);

        Map<String,Object> result = new HashMap<String, Object>() ;
        result.put("success",createResult);
        return result;
    }
}
