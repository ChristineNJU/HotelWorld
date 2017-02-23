package hotel.impl;

import hotel.dao.UserMapper;
import hotel.model.User;
import org.springframework.stereotype.Service;
import hotel.service.UserService;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */

@Service("UserService")
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    public User findUser() throws Exception {

        User users = userMapper.selectByPrimaryKey(new Integer(1));
//        User users = new User();

        return users;
    }

    public List<User> getAllUsers() {
        return userMapper.getAllUsers();
    }
}
