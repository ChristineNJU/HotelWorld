package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import hotel.model.Display;
import hotel.model.Hotel;
import hotel.model.Room;
import hotel.service.HotelService;
import hotel.service.RoomService;
import hotel.vo.RoomCon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by christine on 2017/3/15.
 */

@Controller
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @Autowired
    private RoomService roomService;

    /**
     * 查找所有客栈的方法
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<Display> allHotels()throws Exception{

        List<Display> hotels = hotelService.finaAll();
        return hotels;
    }


    /**
     * 查询单个客栈信息
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public @ResponseBody Map getHotelById(@PathVariable("id") Integer id)throws Exception{
        Map<String, Object> result = new HashMap<String, Object>();
        Display display = hotelService.selectDisplayByPrimaryKey(id);
        Hotel hotel = hotelService.selectCheckingByPrimaryKey(id);
        List<RoomCon> rooms = roomService.getConRooms(id);
        result.put("detail",display);
        result.put("rooms",rooms);
        result.put("checking",hotel);

        return result;
    }

    /**
     * 更新客栈信息，type == 1是客栈修改，type == 2是管理员同意
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.PATCH)
    public @ResponseBody Map<String,Object> updateHotel(@RequestBody String body)throws Exception{

        Map<String,Object> result = new HashMap<String,Object>();
        JSONObject ob = JSON.parseObject(body);

        int type = ob.getInteger("type");
        int hotelId = ob.getInteger("hotelId");
        int success = 0;

        if(type == 1){
            String name = ob.getString("name");
            String city = ob.getString("city");
            String address = ob.getString("address");
            success = hotelService.updateHotel(hotelId,name,city,address);
        }else if(type == 2){
            success = hotelService.hotelInfoChecked(hotelId);
        }

        result.put("success",success);
        return result;
    }


}
