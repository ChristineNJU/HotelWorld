package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.model.Hotel;
import hotel.service.HotelService;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/3/16.
 */
@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})

public class HotelImplTest {

    private static Logger logger = Logger.getLogger(HotelImplTest.class);


    @Resource
    private HotelService hotelService;

    @Test
    public void testFinaAll() throws Exception {
        List<Hotel> hotels = hotelService.finaAll();
        System.out.println(hotels);
        logger.info(JSON.toJSONString(hotels));
    }
}
