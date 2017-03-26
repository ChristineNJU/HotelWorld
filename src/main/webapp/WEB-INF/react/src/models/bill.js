import * as billService from '../services/bill';
import {browserHistory} from 'dva/router';

export default {
  namespace: 'bill',
  state: {
    benefits:[],
    bills:[],
    percent:0.1
  },
  reducers: {
    renderBenefits(state,{payload:{benefits}}){
      return {...state,benefits:benefits}
    },
    renderBills(state,{payload:{bills}}){
      return {...state,bills:bills}
    },
    percentChange(state,{payload:{percent}}){
      // console.log('111');
      return {...state,percent:percent}
    }
  },
  effects: {
    *initBenefits({payload},{call,put}){
      const {data} = yield call(billService.getBenefits);
      yield put({
        type:'renderBenefits',
        payload:{
          benefits:data
        }
      })
    },
    *initBills({payload},{call,put}){
      const {data} = yield call(billService.getBills);
      yield put({
        type:'renderBills',
        payload:{
          bills:data
        }
      })
    },
    *createBill({payload},{call,put}){
      const {data} = yield call(billService.createBill,{percent:payload.percent});
      browserHistory.push('/admingive');
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if(pathname === 'admingive'){
          dispatch({
            type:'initBenefits'
          })
        }
        if(pathname === 'adminmoney'){
          dispatch({
            type:'initBills'
          })
        }
      });
    },
  },
};
