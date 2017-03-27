import request from '../utils/request';

export function getVips() {
  return request(`/api/user`);
}
