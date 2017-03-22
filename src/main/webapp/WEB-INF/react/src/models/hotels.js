import * as searchService from '../services/hotels';

export default {
  namespace: 'hotels',
  state: {
    list:[],
    city:null,
    keyword:null,
  },
  reducers: {
    init(state,{payload:{list}}){
      return {...state,list};
    },
    changeCity(state,{payload:{city}}){
      return {...state,city};
    },
    changeKeyword(state,{payload:{keyword}}){
      // console.log('in reducer');
      // console.log(keyword);
      return {...state,keyword}
    }
  },
  effects: {
    *fetch({payload}, { call, put }){
      const {data} = yield call(searchService.fetch,{queryString:payload.queryString});
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
          console.log('in set up index');
          dispatch({
            type: 'fetch',
            payload:{queryString:''},
          });
        }

      });
    },
  },
};
