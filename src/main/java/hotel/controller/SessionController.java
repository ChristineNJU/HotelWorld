package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import hotel.service.SessionService;
import hotel.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

/**
 * Created by christine on 2017/3/16.
 */
@Controller
@RequestMapping("/session")
public class SessionController {

    @Autowired UserService userService;
    @Autowired SessionService sessionService;
    /**
     * 登录的接口，其中参数 type 表示用户类型，1是普通用户，2是客栈，3是管理员
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody Map<String,Object> login(@RequestBody String body){

//        System.out.println(body);
        JSONObject params = JSON.parseObject(body).getJSONObject("values");
        String username = params.getString("username");
        String password = params.getString("password");
        int type = params.getInteger("type");

        int canLog = 0;
        String token = "";

        if(type == 1){
            canLog = sessionService.canVipLogin(username,password);
        }else if(type == 2){
            canLog = sessionService.canHotelLogin(username,password);
        }

        if(canLog == 1){
            token = sessionService.getSession(username,type);
        }

        Map<String,Object> result = new HashMap<String,Object>();
        result.put("success",new Integer(canLog));
        result.put("token",token);

        return result;
    }
}
