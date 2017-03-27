package hotel.dao;

import hotel.model.User;
import hotel.model.Vip;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VipMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Vip record);

    int insertSelective(Vip record);

    Vip selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Vip record);

    int updateByPrimaryKey(Vip record);

    String getPasswordByUsername(String username);

    Vip selectByUsername(String username);

    int pointsToMoney(String token);

    int addMoney(@Param("token")String token, @Param("money")int money);

    List<Vip> getAllVip();
}