/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
const {RangePicker } = DatePicker;
import styles from './HotelCenter.css';
import {connect} from 'dva';
const FormItem = Form.Item;
import moment from 'moment';



function HotelCheckin({dispatch,info,rooms,hasLogin,roomShow,query,order}){
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };
  const dateFormat='YYYY-MM-DD';

  function dateChange(e){
    dispatch({
      type:'order/queryRoom',
      payload:{
        begin:e[0].format('YYYY-MM-DD'),
        end:e[1].format('YYYY-MM-DD'),
        gap:e[1].diff(e[0],'days'),
        hotelId:info.id
      }
    })
  }

  function priceChange(e) {
    dispatch({
      type:'order/orderChange',
      payload:{
        price:e,
        count:order.count,
        phone:order.phone
      }
    })
  }

  function countChange(e) {
    dispatch({
      type:'order/orderChange',
      payload:{
        price:order.price,
        count:e,
        phone:order.phone
      }
    })
  }

  function phoneChange(e) {
    let phone = e.target.value;
    dispatch({
      type:'order/orderChange',
      payload:{
        price:order.price,
        count:order.count,
        phone:phone,
      }
    });
  }

  function CountSelect() {
    let list = [];
    for(let i = 1;i <= roomShow[order.price];i++){
      list.push(<Select.Option key={i} value={i}>{i}</Select.Option>);
    }
    return (
      <Select size={"large"} style={{width:'100%'}}
              onChange={countChange}
              value={order.count}
      >
        {list}
      </Select>
    )
  }

  function handleSubmit() {
    dispatch({
      type:'order/orderConfirmByHotel',
      payload:{
        hotelId:info.id,
        begin:query.begin,
        end:query.end,
        price:order.price,
        count:order.count,
        phone:order.phone
      }
    })
  }

  const defaultTimeRange = query.begin != null
    ?[moment(query.begin, dateFormat), moment(query.end, dateFormat)]
    :null;

  return (
    <Form style={{fontSize:'0.75em',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
      <FormItem label="时间" {...formItemLayout}>
        <RangePicker className={styles.info}
                     style={{width:'100%'}}
                     disabledDate={disabledDate} onChange={dateChange}
                     defaultValue={defaultTimeRange}
                     format={'YYYY-MM-DD'}
        />
      </FormItem>

      {roomShow != null ?
      <FormItem label="房间类型" {...formItemLayout}>
        <Select size={"large"} style={{width:'100%'}}
                onChange={priceChange}
                value={order.price}
        >
          {Object.keys(roomShow).map((value) =>{
            return <Select.Option key={value} value={value}>￥{value}</Select.Option>
          })}
        </Select>
      </FormItem>
        :''}

      {roomShow != null && order.price != null?
        <FormItem label="数量" {...formItemLayout}>
          <CountSelect/>
        </FormItem>
        :''}


      {roomShow != null && order.price != null?
      <FormItem label="电话" {...formItemLayout}>
        <Input type="text" onChange={phoneChange} value={order.phone}/>
      </FormItem>
        :''}


      {roomShow != null && order.price != null?
      <FormItem label="价格" {...formItemLayout} style={{textAlign:'left',paddingLeft:''}}>
        <p>
          <span style={{color:'#FE745F'}}>
                  {order.price * order.count * query.gap}
                </span>
        </p>
        <br/>
        {order.phone != null && order.phone != '' ?
          <Button type="primary"  style={{fontWeight:'lighter'}} onClick={handleSubmit}>提交</Button>
          :''}
      </FormItem>
        :''}

    </Form>
  )
}



function disabledDate(current) {
  // can not select days before today and today
  let date = new Date(Date.now());
  date.setMonth(date.getMonth()+1);
  return current && current.valueOf() < Date.now() || current.valueOf() > date;
}


function mapStateToProps(state){
  const { info,rooms,hasLogin } = state.hotel;
  const {roomShow,query,order} = state.order;

  console.log(roomShow,query,order);
  return {
    loading: state.loading.models.hotel,
    info,rooms,hasLogin,roomShow,query,order
  };
}

export default connect(mapStateToProps)(HotelCheckin);
