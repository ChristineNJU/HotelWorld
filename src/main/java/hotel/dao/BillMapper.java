package hotel.dao;

import hotel.model.Bill;
import hotel.model.HotelBenefits;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Bill record);

    int insertSelective(Bill record);

    Bill selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Bill record);

    int updateByPrimaryKey(Bill record);

    List<HotelBenefits> getHotelBenefits();

    List<Bill> getAllBills();
}