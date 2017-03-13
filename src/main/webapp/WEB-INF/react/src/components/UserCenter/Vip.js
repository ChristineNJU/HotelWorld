/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
import { connect } from 'dva';
import styles from './user.css';

function Vip({location}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };
  return(
    <Form style={{fontSize:'0.75em'}}>
      <FormItem label="会员卡号" {...formItemLayout}>
        <p className={styles.info}>0000001</p>
      </FormItem>

      <FormItem label="会员状态" {...formItemLayout}>
        <p className={styles.info}>激活</p>
      </FormItem>

      <FormItem label="会员级别" {...formItemLayout}>
        <p className={styles.info}>1</p>
      </FormItem>

      <FormItem label="会员积分" {...formItemLayout}>
        <p className={styles.info}>123</p>
      </FormItem>

      <br/>
      <br/>
      <br/>

      <FormItem label="账户余额" {...formItemLayout}>
        <p className={styles.info}>123</p>
      </FormItem>

      <FormItem label="银行卡号" {...formItemLayout}>
        <p className={styles.info}>123222222222</p>
      </FormItem>


      <br/>
      <br/>
      <br/>

      <FormItem label="充值余额" {...formItemLayout}>
        <div style={{display:'flex',justifyContent:'flex-start'}}>
          <InputNumber style={{width:'120px'}} size="large">123222222222</InputNumber>
          <Button>充值</Button>
        </div>
      </FormItem>

    </Form>
  )
}

export default Vip;
