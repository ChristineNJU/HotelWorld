/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import {Form,Input,Button} from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4},
  wrapperCol: { span: 8 },
};


export default function AdminLogin({handle,username,password}) {
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

      <FormItem label="登录名" {...formItemLayout}>
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
