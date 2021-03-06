/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { Row, Col,DatePicker,InputNumber,Input,Table,Button } from 'antd';
import { connect } from 'dva';
import HotelList from '../Hotels/HotelList';
import styles from './user.css';

function Orders({dispatch,orders}) {

  const columns = [{
    title: '客栈名称',
    dataIndex: 'hotelname',
    key: 'hotelname',
    render: (text, row, index) => {
      // console.log(row);
      return <a href={'/hotel/'+row.hotelid}>{text}</a>
    },
  }, {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    render:(text,row,index) => {
      return row.begin+' ~ '+row.end;
    }
  },{
    title: '价格',
    dataIndex: 'price',
    key: 'price',
  },{
    title: '房间号',
    dataIndex: 'roomname',
    key: 'roomname',
  },{
    title:'操作',
    dataIndex:'operation',
    key:'operation',
    render:(text,row,index) => {
      switch (row.status) {
        case 0:
          return <Button onClick={() => handleCancel(row)}>取消订单</Button>;
        case 1:
          return '已取消';
        case 2:
          return '已过期';
        case 3:
          return '已入住';
        case 4:
          return '已退房';
        default:
          return '';
      }
    }
  }];

  function handleCancel(order){
    // console.log(order);
    dispatch({
      type:'order/vipCancel',
      payload:{
        order:order
      }
    })

  }

  console.log(orders);
  return(
    <div>
      <Table columns={columns} dataSource={orders} style={{fontSize:'0.5em'}}/>
    </div>
  );


}

const data = [{
  id:'1',
  key:1,
  hotelid:1,
  hotelname:'龙门客栈',
  city:'南京',
  number:1,
  price:'111',
  begintime:'2017.01.01',
  endtime:'2017.01.03',
  status:1,
  roomname:'121',
}];

function mapStateToProps(state) {
  return {orders:state.order.orders};
}

export default connect(mapStateToProps)(Orders);
