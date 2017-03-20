package hotel.dao;

import hotel.model.Plan;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanMapper {
    List<Plan> getPlansByRoomId(@Param("roomid") int roomid,
                                @Param("begin")String begin,
                                @Param("end")String end);
}