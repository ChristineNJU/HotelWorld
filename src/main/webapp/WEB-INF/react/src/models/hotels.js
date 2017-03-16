import * as searchService from '../services/hotels';

export default {
  namespace: 'hotels',
  state: {
    list:[],
    keyword:null,
    beginDate:null,
    endDate:null,
    low:null,
    high:null,
  },
  reducers: {
    init(state,{payload:{list}}){
      return {...state,list};
    }
  },
  effects: {
    *fetch(action, { call, put }){
      console.log(yield call(searchService.fetch));
      const {data} = yield call(searchService.fetch);
      console.log('111');
      console.log(data);
      const test = {ll:data};
      console.log(test);
      yield put({
        type:'init',
        payload:{
          list:data,
        }
      })
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch'});
        }
      });
    },
  },
};
