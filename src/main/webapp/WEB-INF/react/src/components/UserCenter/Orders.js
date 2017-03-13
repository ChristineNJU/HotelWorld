/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { Row, Col,DatePicker,InputNumber,Input,Table,Button } from 'antd';
import { connect } from 'dva';
import styles from './user.css';

const columns = [{
  title: '客栈',
  dataIndex: 'name',
  key: 'name',
  render: (text, row, index) => {
    // console.log(row);
    return <a href={row.hotelId}>{text}</a>
  },
}, {
  title: '地点',
  dataIndex: 'city',
  key: 'city',
}, {
  title: '房间数',
  dataIndex: 'number',
  key: 'number',
},{
  title: '价格',
  dataIndex: 'price',
  key: 'price',
},{
  title: '入住时间',
  dataIndex: 'time',
  key: 'time',
},{
  title:'操作',
  dataIndex:'operation',
  key:'operation',
  render:(text,row,index) => {
    return row.status == 0 ? <Button>取消订单</Button> : '';
  }
}];


function Orders({location}) {
  return(
    <div>
      <Table columns={columns} dataSource={data} style={{fontSize:'0.5em'}}/>
    </div>
  )
}

const data = [{
  key:'1',
  name:'龙门客栈',
  city:'南京',
  number:1,
  price:'111',
  time:'2017.01.01 - 2017.01.03',
  hotelId:1,
  status:0,
},{
  key:'2',
  name:'龙门客栈',
  city:'北京',
  number:1,
  price:'111',
  time:'2017.01.01 - 2017.01.03',
  hotelId:1,
  status:1,
}];

export default Orders;
