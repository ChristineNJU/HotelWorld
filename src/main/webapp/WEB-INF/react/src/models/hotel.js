import pathToRegexp from 'path-to-regexp';
import * as hotelService from '../services/hotel'
import {browserHistory} from 'dva/router';
export default {
  namespace: 'hotel',
  state: {
    info:{
      name:'',
      city:'',
      address:''
    },
    infoChecking:{
      name:null,
      city:null,
      address:null,
    },
    rooms:[{
      price:null,
      count:null,
    }],
    hasLogin:null,
    vipDiscount:null,
  },
  reducers: {
    init(state,{payload:{info,rooms}}){
      return {...state,info,rooms,hasLogin:localStorage.getItem("userType") == 1}
    },
    initIncludingChecking(state,{payload:{info,rooms,infoChecking}}){
      // console.log(info,rooms,infoChecking);
      return {...state,info,rooms,infoChecking}
    },
    checkingChange(state,{payload:{newValue}}){
      let key = Object.keys(newValue)[0];
      if(key === 'name')
        return {...state,infoChecking:{...state.infoChecking,name:newValue.name}};
      if(key === 'city')
        return {...state,infoChecking:{...state.infoChecking,city:newValue.city}};
      if(key === 'address')
        return {...state,infoChecking:{...state.infoChecking,address:newValue.address}};

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
      });

      if(localStorage.getItem("userType") == 1){

      }
    },
    *fetchIncludingChecking({payload},{call,put}){
      const {data} = yield call (hotelService.fetch,{id:payload.id});
      console.log(data);
      let infoChecking = data.checking;

      if(data.checking.display == 1){
        infoChecking.name = null;
        infoChecking.city = null;
        infoChecking.address = null;
      }
      let info = {name:'',city:'', address:''};
      if(data.checking.display > 0){
        info=data.detail;
      }
      yield put({
        type:'initIncludingChecking',
        payload:{
          info:info,
          rooms:data.rooms,
          infoChecking:infoChecking
        }
      })
    },
    *infoChange({payload},{call,put}){
      const {data} = yield call(
        hotelService.update,
        {...payload,hotelId:localStorage.getItem("hotelId"),type:1}
        );
    },
    *infoChecked({payload},{call,put}){
        console.log(payload);
      const {data} = yield call(
        hotelService.update,
        {...payload,hotelId:payload.hotelId,type:2}
      );
      if(data.success == 1){
        browserHistory.push('/admincheck');
      }
    }
  },
  subscriptions: {
    setup({dispatch,history}){
      return history.listen(({ pathname }) => {

        //vip 看单个客栈的页面
        const match_detail = pathToRegexp(`/hotel/:hotelId`).exec(location.pathname);
        if (match_detail){
          let id = match_detail[1];
          dispatch({
            type: `fetch`,
            payload: {id:id}
          });
          dispatch({
            type:`user/fetch`,payload:{username:localStorage.getItem("username")}
          })
        }

        //客栈看自己的页面
        if(pathname === 'hotelcheckin'){
          let hotelId = localStorage.getItem("hotelId");
          dispatch({
            type:`fetch`,
            payload:{id:hotelId}
          })
        }

        if(pathname === 'hotelinfo') {
          let hotelId = localStorage.getItem("hotelId");
          dispatch({
            type: `fetchIncludingChecking`,
            payload: {id: hotelId}
          })
        }
      })
    }
  },
};
