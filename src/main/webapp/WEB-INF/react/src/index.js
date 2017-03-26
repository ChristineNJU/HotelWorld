import dva from 'dva';
import { browserHistory} from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';
import './index.html';
import './index.css';
// import 'antd/dist/antd.css'

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  history: browserHistory,
  onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());

app.model(require("./models/hotels"));

app.model(require("./models/room"));

app.model(require("./models/order"));

app.model(require("./models/user"));

app.model(require("./models/hotel"));

app.model(require("./models/session"));

// 3. Model
// Moved to router.js


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
