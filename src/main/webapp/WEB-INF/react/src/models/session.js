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
  },
  reducers:{
    check(state){
      let token = localStorage.getItem("token");
      let username = localStorage.getItem("username");
      return  {...state,loginSuccess:null,token:token,username:username};
    },
    vipLoginResult(state,{payload:{loginSuccess,token,username,userType}}){
      localStorage.setItem("token",token);
      localStorage.setItem("username",username);
      return {...state,loginSuccess,token,username,userType};
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
