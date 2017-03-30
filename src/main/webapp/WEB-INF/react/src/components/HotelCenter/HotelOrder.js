/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Table,Button,Input } from 'antd';
import {connect} from 'dva';


function HotelOrder({dispatch,orders}){

  function checkIn({order,peoplename}){
    // console.log(order,peoplename);
    dispatch({
      type:'order/hotelCheckIn',
      payload:{
        order:order,
        peoplename:peoplename
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
            <Operation row={row} vipIn={checkIn} cancel={hotelCancel}/>
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

let Operation = React.createClass({
  getInitialState:function () {
    return{
      showInput:false,
      peoplename:''
    };
  },

  handleCancel:function (row) {
    // console.log(row);
    this.props.cancel(row);
  },

  handleSubmit:function () {
    this.props.vipIn({
      order:this.props.row,
      peoplename:this.state.peoplename
    })
  },

  handleShowInput:function () {
    this.setState(function(prevState, props){
      return({
        showInput:!prevState.showInput
      })
    })
  },

  inputChange(e){
    this.setState({
      peoplename:e.target.value
    })
  },

  render:function () {
    let row = this.props.row;

    return(
      <div>
        {this.state.showInput ?
          <div style={{display:'flex',flexDirection:'column'}}>
            <Input style={{width:'200px'}} type="text" value={this.state.peoplename} onChange={this.inputChange}/>
            <div style={{marginTop:'5px'}}>
            <Button style={{marginRight: '10px'}} onClick={this.handleShowInput}>取消</Button>
            <Button onClick={this.handleSubmit}>确定</Button>
            </div>
          </div>
          :
          <div>
            <Button onClick={this.handleShowInput}
                    style={{marginRight: '10px'}}>入住</Button>
            < Button onClick={() => {this.handleCancel(row)}}>过期取消</Button>
          </div>
        }
      </div>
    )
  }
});

function mapStateToProps(state) {
  // console.log(state.order.hotelOrdersYu);
  return {orders:state.order.hotelOrdersYu};
}


export default connect(mapStateToProps)(HotelOrder);
