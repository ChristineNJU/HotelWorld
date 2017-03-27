package hotel.controller;

import hotel.Util.MyDate;
import hotel.model.Room;
import hotel.service.PlanService;
import hotel.service.RoomService;
import hotel.vo.CheckIn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.*;

/**
 * Created by christine on 2017/3/20.
 */
@Controller
@RequestMapping("/plans")
public class PlanController {

    @Autowired
    private RoomService roomService;

    @Autowired
    private PlanService planService;

    @RequestMapping(method = RequestMethod.GET,params = {"hotelId", "begin", "end"})
    public @ResponseBody
    List<Room> getPlans(@RequestParam(value = "hotelId") int id,
                        @RequestParam(value = "begin") String begin,
                        @RequestParam(value = "end") String end) throws Exception{
        List<Room> rooms = roomService.getRoomByPlan(id,begin,end);
        return rooms;
    }

    @RequestMapping(value="/{id}",method = RequestMethod.GET)
    public @ResponseBody
    Map getHotelCheckIns(@PathVariable("id") Integer id) throws Exception{

        Map<String,Object > result = new HashMap<String,Object>();
        List<CheckIn> checkIns = planService.getHotelCheckIns(id);
        List<String> dates = new ArrayList<String>();
        List<Integer> counts = new ArrayList<Integer>();


        int size = checkIns.size();

        for(int i = 0; i < checkIns.size();i++){
            CheckIn current = checkIns.get(i);
            dates.add(MyDate.getFormatedDate(current.getDate()));
            counts.add(current.getCount());
            if(i < size -1){
                CheckIn next = checkIns.get(i+1);
                List<Date> gaps = MyDate.getDuring(MyDate.getFormatedDate(current.getDate()),
                        MyDate.getFormatedDate(next.getDate()));
                //如果天数大于1的话，才会执行循环体（开始的那天也算在during里）
                for(int j = 1;j < gaps.size();j++){
                    dates.add(MyDate.getFormatedDate(gaps.get(j)));
                    counts.add(0);
                }
            }

        }

        result.put("dates",dates);
        result.put("counts",counts);
        return result;
    }
}
