package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.dao.PlanMapper;
import hotel.model.Bill;
import hotel.model.Display;
import hotel.model.HotelBenefits;
import hotel.service.BillService;
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
 * Created by christine on 2017/3/26.
 */
@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
public class BillImplTest {
    private static Logger logger = Logger.getLogger(HotelImplTest.class);


    @Resource
    private BillService billService;

    @Test
    public void testFinaAll() throws Exception {
        List<Bill> bills = billService.getBills();
        logger.info(JSON.toJSONString(bills));
    }

    @Test
    public void testFinaBenefits() throws Exception {
        List<HotelBenefits> benefitss = billService.getBenefits();
        logger.info(JSON.toJSONString(benefitss));
    }
}
