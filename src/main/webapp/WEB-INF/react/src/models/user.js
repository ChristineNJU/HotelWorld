import * as sessionService from '../services/session';
import { browserHistory } from 'dva/router';

export default {
  namespace: 'user',
  state: {
    user: {
      username: '',
      name: '',
      gender: '',
      phone: '',
      credit: '',
      level:'',
      points:'',
      id:'',
      status:null,
      money:0,
    }
  },
  reducers: {
    init(state,{payload}){
      // console.log(payload);
      return {...state,user:payload.user};
    }
  },
  effects: {
    *fetch({payload},{call,put},){
      const {data} = yield call (sessionService.getVip,{username:payload.username});
      yield put({
        type:'init',
        payload:data,
      })
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen (({pathname}) => {

        if(pathname === `userinfo` || pathname === `uservip`){
          const username = localStorage.getItem("username");
          if(username == null){
            browserHistory.push(`/`);
          }else{
            dispatch({ type : 'fetch',payload:{username:username}});
          }
        }
      })
    }
  },
};
