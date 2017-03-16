/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
import styles from './HotelCenter.css';
const FormItem = Form.Item;


function HotelInfo({locatiion}){
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  return (
    <Form style={{fontSize:'0.75em',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
      <label className={styles.label}>展示中</label>
      <FormItem label="名字" {...formItemLayout}>
        <p className={styles.info}>0000001</p>
      </FormItem>

      <FormItem label="城市" {...formItemLayout}>
        <p className={styles.info}>激活</p>
      </FormItem>

      <FormItem label="地址" {...formItemLayout}>
        <p className={styles.info}>1</p>
      </FormItem>

      <br/>
      <br/>
      <br/>
      <label className={styles.label}>审核中</label>
      <FormItem label="名字" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>

      <FormItem label="城市" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>

      <FormItem label="地址" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>


      <br/>
      <br/>
      <br/>

      <FormItem label="" {...formItemLayout} style={{textAlign:'left',paddingLeft:'40px'}}>
        {/*<div style={{display:'flex',justifyContent:'flex-start'}}>*/}
          {/*<InputNumber style={{width:'120px'}} size="large">123222222222</InputNumber>*/}
          <Button type="primary"  style={{fontWeight:'lighter'}}>提交</Button>
        {/*</div>*/}
      </FormItem>

    </Form>
  )
}

export default HotelInfo;
