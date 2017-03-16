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
      path: '/hotelorder',
      name: 'hotelorder',
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
    }

  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
