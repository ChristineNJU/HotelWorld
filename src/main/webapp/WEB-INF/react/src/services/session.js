/**
 * Created by christine on 2017/3/16.
 */
import request from '../utils/request';

export function vipLogin(values){
  return request(`/api/session/login`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}


export function vipRegister(values){
  return request(`/api/user`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}

export function getVip({username}) {
  return request(`/api/user/`+username);
}


