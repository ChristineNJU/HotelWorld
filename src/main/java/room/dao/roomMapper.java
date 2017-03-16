package room.dao;

import room.model.room;

public interface roomMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(room record);

    int insertSelective(room record);

    room selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(room record);

    int updateByPrimaryKey(room record);
}