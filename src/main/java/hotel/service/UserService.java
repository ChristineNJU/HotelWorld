package hotel.service;

import hotel.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
@Service
public interface UserService {
    /**
     * 查找所有用户
     * @return
     * @throws Exception
     */
    User findUser()throws Exception;


    List<User> getAllUsers();
}