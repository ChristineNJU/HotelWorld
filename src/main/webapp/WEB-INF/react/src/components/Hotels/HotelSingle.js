/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { connect } from 'dva';
import {Icon,Card,Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
const {RangePicker } = DatePicker;
import styles from './HotelSingle.css'
import moment from 'moment';


function HotelSingle({dispatch,info,rooms,hasLogin,roomShow,query,order}) {
  const formItemLayout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 8 },
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
        count:order.count
      }
    })
  }

  function countChange(e) {
    dispatch({
      type:'order/orderChange',
      payload:{
        price:order.price,
        count:e
      }
    })
  }

  function handleClick() {
    dispatch({
      type:'order/orderConfirm',
      payload:{
        hotelId:info.id,
        begin:query.begin,
        end:query.end,
        price:order.price,
        count:order.count
      }
    })
  }

  function CountSelect() {
    let list = [];
    for(let i = 1;i <= roomShow[order.price];i++){
      list.push(<Select.Option value={i}>{i}</Select.Option>);
    }
    return (
      <Select size={"large"} style={{width:'200px'}}
              onChange={countChange}
              value={order.count}
      >
        {list}
      </Select>
    )
  }

  const defaultTimeRange = query.begin != null
    ?[moment(query.begin, dateFormat), moment(query.end, dateFormat)]
    :null;

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
      { hasLogin == true ?
        <div>
          <p className={styles.label}>预定房间</p>
          <Form style={{marginTop:'1em'}}>
            <FormItem label="折扣" {...formItemLayout}>
              <span style={{color:'#FE745F'}}>0.9折</span>
            </FormItem>

            <FormItem label="时间" {...formItemLayout}>
              <RangePicker size={"large"} disabledDate={disabledDate} onChange={dateChange}
                           defaultValue={defaultTimeRange}
                           format={'YYYY-MM-DD'}
              />
            </FormItem>

            {roomShow != null ?
              <FormItem label="价格" {...formItemLayout}>
              <Select size={"large"} style={{width:'200px'}}
                      onChange={priceChange}
              >
              {Object.keys(roomShow).map((value) =>{
                return <Select.Option value={value}>￥{value}</Select.Option>
              })}
              </Select>
              </FormItem>
              :''}

            {roomShow != null && order.price != null?
              <FormItem label="数量" {...formItemLayout}>
                <CountSelect/>
              </FormItem>
            :''}

            {roomShow != null && order.price != null ?
            <FormItem >
              <p>价格:
                <span style={{color:'#FE745F'}}>
                  {order.price * order.count * query.gap}
                </span>
              </p>
              <br/>
              <Button type="primary" htmlType="submit" size="large" style={{fontWeight:'lighter'}}
                      onClick={handleClick}>预定</Button>
            </FormItem>
            :''}

          </Form>
        </div>
        :''
      }

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
  let date = new Date(Date.now());
  date.setMonth(date.getMonth()+1);
  return current && current.valueOf() < Date.now() || current.valueOf() > date;
}

function mapStateToProps(state) {
  const { info,rooms,hasLogin } = state.hotel;
  const {roomShow,query,order} = state.order;
  // console.log(order);
  return {
    loading: state.loading.models.hotels,
    info,rooms,hasLogin,roomShow,query,order
  };

}

export default  connect(mapStateToProps)(HotelSingle);
