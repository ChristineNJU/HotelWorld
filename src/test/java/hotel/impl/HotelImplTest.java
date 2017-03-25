package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.dao.PlanMapper;
import hotel.dao.RoomMapper;
import hotel.model.*;
import hotel.service.HotelService;
import hotel.service.RoomService;
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

    @Resource
    private PlanMapper planMapper;

    @Resource
    private RoomService roomService;

    @Test
    public void testFinaAll() throws Exception {
        List<Display> hotels = hotelService.finaAll();
        System.out.println(hotels);
        logger.info(JSON.toJSONString(hotels));
    }

//    @Test
//    public void RoomWithPlans() throws Exception {
//        List<Plan> rooms = planMapper.getPlansByRoomId(1,"2017-03-23","2017-03-26");
//
//        logger.info(JSON.toJSONString(rooms));
//    }
//
//    @Test
//    public void Rooms() throws Exception {
//        List<Room> rooms = roomService.getRoomByPlan(1, "2017-03-23", "2017-03-26");
////        List<Plan> rooms = planMapper.getPlansByRoomId(1);
//        logger.info(JSON.toJSONString(rooms));
//    }
}
