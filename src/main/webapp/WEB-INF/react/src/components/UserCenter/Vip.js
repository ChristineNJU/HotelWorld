/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select,Row} from 'antd';
const FormItem = Form.Item;
import { connect } from 'dva';
import styles from './user.css';

function Vip({location,user}) {
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };
  let statusMap = ['未激活','正常','暂停','停止'];
  return(
    <Form style={{fontSize:'0.75em'}}>
      <FormItem label="会员卡号" {...formItemLayout}>
        <p className={styles.info}>{user.id}</p>
      </FormItem>

      <FormItem label="会员状态" {...formItemLayout}>
        <p className={styles.info}>{statusMap[user.status]}</p>
      </FormItem>

      <FormItem label="会员级别" {...formItemLayout}>
        <p className={styles.info}>{user.level}</p>
      </FormItem>

      <FormItem label="会员积分" {...formItemLayout}>
        <div style={{display:'flex',flexDirection:'row'}}>
        <p className={styles.info}>{user.points}</p>
        <Button type="primary" size="small" style={{fontWeight:'lighter',marginLeft:'20px'}}>积分兑换余额</Button>
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
          <InputNumber style={{width:'120px'}} size="large">123222222222</InputNumber>
          <Button type="primary"  style={{fontWeight:'lighter'}}>充值</Button>
        </div>
      </FormItem>

    </Form>
  )
}


function mapStateToProps(state) {
  return {
    loading:state.loading.models.user,
    user:state.user.user,
  }
}

export default connect(mapStateToProps)(Vip);
