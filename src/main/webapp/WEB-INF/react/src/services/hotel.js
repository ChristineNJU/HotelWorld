/**
 * Created by christine on 2017/3/15.
 */
import request  from '../utils/request';

export function fetch({ id }) {
  return request(`/api/hotels/`+ id);
  // console.log('in hotel service fetch');
  // const hotel = {
  //   hotel:{
  //     name:'龙门客栈 南京分部',
  //     city:'南京',
  //     rooms:[
  //       123,221,98
  //     ]
  //   }
  // };
  // return list;
}
