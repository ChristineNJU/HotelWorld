/**
 * Created by christine on 2017/3/25.
 */
import request from '../utils/request';

export function fetch({hotelId}) {
  return request(`/api/rooms?hotelId=`+hotelId);
}

export function createRoom(values) {
  // console.log(values);
  return request(`/api/rooms`,{
    method:'POST',
    body:JSON.stringify(values)
  })
}

export function statusChange(values) {
  console.log(values);
  return request(`/api/rooms`,{
    method:'PATCH',
    body:JSON.stringify(values)
  })
}
