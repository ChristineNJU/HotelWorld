package hotel.service;

import hotel.model.User;
import hotel.model.Vip;

/**
 * Created by christine on 2017/2/23.
 */
public interface VipService {
    int vipRegister(String username,String name,String gender,String phone,String credit,String password);

    public Vip getUserByUsername(String username);
}
