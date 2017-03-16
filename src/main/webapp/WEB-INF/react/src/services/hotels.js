/**
 * Created by christine on 2017/3/14.
 */
import request from '../utils/request';

export function fetch() {
  return request(`/api/hotels/all`);
  // console.log('in service fetch');

  // const list = {
  //   hotels:[{
  //     key:111,
  //     name:'龙门客栈',
  //     city:'南京',
  //     number:3,
  //     price:123
  //   },{
  //     key:1233,
  //     name:'龙门客栈',
  //     city:'南京',
  //     number:2,
  //     price:93
  //   }]
  // };
  // return list;
}
