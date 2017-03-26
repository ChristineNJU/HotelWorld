/**
 * Created by christine on 2017/3/26.
 */
import request from '../utils/request';

export function getBenefits() {
  return request(`/api/benefits`);
}

export function getBills() {
  return request(`/api/bills`)
}
