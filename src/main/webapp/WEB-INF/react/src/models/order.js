import pathToRegexp from 'path-to-regexp';
import * as orderServices from '../services/order';
import {browserHistory} from 'dva/router';

export default {
  namespace: 'order',
  state: {
    query: {
      begin: null,
      end: null,
      gap: null
    },
    order: {
      price: null,
      count: 1,
      phone:null,
    },
    roomShow: null,
    orderSuccess: null,
    orders:[],
    hotelOrders:[],
    hotelOrdersYu:[],
    hotelCurrent:[],
    hotelBefore:[],
    hotelInvalid:[],
  },
  reducers: {
    orderChange(state, {payload:{price, count,phone}}){
      return {...state, order: {price: price, count: count,phone:phone}};
    },
    loadQueryResult(state, {payload:{queryResult, begin, end, gap}}){
      let roomShow = {};
      let prices = [];
      if (queryResult != null) {
        for (let room of queryResult) {
          if (!(room.price in prices) && room.status === 1) {
            prices.push(room.price);
          }
        }
        for (let price of prices) {
          roomShow[price] = 0;
          for (let room of queryResult) {
            if (room.price == price) {
              roomShow[price + ''] =
                roomShow[price + ''] != null ? roomShow[price + ''] + 1 : 0;
            }
          }
        }
      }
      // console.log(gap);
      return {...state, roomShow: roomShow, query: {begin: begin, end: end, gap: gap}}
    },
    orderResultChange(state, {payload:{result}}){
      return {...state, orderSuccess: result};
    },
    init(state, {payload}){
      return {
        ...state,
        orderSuccess: null,
        roomShow: null,
        query: {begin: null, end: null, gap: null},
        order: {price: null, count: 1}
      }
    },
    getOrders(state,{payload:{orders}}){
     return {...state,orders:orders};
    },
    getHotelOrders(state,{payload:{orders}}){
      return {...state,hotelOrders:orders,
        hotelOrdersYu:orders.filter((order) => {return order.status === 0})};
    },
    getHotelCurrent(state,{payload:{orders}}){
      return {...state,hotelOrders:orders,
        hotelCurrent:orders.filter((order) => {return order.status===3})};
    },
    getHotelBefore(state,{payload:{orders}}){
      return {...state,hotelOrders:orders,
        hotelBefore:orders.filter((order) => {return order.status === 4})};
    },
    getHotelInvalid(state,{payload:{orders}}){
      return {...state,hotelOrders:orders,
        hotelInvalid:orders.filter((order) => {return order.status === 2 || order.status == 1})};
    }

  },
  effects: {
    *fetch({payload},{call,put}){
      let username = payload.username;
      const {data} = yield call(orderServices.queryOrders,{payload:{queryString: '?username=' + username}});
        // console.log(data);
        yield put({
          type:'getOrders',
          payload:{
            orders:data.orders,
          }
        })
    },
    *fetchHotelOrders({payload},{call,put}){
      // let hotelId = localStorage.getItem("hotelId");
      let hotelId = payload.hotelId;
      console.log('in fetch hotel orders',hotelId);
      const {data} = yield call(orderServices.queryOrders,{payload:{queryString:'?hotelId=' + hotelId}});
      console.log('orders',data);
      yield put({
        type:'getHotelOrders',
        payload:{
          orders:data.orders,
        }
      })
    },
    *fetchHotelCurrent({payload},{call,put}){
      let hotelId = localStorage.getItem("hotelId");
      const {data} = yield call(orderServices.queryOrders,{payload:{queryString:'?hotelId=' + hotelId}});
      yield put({
        type:'getHotelCurrent',
        payload:{
          orders:data.orders,
        }
      })
    },
    *fetchHotelBefore({payload},{call,put}){
      let hotelId = localStorage.getItem("hotelId");
      const {data} = yield call(orderServices.queryOrders,{payload:{queryString:'?hotelId=' + hotelId}});
      yield put({
        type:'getHotelBefore',
        payload:{
          orders:data.orders,
        }
      })
    },
    *fetchHotelInvalid({payload},{call,put}){
      let hotelId = localStorage.getItem("hotelId");
      const {data} = yield call(orderServices.queryOrders,{payload:{queryString:'?hotelId=' + hotelId}});
      yield put({
        type:'getHotelInvalid',
        payload:{
          orders:data.orders,
        }
      })
    },
    *queryRoom({payload}, {call, put}){
      const {data} = yield call(orderServices.queryRoom, {payload});
      yield put({
        type: 'loadQueryResult',
        payload: {
          queryResult: data,
          begin: payload.begin,
          end: payload.end,
          gap: payload.gap,
        }
      })
    },
    *orderConfirm({payload}, {call, put}){
      let values = {...payload, username: localStorage.getItem('username')};
      // console.log(values);
      const {data} = yield call(orderServices.createOrder, {values: values});
      if (data.success != null && data.success != undefined) {
        yield put({
          type: 'orderResultChange',
          payload: {
            result: data.success
          }
        })
      } else {
        yield put({
          type: 'orderResultChange',
          payload: {
            result: 0
          }
        })
      }

      setTimeout(
        yield put({
          type: 'init'
        })
        , 1000)
    },
    *orderConfirmByHotel({payload},{call,put}){
      let values = {...payload, username: null};
      // console.log(values);
      const {data} = yield call(orderServices.createOrder, {values: values});
      if (data.success != null && data.success != undefined) {
        yield put({
          type: 'orderResultChange',
          payload: {
            result: data.success
          }
        })
      } else {
        yield put({
          type: 'orderResultChange',
          payload: {
            result: 0
          }
        })
      }

      setTimeout(
        yield put({
          type: 'init'
        })
        , 1000)
    },
    *vipCancel({payload}, {call, put}){
      console.log(payload.orderId);
      const {data} = yield call(orderServices.vipCancelOrder,{...payload.order,type:1});
      if(data.success == 1){
        dispatch({
          type: 'fetch',
        });
      }
    },
    *hotelCancel({payload}, {call, put}){
      const {data} = yield call(orderServices.vipCancelOrder,{...payload.order,type:2});
      if(data.success == 1) {
        browserHistory.push('/hotelorders');
      }
    },
    *hotelCheckIn({payload}, {call, put}){
      const {data} = yield call(orderServices.vipCancelOrder,{...payload.order,type:3});
      if(data.success == 1) {
        browserHistory.push('/hotelorders');
      }
    },
    *hotelCheckOut({payload}, {call, put}){
      const {data} = yield call(orderServices.vipCancelOrder,{...payload.order,type:4});
      if(data.success == 1) {
        browserHistory.push('/hotelorders');
      }
    }
  },
  subscriptions: {
    setup({dispatch, history}){
      return history.listen(({pathname}) => {
        if( pathname === 'userorders') {
          // console.log('in setup');
          dispatch({
            type: 'fetch',
            payload:{
              username:localStorage.getItem("username")
            }
          });
        }
        if( pathname === 'hotelorders') {
          dispatch({
            type: 'fetchHotelOrders',
            payload:{
              hotelId:localStorage.getItem("hotelId")
            }
          });
        }
        if( pathname === 'hotelcurrent') {
          dispatch({
            type: 'fetchHotelCurrent'
          });
        }
        if( pathname === 'hotelbefore') {
          dispatch({
            type: 'fetchHotelBefore'
          });
        }
        if( pathname === 'hotelinvalid') {
          dispatch({
            type: 'fetchHotelInvalid'
          });
        }
        const match_detail = pathToRegexp(`/adminviporders/:username`).exec(location.pathname);
        if (match_detail){
          // console.log();
          dispatch({
            type: 'fetch',
            payload:{
              username:match_detail[1]
            }
          });
        }

      })
    }
  },
}
