package hotel.impl;

import com.alibaba.fastjson.JSON;
import hotel.dao.TokenMapper;
import hotel.dao.UserMapper;
import hotel.dao.VipMapper;
import hotel.model.Token;
import hotel.model.TokenKey;
import hotel.service.SessionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

/**
 * Created by christine on 2017/3/17.
 */

@Service("SessionService")
public class SessionImpl implements SessionService{

    @Resource
    private VipMapper vipMapper;

    @Resource
    private TokenMapper tokenMapper;

    public int canVipLogin(String username, String password) {
        String truePass = vipMapper.selectByUsername(username);
        if(truePass ==  null)
            return 0;
        return truePass.equals(password) ? 1 : 0;
    }

    public String getSession(String username, int type){

        TokenKey key = new TokenKey();
        key.setUsername(username);
        key.setType(type);
        Token token = tokenMapper.selectByPrimaryKey(key);
        Date expTime = token.getExptime();
        Date now = new Date();
        String session;
        if(expTime.before(now)){
            session = createSession();
            token.setToken(session);
            Calendar calendar   =   new GregorianCalendar();
            calendar.setTime(now);
            calendar.add(calendar.DATE,1);
            token.setExptime(calendar.getTime());
            tokenMapper.updateByPrimaryKeySelective(token);
//            System.out.println("before");
        }else{
//            System.out.println("after");
            session = token.getToken();
        }
        return session;
    }

    private String createSession(){
        List<String> sessionExist = tokenMapper.getAllToken();

//        System.out.println("in create session");
//        System.out.println(JSON.toJSONString(sessionExist));
        String newToken = suiji();
        while (sessionExist.indexOf(newToken) != -1){
            newToken = suiji();
        }

        return newToken;
    }

    private String suiji(){
        String newToken = "";
        for(int i = 0; i < 12; i++){
            int random = new Double(Math.random()*10).intValue();
            newToken = newToken + random;
        }
        return newToken;
    }
}
