package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.dao.OrderMapper;
import hotel.dao.PlanMapper;
import hotel.dao.VipMapper;
import hotel.model.Order;
import hotel.service.OrderService;
import hotel.vo.CheckIn;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by christine on 2017/3/23.
 */
@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})

public class OrderImplTest {

    private static Logger logger = Logger.getLogger(HotelImplTest.class);

    @Resource
    private OrderMapper orderMapper;

    @Resource
    private OrderService orderService;

    @Resource
    private PlanMapper planMapper;


//    @Test
//    public void testByVipname() throws Exception {
//        List<Order> orders = orderMapper.getOrdersByVipname("christine");
//        logger.info(JSON.toJSONString(orders));
//    }
//
//    @Test
//    public void testByHotelid() throws Exception {
//        List<Order> orders = orderMapper.getOrdersByHotelId(1);
//        logger.info(JSON.toJSONString(orders));
//    }
//
//    @Test
//    public void testCancelOrder() throws Exception {
//        int result = orderService.updateOrder(1,1,
//                "2017-03-23","2017-03-25",2);
//
//        List<Order> orders = orderMapper.getOrdersByHotelId(1);
//        logger.info(JSON.toJSONString(orders));
//    }


    @Test
    public void testCheckin() throws Exception {
        List<CheckIn> result = planMapper.getCheckIns(1);

        logger.info(JSON.toJSONString(result));
    }
}
