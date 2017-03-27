package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import hotel.model.Hotel;
import hotel.model.User;
import hotel.model.Vip;
import hotel.service.HotelService;
import hotel.service.SessionService;
import hotel.service.UserService;
import hotel.service.VipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by christine on 2017/2/23.
 */

@Controller
public class UserController {
    //service类
    @Autowired
    private UserService userService;

    @Autowired
    private VipService vipService;

    @Autowired
    private SessionService sessionService;

    @Autowired
    private HotelService hotelService;

    /**
     * 查找所用用户控制器方法
     * @return
     * @throws Exception
     */
    @RequestMapping("/user/findUser")
    public ModelAndView findUser()throws Exception{
        ModelAndView modelAndView = new ModelAndView();

        //调用service方法得到用户列表
        User users = userService.findUser();
        //将得到的用户列表内容添加到ModelAndView中
        modelAndView.addObject("users",users);
        //设置响应的jsp视图
        modelAndView.setViewName("findUser");

        return modelAndView;
    }

    @RequestMapping(value="/user",method = RequestMethod.POST)
    public @ResponseBody  Map register(@RequestBody String body)throws Exception{
        Map<String,Object> result = new HashMap<String,Object>();
        System.out.println(body);
        JSONObject params = JSON.parseObject(body).getJSONObject("values");
        int type = params.getInteger("type");

        int success = 0;
        if(type == 1){
            success = vipService.vipRegister(
                    params.getString("username"),params.getString("name"),params.getString("gender"),
                    params.getString("phone"),params.getString("credit"),params.getString("password"));
        }else if(type == 2){
            System.out.println("hotel register controller");
            success = hotelService.hotelRegister(
                    params.getString("username"),params.getString("password"),params.getString("name"),
                    params.getString("city"),params.getString("address"),params.getString("bank"));
            int hotelid = hotelService.selectIdByUsername(params.getString("username"));
            result.put("hotelId",hotelid);
        }


        result.put("success",success > 0 ? 1 : 0);

        if(success > 0){
            String token = sessionService.getSession(params.getString("username"),1);
            result.put("token",token);
        }else{
            String token = sessionService.getSession(params.getString("username"),2);
            result.put("token",token);
        }

        System.out.println(JSON.toJSONString(result));
        return result;
    }

    @RequestMapping(value="/user",method = RequestMethod.GET)
    public @ResponseBody
    List<Vip> getAllVip(@RequestBody String body)throws Exception{
            return vipService.getAllVip();
    }

    @RequestMapping(value="/user/{username}",method = RequestMethod.GET)
    public @ResponseBody  Map getUserInfo(@PathVariable String username)throws Exception{
        Map<String,Object> result = new HashMap<String,Object>();
        Vip vip = vipService.getUserByUsername(username);
        System.out.println(JSON.toJSONString(vip));
        result.put("user",vip);
        return result;
    }
}
