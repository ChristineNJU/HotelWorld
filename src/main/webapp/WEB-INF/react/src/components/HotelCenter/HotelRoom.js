/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import { Table,Button,Switch } from 'antd';
import RoomModal from './RoomModal';
import { connect } from 'dva';

function HotelRoom({dispatch,rooms}){

  function createHandler(values) {
    dispatch({
      type:'room/createRoom',
      payload:{
        values:values
      }
    })
  }

  function statusChange(e,roomid){
    console.log(e,roomid);
    dispatch({
      type:'room/statusChange',
      payload:{
        status:e === true?1:0,
        roomid:roomid,
      }
    })
  }

  const columns = [{
    title: '房间号',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '房间价格',
    dataIndex: 'price',
    key: 'price',
  }, {
    title:'操作',
    dataIndex:'operation',
    key:'dataIndex',
    render:(text,row,index)=>{
      return(
        <Switch style={{fontWeight:'lighter'}}
                onChange={(e) => {statusChange(e,row.id)}}
          checkedChildren="使用" unCheckedChildren="停用" defaultChecked={row.status === 1}/>
      );
    }
  }];

  return (
    <div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginBottom:'20px'}}>
        <RoomModal record={{}} onOk={createHandler}>
          <Button type="primary">新建房间</Button>
        </RoomModal>
      </div>
      <Table columns={columns} dataSource={rooms} style={{fontSize:'0.5em'}}/>
    </div>
  )
}


function mapStateToProps(state) {
  return {rooms:state.room.rooms};
}

export default connect(mapStateToProps)(HotelRoom);
