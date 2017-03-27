import * as vipService from '../services/vip';

export default {
  namespace: 'vip',
  state: {
    vips:[],
    singleVipOrders:[]
  },
  reducers: {
    init(state,{payload:{vips}}){
      return {...state,vips:vips}
    }
  },
  effects: {
    *fetch({payload},{call,put}){
      const {data} = yield call(vipService.getVips);
      console.log(data);
      yield put({
        type:'init',
        payload:{
          vips:data
        }
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if(pathname === 'adminvip'){
          dispatch({
            type: 'fetch'
          });
        }
      });
    },
  },
};
