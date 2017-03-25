/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Table,Button } from 'antd';
import {connect} from 'dva';


function HotelOrder({dispatch,orders}){

  function checkIn(order){
    dispatch({
      type:'order/hotelCheckIn',
      payload:{
        order:order
      }
    })
  }

  function hotelCancel(order) {
    console.log(order);
    dispatch({
      type:'order/hotelCancel',
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
    title:'操作',
    dataIndex:'operation',
    key:'dataIndex',
    render:(text,row,index)=>{
      switch(row.status){
        case 0:
          return(
            <div>
              <Button onClick={() => {checkIn(row)}}
                      style={{marginRight:'10px'}}>入住</Button>
              <Button onClick={() => {hotelCancel(row)}}>过期取消</Button>
            </div>
          );
        case 1:
          return '顾客已取消';
        case 2:
          return '过期已取消';
      }
    }
  }];

  return (
    <div>
      <Table columns={columns} dataSource={orders} style={{fontSize:'0.5em'}}/>
    </div>
  )
}

function mapStateToProps(state) {
  // console.log(state.order.hotelOrdersYu);
  return {orders:state.order.hotelOrdersYu};
}


export default connect(mapStateToProps)(HotelOrder);
