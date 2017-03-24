/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Table } from 'antd';
import {connect} from 'dva';

function HotelBefore({dispatch,before}){

  const columns = [{
    title: '房间号',
    dataIndex: 'roomname',
    key: 'roomname',
  }, {
    title: '房间价格',
    dataIndex: 'price',
    key: 'price',
  }, {
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
  }];

  return (
    <div>
      <Table columns={columns} dataSource={before} style={{fontSize:'0.5em'}}/>
    </div>
  )
}


function mapStateToProps(state) {
  return {before:state.order.hotelBefore};
}

export default connect(mapStateToProps)(HotelBefore);
