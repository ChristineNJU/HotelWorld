/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
import { connect } from 'dva';
import styles from './user.css';

function Info({location}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  return(
    <Form style={{}}>
      <FormItem label="姓名" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>

      <FormItem label="性别" {...formItemLayout}>
        <Select size={"large"} style={{width:'100%'}}
                defaultValue="男"
        >
          <Option value="男">男</Option>
          <Option value="女">女</Option>
        </Select>
      </FormItem>

      <FormItem label="手机号" {...formItemLayout}>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
          <Input type="text"/>
        </div>
      </FormItem>

      <FormItem label="身份证号" {...formItemLayout}>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
          <Input type="text"/>
        </div>
      </FormItem>

      <FormItem  {...formItemLayout}>
        <div style={{marginLeft:'5.2em',display:'flex',justifyContent:'flex-start'}}>
          <Button type="primary" htmlType="submit" size="large" style={{fontWeight:'lighter'}}>修改</Button>
        </div>
      </FormItem>
    </Form>
  )
}

export default Info;
