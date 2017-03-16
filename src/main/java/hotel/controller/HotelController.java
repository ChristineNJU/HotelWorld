package hotel.controller;

import hotel.model.Hotel;
import hotel.model.User;
import hotel.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

/**
 * Created by christine on 2017/3/15.
 */

@Controller
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    /**
     * 查找所有客栈的方法
     * @return
     * @throws Exception
     */
    @RequestMapping(value="/all",method = RequestMethod.GET)
    public @ResponseBody List<Hotel> allHotels()throws Exception{
        List<Hotel> hotels = hotelService.finaAll();
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
        result.put("detail",hotel);
        return result;
    }


}
