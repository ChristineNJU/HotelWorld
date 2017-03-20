import * as sessionService from '../services/session';
// import * as moneyService from '../services/money';
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
    },
    moneySuccess:null,
  },
  reducers: {
    init(state,{payload}){
      // console.log(payload);
      return {...state,user:payload.user,moneySuccess:null};
    },
    moneyResult(state,{payload}){
      return {...state,moneySuccess:payload.success}
    }
  },
  effects: {
    *fetch({payload},{call,put},){
      const {data} = yield call (sessionService.getVip,{username:payload.username});
      yield put({
        type:'init',
        payload:data,
      })
    },
    *pointsToMoney({payload},{call,put}){
      console.log('in effect');
      const {data} = yield call (sessionService.pointsToMoney,{type:1,amount:null,token:localStorage.getItem("token")});
      console.log('in effect2');
      yield put({
        type:'moneyResult',
        payload:{
          success:data.success != undefined ? data.success : null
        }
      });

      setTimeout(function () {
        browserHistory.push('/uservip');
      },1000)
    },
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
