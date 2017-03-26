import * as billService from '../services/bill';

export default {
  namespace: 'bill',
  state: {
    benefits:[],
    bills:[]
  },
  reducers: {
    renderBenefits(state,{payload:{benefits}}){
      console.log(benefits);
      return {...state,benefits:benefits}
    },
    renderBills(state,{payload:{bills}}){
      return {...state,bills:bills}
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
