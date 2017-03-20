import * as orderServices from '../services/order';

export default {
  namespace: 'order',
  state: {
    query:{
      begin:null,
      end:null,
      gap:null
    },
    order:{
      price:null,
      count:1,
    },
    roomShow:null,
  },
  reducers: {
    orderChange(state,{payload:{price,count}}){
      return {...state,order:{price:price,count:count}};
    },
    loadQueryResult(state,{payload:{queryResult,begin,end,gap}}){
      let roomShow = {};
      let prices = [];
      if(queryResult != null){
        for(let room of queryResult){
          if(!(room.price in prices)){
            prices.push(room.price);
          }
        }
        for(let price of prices){
          roomShow[price] = 0;
          for( let room of queryResult){
            if(room.price == price){
              roomShow[price+''] =
                roomShow[price+''] != null ? roomShow[price+''] + 1:0;
            }
          }
        }
      }
      console.log(gap);
      return {...state,roomShow:roomShow,query:{begin:begin,end:end,gap:gap}}
    }
  },
  effects: {
    *queryRoom({payload},{call,put}){
      const {data} = yield call(orderServices.queryRoom,{payload});
      yield put({
        type:'loadQueryResult',
        payload:{
          queryResult:data,
          begin:payload.begin,
          end:payload.end,
          gap:payload.gap,
        }
      })
    },
    *orderConfirm({payload},{call,put}){
      let values = {...payload,token:localStorage.getItem('token')};
      console.log(values);
      const {data} = yield call(orderServices.createOrder,{values:values});
    }
  },
  subscriptions: {},
};
