/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import { Table,Button } from 'antd';
import {connect} from 'dva';

function AdminCheck({dispatch,checking}) {

  function checked(hotelId) {
      dispatch({
        type:'hotel/infoChecked',
        payload:{
          hotelId:hotelId
        }
      })
  }

  console.log(checking);

  const columns = [{
    title: '客栈名字',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  }, {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },{
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    render:(text,row,index)=>{
      return row.display == 2 ?'修改':'新开';
    }
  },{
    title:'操作',
    dataIndex:'operation',
    key:'dataIndex',
    render:(text,row,index)=>{
      return(

        <Button onClick={() => {checked(row.id)}}>
          {row.display == 2 ? '允许修改' :'允许开店'}
        </Button>

      );
    }
  }];

  return (
    <div>
      <Table columns={columns} dataSource={checking} style={{fontSize:'0.5em'}}/>
    </div>
  )
}

function mapStateToProps(state) {
  return  {checking:state.hotels.checkingList}
}

export default connect(mapStateToProps)(AdminCheck);
