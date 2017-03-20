package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.dao.VipMapper;
import hotel.model.Hotel;
import hotel.model.Vip;
import hotel.service.HotelService;
import hotel.service.VipService;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.Date;

/**
 * Created by christine on 2017/3/17.
 */

@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})

public class VipMapperTest {

    private static Logger logger = Logger.getLogger(HotelImplTest.class);


    @Resource
    private VipMapper vipMapper;


    @Test
    public void testFinaAll() throws Exception {

        Vip vip = new Vip();
        vip.setUsername("11s132");
        vip.setName("111");
        vip.setGender("f");
        vip.setPhone("111332");
        vip.setCredit("111");
        vip.setPassword("111");
        vip.setStatusbegin(new Date());
        vip.setStatus(0);
        vip.setMoney(new Float(0));
        vip.setLevel(0);
        vip.setPoints(0);
        int key = vipMapper.insert(vip);
        System.out.println(key);
        System.out.println(vip.getId());
//        logger.info(JSON.toJSONString(hotels));
    }
}
