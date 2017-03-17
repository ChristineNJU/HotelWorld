package hotel.dao;

import hotel.model.Vip;
import org.springframework.stereotype.Repository;

@Repository
public interface VipMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Vip record);

    int insertSelective(Vip record);

    Vip selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Vip record);

    int updateByPrimaryKey(Vip record);

    String selectByUsername(String username);
}