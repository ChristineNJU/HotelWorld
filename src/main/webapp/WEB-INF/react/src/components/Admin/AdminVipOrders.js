/**
 * Created by christine on 2017/3/27.
 */
import React from 'react';
import {Table,Button } from 'antd';
import {connect} from 'dva';


function AdminVipOrder({dispatch,orders}){

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
          return '未入住';
        case 1:
          return '会员已取消';
        case 2:
          return '过期已取消';
        case 3:
          return '正在入住';
        case 4:
          return '已离店';
      }
    }
  }];



  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <a href="/adminvip"
        style={{height:'30px',width:'100%',textAlign:'left'}}> &lt;- 返回所有会员</a>
      <Table  columns={columns} dataSource={orders} style={{fontSize:'0.5em'}}/>
    </div>
  )
}


function mapStateToProps(state) {
  // console.log(state.order.hotelOrdersYu);
  return {orders:state.order.orders};
}


export default connect(mapStateToProps)(AdminVipOrder);
