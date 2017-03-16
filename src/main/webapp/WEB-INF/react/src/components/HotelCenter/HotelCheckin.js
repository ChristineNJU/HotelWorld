/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
import styles from './HotelCenter.css';
const FormItem = Form.Item;


function HotelCheckin({locatiion}){
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  return (
    <Form style={{fontSize:'0.75em',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
      <FormItem label="有无预定" {...formItemLayout}>
        <Select size={"large"} style={{width:'100%'}}
                defaultValue="有"
        >
          <Option value="1">有</Option>
          <Option value="0">无</Option>
        </Select>
      </FormItem>

      <FormItem label="会员号" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>

      <FormItem label="房间类型" {...formItemLayout}>
        <p className={styles.info}>1</p>
      </FormItem>

      <FormItem label="电话" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>

      <FormItem label="入住时间" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>

      <FormItem label="离店时间" {...formItemLayout}>
        <Input type="text"/>
      </FormItem>

      <FormItem label="" {...formItemLayout} style={{textAlign:'left',paddingLeft:''}}>
        <Button type="primary"  style={{fontWeight:'lighter'}}>提交</Button>
      </FormItem>

    </Form>
  )
}

export default HotelCheckin;
