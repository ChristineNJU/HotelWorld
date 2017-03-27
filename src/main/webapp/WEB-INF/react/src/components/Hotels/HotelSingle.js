/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { connect } from 'dva';
import {Icon,Card,Form,Button,Input,Table,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
const {RangePicker } = DatePicker;
import styles from './HotelSingle.css'
import moment from 'moment';


function HotelSingle({dispatch,info,rooms,hasLogin,roomShow,query,order,discount,money,hotelOrders,userType}) {
  const formItemLayout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 8 },
  };
  const columns = [{
    title: '房间号',
    dataIndex: 'roomname',
    key: 'roomname',
  }, {
    title: '房间价格',
    dataIndex: 'price',
    key: 'price',
  },{
    title: '会员号',
    dataIndex: 'vipNumber',
    key: 'vipNumber',
  },{
    title: '住客手机',
    dataIndex: 'phone',
    key: 'phone',
  },{
    title: '时间',
    dataIndex: 'timestart',
    key: 'timestart',
    render:(text,row,index) =>{
      return row.begin + ' ~ '+row.end;
    }
  },{
    title:'状态',
    dataIndex:'operation',
    key:'dataIndex',
    render:(text,row,index)=>{
      switch(row.status){
        case 0:
          return(
            '未入住'
          );
        case 1:
          return '顾客已取消';
        case 2:
          return '过期已取消';
        case 3:
          return '正在入住';
        case 4:
          return '已离店';
      }
    }
  }];
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

  console.log(hotelOrders);
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
              <span style={{color:'#FE745F'}}>原价 * {discount}</span>
            </FormItem>
            <FormItem label="余额" {...formItemLayout}>
              <span style={{color:'#FE745F'}}>{money}</span>
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
                  {order.price * order.count * query.gap * discount}
                </span>
              </p>
              <br/>
              <Button type="primary" htmlType="submit" size="large" style={{fontWeight:'lighter'}}
                      disabled={money < order.price * order.count * query.gap * discount}
                      onClick={handleClick}>预定</Button>
            </FormItem>
            :''}

          </Form>

        </div>
        :''
      }
      {userType == 3 ?
        <Table columns={columns} dataSource={hotelOrders}/>
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
  const {orders} = state.order.hotelOrders;
  // console.log( state.order);
  // console.log( state.order.hotelOrders);
  const{discount,money} = state.user.user;
  const userType = localStorage.getItem("userType");
  return {
    loading: state.loading.models.hotels,
    info,rooms,hasLogin,roomShow,query,order,discount,money,hotelOrders:state.order.hotelOrders,userType
  };

}

export default  connect(mapStateToProps)(HotelSingle);
