import pathToRegexp from 'path-to-regexp';
import * as hotelService from '../services/hotel'

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
  },
  reducers: {
    init(state,{payload:{info,rooms}}){
      return {...state,info,rooms,hasLogin:localStorage.getItem("type") == 1}
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
      })
    },
    *infoChange({payload},{call,put}){
      const {data} = yield call(
        hotelService.update,
        {...payload,hotelId:localStorage.getItem("hotelId"),type:1}
        );

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
        }

        //客栈看自己的页面
        if(pathname === 'hotelcheckin' || pathname === 'hotelinfo'){
          let hotelId = localStorage.getItem("hotelId");
          dispatch({
            type:`fetch`,
            payload:{id:hotelId}
          })

        }

      })
    }
  },
};
