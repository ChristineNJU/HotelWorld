/**
 * Created by christine on 2017/3/16.
 */
import * as sessionService from '../services/session';
import { browserHistory } from 'dva/router';

export default {
  namespace:'session',
  state:{
    token:null,
    username:null,
    userType:null,
    loginSuccess:null,
    registerSuccess:null,
    logoutSuccess:null,
  },
  reducers:{
    check(state){
      let token = localStorage.getItem("token");
      let username = localStorage.getItem("username");
      let userType = localStorage.getItem("userType");
      return  {...state,loginSuccess:null,registerSuccess:null,logoutSuccess:null,token:token,username:username,userType:userType};
    },
    vipLoginResult(state,{payload:{loginSuccess,token,username,userType}}){
      localStorage.setItem("token",token);
      localStorage.setItem("username",username);
      localStorage.setItem("userType",1);
      return {...state,loginSuccess,token,username,userType};
    },
    vipRegisterResult(state,{payload:{registerSuccess,token,username,userType}}){
      localStorage.setItem("token",token);
      localStorage.setItem("username",username);
      localStorage.setItem("userType",1);
      return {...state,registerSuccess,token,username,userType};
    },
    vipLogoutResult(state){
      localStorage.clear();
      return {...state,logoutSuccess:1}
    }
  },
  effects:{
    *vipLogin({payload},{call,put}){
      let values = {...payload.values,type:1};
      const result = yield call (sessionService.vipLogin,{values:values});

      yield put({
        type:'vipLoginResult',
        payload:{
          loginSuccess:result.data.success,
          token:result.data.token,
          username:payload.values.username,
          userType:1,
        }
      });

      if(result.data.success == 1){
        const path = `/`;

        setTimeout(
          function(){
            browserHistory.push(path);
          },1000
        );
      }
    },
    *vipRegister({payload},{call,put}){
      let values = {...payload.values,type:1};
      const result = yield call (sessionService.vipRegister,{values:values}).data;

      yield put({
        type:'vipRegisterResult',
        payload:{
          registerSuccess:result.success,
          token:result.token,
          username:payload.values.username,
          userType:1,
        }
      });

      if(result.success == 1){
        const path = `/`;
        setTimeout(
          function(){
            browserHistory.push(path);
          },1000
        );
      }
    },
    *vipLogout(action,{call,put}){

      yield put({
        type:'vipLogoutResult',
      });

      setTimeout(
        function(){
          browserHistory.push('/');

        },1000
      );
    }

  },
  subscriptions:{
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        dispatch({type : 'check'});
      });
    },
  }
}
