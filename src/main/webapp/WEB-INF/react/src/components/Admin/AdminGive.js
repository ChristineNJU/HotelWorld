/**
 * Created by christine on 2017/3/25.
 */

import React from 'react';
import {connect} from 'dva';
import {Button,Form,Table,InputNumber,Row} from 'antd';
const FotmItem = Form.Item;


function AdminGive({dispatch}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  const columns = [{
    title: '客栈编号',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '客栈名字',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '营业额',
    dataIndex: 'type',
    key: 'type',
  }];

  return (
    <div>
      {/*<Form>*/}
        <Row label="抽成" {...formItemLayout}
                  style={{justifyContent:'flex-start',alignItems:'center',padding:'10px 0',display: 'flex'}}>
          <span>抽成：</span>
          <InputNumber style={{width:'20%',marginRight:'20px'}} size="large"/>
          <Button size="large">结账</Button>
        </Row>
      {/*</Form>*/}
      <Table columns={columns} style={{fontSize:'0.5em'}}/>
    </div>
  )
}

export default AdminGive;
