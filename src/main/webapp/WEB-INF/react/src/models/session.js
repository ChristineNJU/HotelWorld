/**
 * Created by christine on 2017/3/16.
 */
import * as sessionService from '../services/session';
import { browserHistory } from 'dva/router';
import {vipRegisterService} from '../services/session';
import request from '../utils/request';

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
    logoutResult(state){
      localStorage.clear();
      return {...state,logoutSuccess:1}
    },
    hotelRegisterResult(state,{payload:{registerSuccess,token,username,userType,hotelId}}){
      localStorage.setItem("token",token);
      localStorage.setItem("username",username);
      localStorage.setItem("userType",2);
      localStorage.setItem("hotelId",hotelId);
      return {...state,registerSuccess,token,username,userType};
    },
    hotelLoginResult(state,{payload:{loginSuccess,token,username,userType,hotelId}}){
      localStorage.setItem("token",token);
      localStorage.setItem("username",username);
      localStorage.setItem("userType",2);
      localStorage.setItem("hotelId",hotelId);
      return{...state,loginSuccess,token,username,userType}
    },
    adminLoginResult(state,{payload:{loginSuccess,token,username,userType}}){
      localStorage.setItem("token",token);
      localStorage.setItem("username",username);
      localStorage.setItem("userType",3);
      return{...state,loginSuccess,token,username,userType}
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
      // console.log('in model');
      // const result = yield call(vipRegisterService,{values:values}).data;
      const result = yield request(`/api/user`,{
        method:'POST',
        body:JSON.stringify({values:values})
      });
      const {data} = result;

      yield put({
        type:'vipRegisterResult',
        payload:{
          registerSuccess:data.success,
          token:data.token,
          username:payload.values.username,
          userType:1,
        }
      });

      if(data.success == 1){
        const path = `/`;
        setTimeout(
          function(){
            browserHistory.push(path);
          },1000
        );
      }
    },
    *hotelRegister({payload},{call,put}){
      let values = {...payload.values,type:2};
      const {data} = yield call (sessionService.hotelRegister,{values:values});
      console.log(data);
      yield put({
        type:'hotelRegisterResult',
        payload:{
          registerSuccess:data.success,
          token:data.token,
          hotelId:data.hotelId,
          username:payload.values.username,
          userType:2,
        }
      });

      if(data.success == 1){
        const path = `/`;
        setTimeout(
          function(){
            browserHistory.push(path);
          },1000
        );
      }
    },
    *hotelLogin({payload},{call,put}){
      let values = {...payload.values,type:2};
      const {data} = yield call (sessionService.hotelLogin,{values:values});
      yield put({
        type:'hotelLoginResult',
        payload:{
          loginSuccess:data.success,
          token:data.token,
          hotelId:data.hotelId,
          username:payload.values.username,
          userType:2,
        }
      });
      if(data.success == 1){
        const path = `/`;
        setTimeout(
          function(){
            browserHistory.push(path);
          },1000
        );
      }
    },
    *adminLogin({payload},{call,put}){
      let values = {...payload.values,type:3};
      const {data} = yield call(sessionService.adminLogin,{values:values});
      yield put({
        type:'adminLoginResult',
        payload:{
          loginSuccess:data.success,
          token:data.token,
          username:'admin',
          userType:3,
        }
      });
      if(data.success == 1){
        const path = `/`;
        setTimeout(
          function(){
            browserHistory.push(path);
          },1000
        );
      }
    },
    *logout(action,{call,put}){

      yield put({
        type:'logoutResult',
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
