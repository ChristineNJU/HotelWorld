/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Table} from 'antd';

function HotelFinance({locatiion}){
  return (
    <div>
      <Table columns={columns} dataSource={data} style={{fontSize:'0.5em'}}/>
    </div>
  )
}

const columns = [{
  title: '金额',
  dataIndex: 'money',
  key: 'money',
},{
  title: '结算时间',
  dataIndex: 'time',
  key: 'time',
}];

const data = [{
  key:3,
  time:'2017.01.02',
  money:'123'
},{
  key:2,
  time:'2017.02.02',
  money:'213',
}];

export default HotelFinance;
