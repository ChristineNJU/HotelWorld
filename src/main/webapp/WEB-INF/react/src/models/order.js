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
    },
    roomShow: null,
    orderSuccess: null,
    orders:{

    }
  },
  reducers: {
    orderChange(state, {payload:{price, count}}){
      return {...state, order: {price: price, count: count}};
    },
    loadQueryResult(state, {payload:{queryResult, begin, end, gap}}){
      let roomShow = {};
      let prices = [];
      if (queryResult != null) {
        for (let room of queryResult) {
          if (!(room.price in prices)) {
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
    }
  },
  effects: {
    *fetch({payload},{call,put}){
        const {data} = yield call(orderServices.queryOrders,{payload});
        // console.log(data);
        yield put({
          type:'getOrders',
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
      console.log(values);
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
    }
  },
  subscriptions: {
    setup({dispatch, history}){
      return history.listen(({pathname}) => {
        if( pathname === 'userorders') {
          let username = localStorage.getItem("username");
          // console.log('in setup');
          dispatch({
            type: 'fetch',
            payload: {queryString: '?username=' + username},
          });
        }
      })
    }
  },
}
