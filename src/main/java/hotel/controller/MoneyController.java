package hotel.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import hotel.service.VipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by christine on 2017/3/19.
 */
@Controller
public class MoneyController {

    @Autowired
    private VipService vipService;

    @RequestMapping(value="/money",method = RequestMethod.POST)
    public @ResponseBody
    Map addMoney(@RequestBody String body)throws Exception{
        Map<String,Object> result = new HashMap<String,Object>();
        System.out.println(body);
        JSONObject params = JSON.parseObject(body);
        int type = params.getInteger("type");
        String token = params.getString("token");
        int success = 0;
        if(type == 1){
            success = vipService.pointsToMoney(token);
        }else if(type==2){
            int money = params.getInteger("amount");
            success = vipService.addMoney(token,money);
        }else{
            success = 0;
        }
        result.put("success",success);
        System.out.println(JSON.toJSONString(result));
        return result;
    }

    @RequestMapping(value="/money",method = RequestMethod.PUT)
    public @ResponseBody
    Map changeBank(@RequestBody String body)throws Exception{
        Map<String,Object> result = new HashMap<String,Object>();
        JSONObject ob = JSON.parseObject(body);
        String username = ob.getString("username");
        String credit = ob.getString("credit");
        int changeResult = vipService.changeCredit(credit,username);
        result.put("success",changeResult);
        return result;
    }


}
