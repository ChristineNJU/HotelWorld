import pathToRegexp from 'path-to-regexp';
import * as hotelService from '../services/hotel'

export default {
  namespace: 'hotel',
  state: {
    hotel:{
      name:'龙门客栈 南京分部',
      city:'南京',
      address:'鼓楼区'
    },
  },
  reducers: {
    init(state,{payload:{hotel}}){
      return {...state,hotel}
    }
  },
  effects: {
    *fetch({payload},{call,put}){
      const {data} = yield call (hotelService.fetch,{id:payload.id});
      yield put({
        type:'init',
        payload:{
          hotel:data.detail
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
          // console.log('hotel id :'+id);
          dispatch({
            type: `fetch`,
            payload: {id:id}
          });
          // console.log('in setup');
        }
      })
    }
  },
};
