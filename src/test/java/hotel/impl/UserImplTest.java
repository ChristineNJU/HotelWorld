package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.dao.UserMapper;
import hotel.model.User;
import hotel.service.UserService;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/2/23.
 */
@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
public class UserImplTest {

    private static Logger logger = Logger.getLogger(UserImplTest.class);

    @Resource
    private UserService userService;

//    @Resource
//    private UserMapper userMapper;

//    @Test
//    public void test() throws Exception {
//        User user = userService.findUser();
//
//        System.out.print(user);
//    }


    @Test
    public void test2() throws Exception {
        List<User> user = userService.getAllUsers();

        System.out.print(user);
        logger.info(JSON.toJSONString(user));
    }
}
