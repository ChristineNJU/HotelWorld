package hotel.controller;

import hotel.model.Bill;
import hotel.model.HotelBenefits;
import hotel.service.BillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

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
    List<Bill> getOrdersByVip()throws Exception{

        List<Bill> bills = billService.getBills();
        return bills;
    }
}
