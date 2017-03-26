import * as roomService from '../services/room';
import {browserHistory} from 'dva/router';

export default {
  namespace: 'room',
  state: {
    rooms:[]
  },
  reducers: {
    init(state,{payload:{rooms}}){
      return {...state,rooms};
    }
  },
  effects: {
    *fetch({payload},{call,put}){
      const {data} = yield call (roomService.fetch,{hotelId:localStorage.getItem('hotelId')});
      yield put({
        type:'init',
        payload:{
          rooms:data
        }
      })
    },
    *createRoom({payload},{call,put}){
      let values = {...payload.values,hotelId:localStorage.getItem("hotelId")};
      const {data} = yield call (roomService.createRoom,values);
      browserHistory.push('/hotelroom');
    },
    *statusChange({payload},{call,put}){
      let {data} = yield call (roomService.statusChange,payload);
    }
  },
  subscriptions: {
    setup({dispatch, history}){
      return history.listen(({pathname}) => {
        if( pathname === 'hotelroom') {
          dispatch({
            type: 'fetch'
          });
        }
      })
    }
  },
};
