/**
 * Created by christine on 2017/3/16.
 */
import request from '../utils/request';

export function vipLogin(values){
  return request(`/api/session`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}

export function hotelLogin(values){
  return request(`/api/session`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}

export function adminLogin(values){
  return request(`/api/session`,{
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


export function hotelRegister(values){
  return request(`/api/user`,{
    method:'POST',
    body:JSON.stringify(values)
  });
}

export function getVip({username}) {
  return request(`/api/user/`+username);
}


export function pointsToMoney({type,amount,token}) {
  // console.log('in service');
  return request(`/api/money`,{
    method:'POST',
    body:JSON.stringify({type,amount,token})
  });
}

export function changeCredit({credit,username}) {
  // console.log({credit,username});
  // return;
  return request(`/api/money`,{
    method:`PUT`,
    body:JSON.stringify({credit,username})
  })
}
