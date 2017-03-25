/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import {Form,Button,Input,InputNumber,DatePicker,Select} from 'antd';
import styles from './HotelCenter.css';
const FormItem = Form.Item;
import {connect} from 'dva';


function HotelInfo({dispatch,info,infoChecking}){
  const formItemLayout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 12 },
  };

  function inputChange(newValue){
    dispatch({
      type:'hotel/checkingChange',
      payload:{
          newValue
      }
    })
  }

  function handleSubmit() {
    dispatch({
      type:'hotel/infoChange',
      payload:{
        name:infoChecking.name,
        city:infoChecking.city,
        address:infoChecking.address,
      }
    })
  }

  return (
    <Form style={{fontSize:'0.75em',display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
      <FormItem label="id" {...formItemLayout}>
        <p className={styles.info}>{infoChecking.hotelNumber}</p>
      </FormItem>

      <FormItem label="银行" {...formItemLayout}>
        <p className={styles.info}>{infoChecking.bank}</p>
      </FormItem>
      <br/>
      <br/>
      <br/>

      <label className={styles.label}>展示中</label>
      <FormItem label="名字" {...formItemLayout}>
        <p className={styles.info}>{info.name}</p>
      </FormItem>

      <FormItem label="城市" {...formItemLayout}>
        <p className={styles.info}>{info.city}</p>
      </FormItem>

      <FormItem label="地址" {...formItemLayout}>
        <p className={styles.info}>{info.address}</p>
      </FormItem>

      <br/>
      <br/>
      <br/>

      <label className={styles.label}>审核中</label>
      <FormItem label="名字" {...formItemLayout}>
        <Input type="text" value={infoChecking.name} onChange={(e) => {inputChange({name:e.target.value})}} />
      </FormItem>

      <FormItem label="城市" {...formItemLayout}>
        <Input type="text" value={infoChecking.city} onChange={(e) => {inputChange({city:e.target.value})}} />
      </FormItem>

      <FormItem label="地址" {...formItemLayout}>
        <Input type="text" value={infoChecking.address} onChange={(e) => {inputChange({address:e.target.value})}} />
      </FormItem>


      <br/>
      <br/>
      <br/>

      {infoChecking.name === '' || infoChecking.name === null || infoChecking.city === '' ||
        infoChecking.city === null || infoChecking.address === '' || infoChecking.address === null ? '' :
        <FormItem label="" {...formItemLayout} style={{textAlign:'left',paddingLeft:'40px'}}>
          <Button type="primary"  style={{fontWeight:'lighter'}} onClick={handleSubmit}>提交</Button>
        </FormItem>
      }
    </Form>
  )
}

function mapStateToProps(state) {
  return {
    info:state.hotel.info,
    infoChecking:state.hotel.infoChecking,
  }
}

export default connect(mapStateToProps)(HotelInfo);
