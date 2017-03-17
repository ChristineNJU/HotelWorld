/**
 * Created by christine on 2017/3/16.
 */
import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import styles from './Login.css';
import { connect } from 'dva';
import VipRegister from './VipRegister';
import VipLogin from './VipLogin';

function Login({dispatch}) {
  function vipLogin(values) {
    console.log(values);
    dispatch({
      type:'session/vipLogin',
      payload:{
        values
      }
    })
  }

  function vipRegister(values) {
    console.log(values);
    dispatch({
      type:'session/vipRegister',
      payload:{
        values
      }
    })
  }

  return(
    <div className={styles.wrapper}>
      <Tabs tabPosition={'left'}>
        <TabPane tab="会员" key="1">
          <Tabs  type="card">
            <TabPane tab="登录" key="1">
              <VipLogin handle={vipLogin} username={""} password={""}/>
            </TabPane>
            <TabPane tab="注册" key="2">
              <VipRegister handle={vipRegister}/>
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="客栈" key="2">
          <Tabs  type="card">
            <TabPane tab="登录" key="1">
              <HotelLogin/>
            </TabPane>
            <TabPane tab="注册" key="2">
              <HotelRegister/>
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane tab="管理" key="3">
          <Tabs  type="card">
            <TabPane tab="登录" key="1">
              <AdminLogin/>
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default connect()(Login);


function HotelLogin() {
  return (<div>hotel login</div>)
}

function HotelRegister() {
  return (<div>hotel register</div>)
}

function AdminLogin() {
  return (<div>admin login</div>)
}
