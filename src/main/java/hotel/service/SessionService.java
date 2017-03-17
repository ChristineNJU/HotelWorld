package hotel.service;

/**
 * Created by christine on 2017/3/17.
 */
public interface SessionService {
    public int canVipLogin(String username,String password);

    public String getSession(String username,int type);
}
