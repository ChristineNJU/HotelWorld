/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select,Row,Alert} from 'antd';
const FormItem = Form.Item;
import { connect} from 'dva';
import styles from './user.css';

function Vip({dispatch,user,moneySuccess,inputValue,creditValue}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };
  let statusMap = ['未激活','正常','暂停','停止'];

  function pointsToMoney() {
    console.log('in handle');
    dispatch({
      type:'user/pointsToMoney'
    })
  }

  function inputNumberChange(e) {
    dispatch({
      type:'user/inputValueChange',
      payload:{
        inputValue:e,
      }
    })
  }

  function addMoney() {
    console.log(inputValue);
    dispatch({
      type:'user/addMoney',
      payload:{
        amount:inputValue,
      }
    })
  }

  function Notice() {
    // console.log(moneySuccess);
    if (moneySuccess === null)
      return <div></div>;
    if (moneySuccess > 1)
      return <Alert message="余额增加成功" type="success" className={styles.notice}/>;
    if (moneySuccess === 0)
      return <Alert message="余额增加失败，请重新尝试" type="error" className={styles.notice}/>;
  }

  function creditChange(e) {
    // console.log(e);
    dispatch({
      type:'user/creditChange',
      payload:{
        value:e.target.value
      }
    })
  }

  function confirmCreditChange() {
    dispatch({
      type:'user/changeCredit',
      payload:{
        credit:creditValue,
        username:localStorage.getItem("username")
      }
    })
  }

  function cancelDelete() {
    dispatch({
      type:'user/deleteVip',
      payload:{
      },
    })
  }


  return(
    <div>
      <Notice/>
      <Form style={{fontSize:'0.75em'}}>
        <FormItem label="会员卡号" {...formItemLayout}>
          <p className={styles.info}>{user.id}</p>
        </FormItem>

        <FormItem label="会员状态" {...formItemLayout}>
          <div>
          <p className={styles.info}>
            {statusMap[user.status]}
            {user.status == 1?<Button  style={{fontWeight:'lighter',marginLeft:'20px'}}
                                      onClick={cancelDelete}>停止会员</Button>:''}
          </p>

          </div>
        </FormItem>

        <FormItem label="会员级别" {...formItemLayout}>
          <p className={styles.info}>{user.level}</p>
        </FormItem>

        <FormItem label="会员积分" {...formItemLayout}>
          <div style={{display:'flex',flexDirection:'row'}}>
          <p className={styles.info}>{user.points}</p>
            {user.points == 0
              ? <Button disabled={true} type="primary" size="small" style={{fontWeight:'lighter',marginLeft:'20px'}}>积分兑换余额</Button>
              : <Button onClick={pointsToMoney} type="primary" size="small" style={{fontWeight:'lighter',marginLeft:'20px'}}>积分兑换余额</Button>
            }

          </div>
        </FormItem>

        <br/>
        <br/>
        <br/>

        <FormItem label="账户余额" {...formItemLayout}>
          <p className={styles.info}>{user.money}</p>
        </FormItem>

        <FormItem label="银行卡号" {...formItemLayout}>
          <p className={styles.info}>{user.credit}</p>
        </FormItem>


        <br/>
        <br/>
        <br/>

        <FormItem label="充值余额" {...formItemLayout}>
          <div style={{display:'flex',justifyContent:'flex-start'}}>
            <InputNumber style={{width:'200px'}} size="large" onChange={inputNumberChange} value={inputValue==null?'':inputValue}>{inputValue}</InputNumber>
            <Button type="primary"  style={{fontWeight:'lighter'}} onClick={addMoney}>充值</Button>
          </div>
        </FormItem>

        <FormItem label="换银行卡" {...formItemLayout}>
          <div style={{display:'flex',justifyContent:'flex-start'}}>
            <Input style={{width:'200px',marginRight:'10px'}} size="large" onChange={creditChange} value={creditValue==null?'':creditValue}/>
            <Button type="primary"  style={{fontWeight:'lighter'}} onClick={confirmCreditChange}>确定</Button>
          </div>
        </FormItem>

      </Form>
    </div>
  )
}


function mapStateToProps(state) {
  // console.log(state.user);
  return {
    loading:state.loading.models.user,
    user:state.user.user,
    moneySuccess:state.user.moneySuccess,
    inputValue:state.user.inputValue,
    creditValue:state.user.creditValue
  }
}

export default connect(mapStateToProps)(Vip);
