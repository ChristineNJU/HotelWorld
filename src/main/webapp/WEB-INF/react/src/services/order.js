/**
 * Created by christine on 2017/3/20.
 */
import request from '../utils/request';

export function queryRoom({payload}) {
  return request(`/api/plans?hotelId=`+payload.hotelId+`&begin=`+payload.begin+`&end=`+payload.end);
}

export function createOrder(values) {
  console.log(values);
  return request(`api/orders`,{
    method:'POST',
    body:JSON.stringify(values)
  })
}

export function queryOrders({payload}) {
  return request(`api/orders`+payload.queryString);
}

export function vipCancelOrder(values) {
  console.log(values);
  return request(`api/orders`,{
    method:'PATCH',
    body:JSON.stringify(values)
  })
}

export function vipIn(values) {
  console.log(222);
  console.log(values);
  // return;
  return request(`api/orders`,{
    method:'PUT',
    body:JSON.stringify(values)
  })
}
