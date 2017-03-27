/**
 * Created by christine on 2017/3/27.
 */
import React from 'react';
import {connect} from 'dva';
import {Table} from 'antd';
import {browserHistory} from 'dva/router';


function AdminVip({dispatch,vips}) {
  const columns = [{
    title: '会员号',
    dataIndex: 'vipNumber',
    key: 'vipNumber',
  },{
    title:'姓名',
    dataIndex:'name',
    key:'name'
  },{
    title:'会员级别',
    dataIndex:'level',
    key:'level'
  },{
    title:'余额',
    dateIndex:'money',
    key:'money',
    render:(text,row,index)=>{
      return row.money;
    }
  },{
    title:'电话',
    dataIndex:'phone',
    key:'phone'
  },{
    title:'性别',
    dataIndex:'gender',
    key:'gender',
    render:(text,row,index)=>{
      return text == 'f'?'女':'男'
    }
  }];

  function rowClick(record,index) {
    console.log(record,index);
    browserHistory.push(`/adminviporders/`+record.username);
  }

  return(
    <Table onRowClick={rowClick} columns={columns} dataSource={vips}/>
  )
}

function mapStateToProps(state) {
  return {vips:state.vip.vips};
}

export default connect(mapStateToProps)(AdminVip);
