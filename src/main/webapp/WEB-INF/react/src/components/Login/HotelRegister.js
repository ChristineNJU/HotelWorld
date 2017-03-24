/**
 * Created by christine on 2017/3/17.
 */
import React from 'react';
import { Form,Input,Select,Button,Alert } from 'antd';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4},
  wrapperCol: { span: 8 },
};

let HotelRegister = React.createClass({
  getInitialState: function() {
    return {
      username:'',
      password:'',
      name:'',
      city:'南京',
      address:'',
      bank:'',
      error:0,
    };
  },
  handleClick: function () {
    const {username,password,name,city,address,bank} = this.state;
    if(username == '' || password == '' || name == ''|| city == '' || address == '' || bank == ''){
      this.setState({error:1});
    }else{
      // console.log(this.state);
      this.props.handle(this.state);
    }
  },

  render:function () {
    return (
      <Form style={{marginTop:'1em'}}>

        <FormItem label="登录名" {...formItemLayout}>
          <Input type="text" required="required"
                 onChange={(e) => {this.setState({username : e.target.value})}}/>
        </FormItem>

        <FormItem label="密码" {...formItemLayout}>
          <Input type="password"
                 onChange={(e) => {this.setState({password : e.target.value})}}/>
        </FormItem>

        <br/>

        <FormItem label="客栈名" {...formItemLayout}>
          <Input type="text"
                 onChange={(e) => {this.setState({name : e.target.value})}} />
        </FormItem>

        <FormItem label="城市" {...formItemLayout}>
          <Select size={"large"} defaultValue="南京"
                  onChange={(e) => {this.setState({city : e})}}>
            <Select.Option value="南京">南京</Select.Option>
            <Select.Option value="上海">上海</Select.Option>
            <Select.Option value="杭州">杭州</Select.Option>
          </Select>
        </FormItem>

        <FormItem label="地址" {...formItemLayout} >
          <Input type="text"
                 onChange={(e) => {{this.setState({address : e.target.value})}}}/>
        </FormItem>

        <FormItem label="银行卡号" {...formItemLayout}>
          <Input type="text"
                 onChange={(e) => {this.setState({bank : e.target.value})}}/>
        </FormItem>

        {this.state.error == 1 ?
          <FormItem label="" {...formItemLayout}>
            <Alert style={{width:'400px'}} message="请将以上信息填写完整" type="error"/>
          </FormItem>
          : ''}

        <FormItem label="" {...formItemLayout}>
          <Button type="primary" onClick={this.handleClick}>注册</Button>
        </FormItem>

      </Form>
    )
  }
});

module.exports =  HotelRegister;
