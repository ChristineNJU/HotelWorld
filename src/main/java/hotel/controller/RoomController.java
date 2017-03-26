package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import hotel.model.Room;
import hotel.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.StringContent;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Observable;

/**
 * Created by christine on 2017/3/25.
 */
@Controller
@RequestMapping("/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;

    @RequestMapping(method = RequestMethod.GET,params = {"hotelId"})
    public @ResponseBody
    List<Room> getPlans(@RequestParam(value = "hotelId") int id) throws Exception{
        List<Room> rooms = roomService.getRoomsByHotelId(id);
        return rooms;
    }

    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody Map<String,Object> createRoom (@RequestBody String body) throws Exception{
        Map<String,Object> result = new HashMap<String,Object>();
        JSONObject ob = JSON.parseObject(body);

        int hotelId = ob.getInteger("hotelId");
        int price = ob.getInteger("price");
        String name = ob.getString("name");

        int createResult = roomService.createNewRoom(hotelId,name,price);
        result.put("success",createResult);

        return result;
    }

    @RequestMapping(method = RequestMethod.PATCH)
    public @ResponseBody Map<String,Object> statusChange(@RequestBody String body) throws Exception{
        Map<String,Object> result = new HashMap<String,Object>();
        JSONObject ob = JSON.parseObject(body);
        int updateResult = roomService.statusChange(ob.getInteger("roomid"),ob.getInteger("status"));
        result.put("success",updateResult);
        return result;
    }
}
