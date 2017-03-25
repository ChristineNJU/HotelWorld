package hotel.controller;

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
     * 通过主键查找客栈的方法
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public @ResponseBody Map getHotelById(@PathVariable("id") Integer id)throws Exception{
        Map<String, Object> result = new HashMap<String, Object>();
        Hotel hotel = hotelService.selectByPrimaryKey(id);
        List<RoomCon> rooms = roomService.getConRooms(id);
        result.put("detail",hotel);
        result.put("rooms",rooms);
        return result;
    }


}
