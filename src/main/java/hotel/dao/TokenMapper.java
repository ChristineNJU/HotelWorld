package hotel.dao;

import hotel.model.Token;
import hotel.model.TokenKey;

import java.util.List;

public interface TokenMapper {
    int deleteByPrimaryKey(TokenKey key);

    int insert(Token record);

    int insertSelective(Token record);

    Token selectByPrimaryKey(TokenKey key);

    int updateByPrimaryKeySelective(Token record);

    int updateByPrimaryKey(Token record);

    List<String> getAllToken();
}