package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.Util.MyDate;
import hotel.dao.VipMapper;
import hotel.model.User;
import hotel.model.Vip;
import hotel.service.VipService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by christine on 2017/2/23.
 */
@Service("VipService")
public class VipImpl implements VipService {

    @Resource
    private VipMapper vipMapper;

    public int vipRegister(String username, String name, String gender, String phone, String credit, String password) {
        Vip vip = new Vip();
        vip.setUsername(username);
        vip.setName(name);
        vip.setGender(gender);
        vip.setPhone(phone);
        vip.setCredit(credit);
        vip.setPassword(password);
        vip.setStatusbegin(new Date());
        vip.setStatus(0);
        vip.setMoney(new Float (0));
        vip.setLevel(0);
        vip.setPoints(0);
        int key = vipMapper.insert(vip);
        return key == 1?vip.getId():0;
    }

    public Vip getUserByUsername(String username){
        return vipMapper.selectByUsername(username);
    }

    public int pointsToMoney(String token) {
        return vipMapper.pointsToMoney(token);
    }

    public int addMoney(String token, int money) {
        Map<String,Object> map = new HashMap<String,Object>();
        map.put("token",token);
        map.put("money",money);
        return vipMapper.addMoney(token,money);
    }

    public int updateVipAfterOrderComfirm(Vip vip){
        return vipMapper.updateByPrimaryKeySelective(vip);
    }

}
