package hotel.dao;

import hotel.model.Display;
import hotel.model.Hotel;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Hotel record);

//    int insertSelective(Hotel record);

    Hotel selectHotelByPrimaryKey(Integer id);


    int updateByPrimaryKeySelective(Hotel record);

    int updateByPrimaryKey(Hotel record);

    List<Display> findAll();

    int selectIdByUsername(String username);

    String getPasswordByUsername(String username);

    int updateDisplay(Display display);

    int insertDisplay(Display display);

    Display selectDisplayByPrimaryKey(Integer id);

}