/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Table,Button } from 'antd';


function HotelCurrent({locatiion}){
  return (
    <div>
      <Table columns={columns} dataSource={data} style={{fontSize:'0.5em'}}/>
    </div>
  )
}

const columns = [{
  title: '房间号',
  dataIndex: 'roomid',
  key: 'roomid',
}, {
  title: '房间价格',
  dataIndex: 'price',
  key: 'price',
}, {
  title: '住客手机',
  dataIndex: 'phone',
  key: 'phone',
},{
  title: '入住时间',
  dataIndex: 'timestart',
  key: 'timestart',
},{
  title: '离店时间',
  dataIndex: 'timedepart',
  key: 'timedepart',
},{
  title:'操作',
  dataIndex:'operation',
  key:'operation',
  render:(text,row,index) => {
    return  <Button>离店</Button>;
  }
}];

const data = [{
  key:'1',
  roomid:'111',
  price:'123',
  phone:'11111111111',
  timestart:'2017.01.01',
  timedepart:'2017.01.03',
},{
  key:'2',
  roomid:'112',
  price:'123',
  phone:'12537265172',
  timestart:'2017.01.01',
  timedepart:'2017.01.03',
}];

export default HotelCurrent;
