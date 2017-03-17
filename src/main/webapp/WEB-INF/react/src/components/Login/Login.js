/**
 * Created by christine on 2017/3/16.
 */
import React from 'react';
import { Tabs,Form,Input,Button } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
import styles from './Login.css';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import Link from 'dva';

const formItemLayout = {
  labelCol: { span: 4},
  wrapperCol: { span: 8 },
};

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

  return(
    <div className={styles.wrapper}>
      <Tabs tabPosition={'left'}>
        <TabPane tab="会员" key="1">
          <Tabs  type="card">
            <TabPane tab="登录" key="1">
              <VipLogin handle={vipLogin} username={""} password={""}/>
            </TabPane>
            <TabPane tab="注册" key="2">
              <VipRegister/>
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

function VipLogin({handle,username,password}) {

  let values = {username:'',password:''};

  function userNameChange (e) {
    values.username = e.target.value;
  }

  function passwordChange (e) {
    values.password = e.target.value;
  }

  function handleClick() {
    // console.log(values);
    handle(values);
  }

  return (
    <Form style={{marginTop:'1em'}}>

      <FormItem label="用户名" {...formItemLayout}>
        <Input type="text" defaultValue={username} onChange={userNameChange}/>
      </FormItem>

      <FormItem label="密码" {...formItemLayout}>
        <Input type="password" defaultValue={password} onChange={passwordChange}/>
      </FormItem>
      <FormItem label="" {...formItemLayout}>
        <Button type="primary" onClick={handleClick}>登录</Button>
      </FormItem>
    </Form>
  )
}

function VipRegister() {
  return (<div>vip register</div>)
}

function HotelLogin() {
  return (<div>hotel login</div>)
}

function HotelRegister() {
  return (<div>hotel register</div>)
}

function AdminLogin() {
  return (<div>admin login</div>)
}
