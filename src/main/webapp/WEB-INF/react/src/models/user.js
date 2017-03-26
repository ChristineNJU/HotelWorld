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
      discount:null,
    },
    moneySuccess:null,
    inputValue:null,
  },
  reducers: {
    init(state,{payload}){
      // console.log(payload);
      return {...state,user:payload.user,moneySuccess:null};
    },
    moneyResult(state,{payload}){
      return {...state,moneySuccess:payload.success,inputValue:null};
    },
    inputValueChange(state,{payload}){
      // console.log(payload);
      return {...state,inputValue:payload.inputValue};
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
      const {data} = yield call (sessionService.pointsToMoney,{type:1,amount:null,token:localStorage.getItem("token")});
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
    *addMoney({payload},{call,put}){
      const {data} = yield call (sessionService.pointsToMoney,{type:2,amount:payload.amount,token:localStorage.getItem("token")});
      yield put({
        type:'moneyResult',
        payload:{
          success:data.success != undefined ? data.success : null
        }
      });

      // console.log('1111');
      // setTimeout(function () {
        browserHistory.push('/uservip');

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
