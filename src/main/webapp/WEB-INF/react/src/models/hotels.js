import * as searchService from '../services/hotels';

export default {
  namespace: 'hotels',
  state: {
    list:[],
    city:null,
    keyword:null,
    checkingList:[],
  },
  reducers: {
    init(state,{payload:{list}}){
      return {...state,list};
    },
    changeCity(state,{payload:{city}}){
      return {...state,city};
    },
    changeKeyword(state,{payload:{keyword}}){
      return {...state,keyword}
    },
    initChecking(state,{payload:{checkingList}}){
      return {...state,checkingList}
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
    *fetchChecking({payload},{call,put}){
      const {data} = yield call(searchService.fetch,{queryString:'?unchecked=true'});
      yield put({
        type:'initChecking',
        payload:{
          checkingList:data.hotels
        }
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetch',
            payload:{queryString:''},
          });
        }
        if(pathname === 'admincheck'){
          dispatch({
            type: 'fetchChecking'
          });
        }
      });
    },
  },
};
