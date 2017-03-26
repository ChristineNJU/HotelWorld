package hotel.controller;

import com.alibaba.fastjson.JSON;
import hotel.model.Bill;
import hotel.model.HotelBenefits;
import hotel.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by christine on 2017/3/26.
 */
@Controller
@RequestMapping("/bills")
public class BillController {
    @Autowired
    private BillService billService;

    /**
     * 查询系统所有的结账记录
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    List<Bill> getAllBills()throws Exception{

        List<Bill> bills = billService.getBills();
        return bills;
    }

    /**
     * 结账
     * @return
     * @throws Exception
     */
    @RequestMapping(method = RequestMethod.POST)
    public @ResponseBody
    Map<String,Object> createBill(@RequestBody String body)throws Exception{

        Map<String,Object> result = new HashMap<String,Object>();

        Double percent = JSON.parseObject(body).getDouble("percent");
        int createResult = billService.createBill(percent);
        result.put("success",createResult);

        return result;
    }
}
