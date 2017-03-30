/**
 * Created by christine on 2017/3/15.
 */
import request  from '../utils/request';

export function fetch({ id }) {
  return request(`/api/hotels/`+ id);
}

export function update(values) {
  console.log(values);
  return request(`/api/hotels`,{
    method:'PATCH',
    body:JSON.stringify(values)
  })
}

export function fetchCheckIns(hotelId) {
  console.log('fetch check ins');
  return request(`/api/plans/`+hotelId);
}
