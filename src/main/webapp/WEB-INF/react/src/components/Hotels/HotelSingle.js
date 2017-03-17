/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { connect } from 'dva';
import {Icon,Card,Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
const {RangePicker } = DatePicker;
import styles from './HotelSingle.css'


function HotelSingle({location,info,rooms}) {
  const formItemLayout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 8 },
  };

  console.log(rooms);
  return(
    <div className={styles.main}>
      <h3>{info.name}</h3>
      <p><Icon type="location" />{info.city} {info.address}</p>
      <br/>
      <br/>
      <p className={styles.label}>房间类型</p>
      <div className={styles.roomWrapper}>
        {rooms.map((value,index) => {
          return <RoomType price={value.price} number={value.count} key={index}/>
        })}
      </div>
      <br/>
      <br/>
      <p className={styles.label}>预定房间</p>
      <Form style={{marginTop:'1em'}}>

        <FormItem label="时间" {...formItemLayout}>
          <RangePicker size={"large"} disabledDate={disabledDate}/>
        </FormItem>

        <FormItem label="价格" {...formItemLayout}>
          <Select size={"large"} style={{width:'200px'}}
                  defaultValue="1"
          >
            <Select.Option value="1">￥123</Select.Option>
            <Select.Option value="2">￥2333</Select.Option>
            <Select.Option value="3">￥54</Select.Option>
            <Select.Option value="4">￥78</Select.Option>
          </Select>
        </FormItem>

        <FormItem label="数量" {...formItemLayout}>
          <Select size={"large"} style={{width:'200px'}}
                  defaultValue="1"
          >
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
            <Select.Option value="4">4</Select.Option>
          </Select>
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
      <p className={styles.number}>总数：{number}</p>
    </Card>
  )
}

function disabledDate(current) {
  // can not select days before today and today
  return current && current.valueOf() < Date.now();
}

function mapStateToProps(state) {
  const { info,rooms } = state.hotel;
  return {
    loading: state.loading.models.hotels,
    info,rooms
  };
}

export default  connect(mapStateToProps)(HotelSingle);
