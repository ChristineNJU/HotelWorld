/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
import { connect } from 'dva';
import styles from './user.css';

function Info({location,user}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };
  console.log(user);

  return(
    <Form style={{}}>
      <FormItem label="用户名" {...formItemLayout}>
        <p style={{textAlign:'left'}}>{user.username}</p>
      </FormItem>

      <FormItem label="姓名" {...formItemLayout}>
        <p style={{textAlign:'left'}}>{user.name}</p>
      </FormItem>

      <FormItem label="性别" {...formItemLayout}>
        <p style={{textAlign:'left'}}>{user.gender == 'f' ? '男' : '女'}</p>
      </FormItem>

      <FormItem label="手机号" {...formItemLayout}>
        <p style={{textAlign:'left'}}>{user.phone}</p>
      </FormItem>

      <FormItem label="银行卡号" {...formItemLayout}>
        <p style={{textAlign:'left'}}>{user.credit}</p>
      </FormItem>
    </Form>
  )
}

function mapStateToProps(state) {
  return {
    loading:state.loading.models.user,
    user:state.user.user,
  }
}

export default connect(mapStateToProps)(Info);
