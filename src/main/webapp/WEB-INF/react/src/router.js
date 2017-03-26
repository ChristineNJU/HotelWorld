import React from 'react';
import { Router } from 'dva/router';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/users'));
          cb(null, require('./routes/Users'));
        });
      },
    },
    {
      path: '/hotel/:id',
      name: 'HotelDetail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/HotelSingle'));
        });
      },
    },
    {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/Login'));
        });
      },
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/UserCenter'));
        });
      },
    },
    {
      path: '/uservip',
      name: 'uservip',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/UserVip'));
        });
      },
    },
    {
      path: '/userorders',
      name: 'userorders',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/UserOrder'));
        });
      },
    },
    {
      path: '/hotelinfo',
      name: 'hotelinfo',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelInfo'));
        });
      },
    },
    {
      path: '/hotelroom',
      name: 'hotelroom',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelRoom'));
        });
      },
    },{
      path: '/hotelcheckin',
      name: 'hotelcheckin',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelCheckin'));
        });
      },
    },{
      path: '/hotelcurrent',
      name: 'hotelcurrent',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelCurrent'));
        });
      },
    },{
      path: '/hotelorders',
      name: 'hotelorders',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelOrder'));
        });
      },
    },{
      path: '/hotelbefore',
      name: 'hotelbefore',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelBefore'));
        });
      },
    },{
      path: '/hotelfinance',
      name: 'hotelfinance',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelFinance'));
        });
      },
    },{
      path: '/hotelinvalid',
      name: 'hotelinvalid',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/HotelInvalid'));
        });
      },
    },{
      path: '/admincheck',
      name: 'admincheck',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/AdminCheck'));
        });
      },
    },{
      path: '/admingive',
      name: 'admingive',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/AdminGive'));
        });
      },
    },{
      path: '/adminmoney',
      name: 'adminmoney',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          // registerModel(app, require('./models/users'));
          cb(null, require('./routes/AdminMoney'));
        });
      },
    }

  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
