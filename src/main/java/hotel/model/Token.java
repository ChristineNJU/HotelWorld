package hotel.model;

import java.util.Date;

public class Token extends TokenKey {
    private String token;

    private Date exptime;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token == null ? null : token.trim();
    }

    public Date getExptime() {
        return exptime;
    }

    public void setExptime(Date exptime) {
        this.exptime = exptime;
    }
}