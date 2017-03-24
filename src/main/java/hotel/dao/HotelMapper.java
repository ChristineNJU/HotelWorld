package hotel.dao;

import hotel.model.Hotel;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Hotel record);

//    int insertSelective(Hotel record);

    Hotel selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Hotel record);

    int updateByPrimaryKey(Hotel record);

    List<Hotel> findAll();

    int selectIdByUsername(String username);

    String getPasswordByUsername(String username);
}