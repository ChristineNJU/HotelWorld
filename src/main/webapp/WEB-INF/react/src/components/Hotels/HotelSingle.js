/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import {Icon,Card,Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
const {RangePicker } = DatePicker;
import styles from './HotelSingle.css'


function HotelSingle({location,detail}) {
  console.log(detail);
  const formItemLayout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 8 },
  };

  return(
    <div className={styles.main}>
      <h3>龙门客栈 南京分部</h3>
      <p><Icon type="location" />南京</p>
      <br/>
      <br/>
      <p className={styles.label}>房间类型</p>
      <div className={styles.roomWrapper}>
        <RoomType price={123} number={1}/>
        <RoomType price={123} number={1}/>
        <RoomType price={123} number={1}/>
      </div>
      <br/>
      <br/>
      <p className={styles.label}>预定房间</p>
      <Form style={{marginTop:'1em'}}>
        <FormItem label="价格" {...formItemLayout}>
          <Select size={"large"} style={{width:'200px'}}
                  defaultValue="1"
          >
            <Option value="1">￥123</Option>
            <Option value="2">￥2333</Option>
            <Option value="3">￥54</Option>
            <Option value="4">￥78</Option>
          </Select>
        </FormItem>

        <FormItem label="时间" {...formItemLayout}>
          <RangePicker size={"large"} disabledDate={disabledDate}/>
        </FormItem>

        <FormItem label="数量" {...formItemLayout}>
          <InputNumber size={"large"} style={{width:'200px'}}
            defaultValue={1}/>
        </FormItem>

        <FormItem >
          <Button type="primary" htmlType="submit" size="large" style={{fontWeight:'lighter'}}>预定</Button>
        </FormItem>
      </Form>
    </div>
  )
}

function RoomType({price,number}){
  return(
    <Card className={styles.room}>
      <p className={styles.price}>￥{price}</p>
      <p className={styles.number}>数量：{number}</p>
    </Card>
  )
}

function disabledDate(current) {
  // can not select days before today and today
  return current && current.valueOf() < Date.now();
}

export default  HotelSingle;
