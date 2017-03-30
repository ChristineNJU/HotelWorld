/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import { Table,Button } from 'antd';
import { connect } from 'dva';

function HotelCurrent({dispatch,current}){

  function hotelCheckOut(order) {
    dispatch({
      type:'order/hotelCheckOut',
      payload:{
        order:order
      }
    })
  }

  const columns = [{
    title: '房间号',
    dataIndex: 'roomname',
    key: 'roomname',
  }, {
    title: '房间价格',
    dataIndex: 'price',
    key: 'price',
  }, {
    title: '会员号',
    dataIndex: 'vipNumber',
    key: 'vipNumber',
  },{
    title: '住客手机',
    dataIndex: 'phone',
    key: 'phone',
  }, {
    title: '入住人',
    dataIndex: 'peoplename',
    key: 'peoplename',
  },{
    title: '时间',
    dataIndex: 'timestart',
    key: 'timestart',
    render:(text,row,index) =>{
      return row.begin + ' ~ '+row.end;
    }
  },{
    title:'操作',
    dataIndex:'operation',
    key:'dataIndex',
    render:(text,row,index)=>{
      return(
          <Button onClick={() => {hotelCheckOut(row)}}>离店</Button>
      );
    }
  }];

  return (
    <div>
      <Table columns={columns} dataSource={current} style={{fontSize:'0.5em'}}/>
    </div>
  )
}


function mapStateToProps(state) {
  return {current:state.order.hotelCurrent};
}

export default connect(mapStateToProps)(HotelCurrent);
