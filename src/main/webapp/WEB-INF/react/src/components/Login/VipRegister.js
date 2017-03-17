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

let VipRegister = React.createClass({
  getInitialState: function() {
    return {
      username:'',
      password:'',
      name:'',
      gender:'f',
      phone:'',
      credit:'',
      error:0
    };
  },
  handleClick: function () {
    const {username,password,name,gender,phone,credit} = this.state;
    if(username == '' || password == '' || name == ''|| gender == '' || phone == '' || credit == ''){
      this.setState({error:1});
    }else{
      this.props.handle(this.state);
    }
  },

  render:function () {
    return (
      <Form style={{marginTop:'1em'}}>

        <FormItem label="用户名" {...formItemLayout}>
          <Input type="text" required="required"
                 onChange={(e) => {this.setState({username : e.target.value})}}/>
        </FormItem>

        <FormItem label="密码" {...formItemLayout}>
          <Input type="password"
                 onChange={(e) => {this.setState({password : e.target.value})}}/>
        </FormItem>

        <FormItem label="姓名" {...formItemLayout}>
          <Input type="text"
                 onChange={(e) => {this.setState({name : e.target.value})}} />
        </FormItem>

        <FormItem label="性别" {...formItemLayout}>
          <Select size={"large"} defaultValue="m"
                  onChange={(e) => {this.setState({gender : e})}}>
            <Select.Option value="m">男</Select.Option>
            <Select.Option value="f">女</Select.Option>
          </Select>
        </FormItem>

        <FormItem label="电话" {...formItemLayout} >
          <Input type="text"
                 onChange={(e) => {{this.setState({phone : e.target.value})}}}/>
        </FormItem>

        <FormItem label="银行卡号" {...formItemLayout}>
          <Input type="text"
                 onChange={(e) => {this.setState({credit : e.target.value})}}/>
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

module.exports =  VipRegister;
