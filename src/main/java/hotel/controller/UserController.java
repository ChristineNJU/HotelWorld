package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import hotel.model.User;
import hotel.service.SessionService;
import hotel.service.UserService;
import hotel.service.VipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
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
        int success = vipService.vipRegister(
                params.getString("username"),params.getString("name"),params.getString("gender"),
                params.getString("phone"),params.getString("credit"),params.getString("password"));
        result.put("success",success);

        if(success == 1){
            String token = sessionService.getSession(params.getString("username"),1);
            result.put("token",token);
        }

        System.out.println("in controller");
        System.out.println(JSON.toJSONString(result));
        return result;
    }
}
