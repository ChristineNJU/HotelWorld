/**
 * Created by christine on 2017/3/25.
 */

import React from 'react';
import {connect} from 'dva';
import {Button,Form,Table,InputNumber,Row} from 'antd';
const FotmItem = Form.Item;


function AdminGive({dispatch,benefits,percent}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  function percentChange(value) {
    dispatch({
      type:'bill/percentChange',
      payload:{
        percent:value
      }
    })
  }

  function createBill() {
    dispatch({
      type:'bill/createBill',
      payload:{
        percent:percent
      }
    })
  }

  const columns = [{
    title: '客栈编号',
    dataIndex: 'hotelNumber',
    key: 'hotelNumber',
  },{
    title: '客栈名字',
    dataIndex: 'hotelname',
    key: 'hotelname',
  },{
    title: '营业额',
    dataIndex: 'benefit',
    key: 'benefit',
  }];

  return (
    <div>
      <Row
                style={{justifyContent:'flex-start',alignItems:'center',padding:'10px 0',display: 'flex'}}>
        <span>抽成：</span>
        <InputNumber min={0} max={0.9} step={0.1} defaultValue={0.1}
                     style={{width:'20%',marginRight:'20px'}} size="large"
                      value={percent} onChange={percentChange}/>
        <Button size="large" onClick={createBill}>结账</Button>
      </Row>
      <Table columns={columns} dataSource={benefits} style={{fontSize:'0.5em'}}/>
    </div>
  )
}


function mapStateToProps(state) {
  return {benefits:state.bill.benefits,percent:state.bill.percent}
}

export default connect(mapStateToProps)(AdminGive);
