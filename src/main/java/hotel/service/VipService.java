package hotel.service;

import hotel.model.User;
import hotel.model.Vip;

/**
 * Created by christine on 2017/2/23.
 */
public interface VipService {
    int vipRegister(String username,String name,String gender,String phone,String credit,String password);

    Vip getUserByUsername(String username);

    int pointsToMoney(String token);

    int addMoney(String token,int money);

    int updateVipAfterOrderComfirm(Vip vip);
}
