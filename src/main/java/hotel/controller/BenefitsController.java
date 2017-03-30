package hotel.controller;

import com.alibaba.fastjson.JSON;
import hotel.model.HotelBenefits;
import hotel.model.Order;
import hotel.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by christine on 2017/3/26.
 */
@Controller
@RequestMapping("/benefits")
public class BenefitsController {

    @Autowired
    private BillService billService;

    /**
     * 查找会员的所有订单
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody List<HotelBenefits> getOrdersByVip()throws Exception{

        List<HotelBenefits> benefits = billService.getBenefits();
        System.out.println(JSON.toJSONString(benefits));
        return benefits;
    }
}
