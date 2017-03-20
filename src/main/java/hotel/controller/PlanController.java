package hotel.controller;

import hotel.model.Room;
import hotel.service.PlanService;
import hotel.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by christine on 2017/3/20.
 */
@Controller
@RequestMapping("/plans")
public class PlanController {

    @Autowired
    private RoomService roomService;

    @RequestMapping(method = RequestMethod.GET,params = {"hotelId", "begin", "end"})
    public @ResponseBody
    List<Room> getPlans(@RequestParam(value = "hotelId") int id,
                        @RequestParam(value = "begin") String begin,
                        @RequestParam(value = "end") String end) throws Exception{
        List<Room> rooms = roomService.getRoomByPlan(id,begin,end);
        return rooms;
    }
}
