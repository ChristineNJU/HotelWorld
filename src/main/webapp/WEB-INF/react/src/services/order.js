/**
 * Created by christine on 2017/3/20.
 */
import request from '../utils/request';

export function queryRoom({payload}) {
  return request(`/api/plans?hotelId=`+payload.hotelId+`&begin=`+payload.begin+`&end=`+payload.end);
}

export function createOrder(values) {
  console.log(values);
  return request(`api/order`,{
    method:'POST',
    body:JSON.stringify(values)
  })
}