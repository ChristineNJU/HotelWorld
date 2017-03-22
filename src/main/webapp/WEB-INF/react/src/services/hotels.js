/**
 * Created by christine on 2017/3/14.
 */
import request from '../utils/request';

export function fetch({queryString}) {
  return request(`/api/hotels`+queryString);
}
