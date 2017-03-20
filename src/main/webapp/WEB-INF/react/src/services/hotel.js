/**
 * Created by christine on 2017/3/15.
 */
import request  from '../utils/request';

export function fetch({ id }) {
  return request(`/api/hotels/`+ id);
}
