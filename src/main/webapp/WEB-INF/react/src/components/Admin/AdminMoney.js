/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import {connect} from 'dva';
import {Button,Form,Table,InputNumber,Row} from 'antd';

function AdminMoney({dispatch,bills}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  const columns = [{
    title: '结账日期',
    dataIndex: 'date',
    key: 'date',
  },{
    title: '结给客栈',
    dataIndex: 'give',
    key: 'give',
  },{
    title: '系统获利',
    dataIndex: 'reserve',
    key: 'reserve',
  },{
    title: '抽成',
    dataIndex: 'percent',
    key: 'percent',
  }];

  return (
    <div>
      <Table columns={columns} dataSource={bills} style={{fontSize:'0.5em'}}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {bills:state.bill.bills}
}

export default connect(mapStateToProps)(AdminMoney);
