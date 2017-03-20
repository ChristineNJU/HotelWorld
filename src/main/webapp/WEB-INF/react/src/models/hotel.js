import pathToRegexp from 'path-to-regexp';
import * as hotelService from '../services/hotel'

export default {
  namespace: 'hotel',
  state: {
    info:{
      name:'龙门客栈 南京分部',
      city:'南京',
      address:'鼓楼区'
    },
    rooms:[{
      price:null,
      count:null,
    }],
    hasLogin:null,
  },
  reducers: {
    init(state,{payload:{info,rooms}}){
      return {...state,info,rooms,hasLogin:localStorage.getItem("token") != null}
    }
  },
  effects: {
    *fetch({payload},{call,put}){
      const {data} = yield call (hotelService.fetch,{id:payload.id});
      yield put({
        type:'init',
        payload:{
          info:data.detail,
          rooms:data.rooms,
        }
      })
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen(({ pathname }) => {
        const match_detail = pathToRegexp(`/hotel/:hotelId`).exec(location.pathname);
        if (match_detail){
          let id = match_detail[1];
          dispatch({
            type: `fetch`,
            payload: {id:id}
          });
        }
      })
    }
  },
};
