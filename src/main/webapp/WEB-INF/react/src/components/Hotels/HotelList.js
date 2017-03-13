/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { Row, Col,DatePicker,InputNumber,Input,Table } from 'antd';
const {RangePicker } = DatePicker;
const InputGroup = Input.Group;
import styles from './HotelList.css';
import Link from 'dva';

function HotelList({ location }) {
  return (
    <div>
      <Row gutter={8} className={styles.selectors}>
        <Col className="gutter-row" span={12} >
          <div className={styles.selector}>
            <RangePicker onChange={onChange} style={{border:"none"}} disabledDate={disabledDate}/>
          </div>
        </Col>
        <Col className="gutter-row" span={12} >
          <div className={styles.right}>
            <InputGroup compact>
              <InputNumber style={{ width: '30%',border:'none',outline:'none'}} placeholder="最低价格" />
              <InputNumber style={{ width: '30%',border:'none',outline:'none'}} placeholder="最高价格" />
            </InputGroup>
          </div>
        </Col>
      </Row>
      <div className={styles.tableWrapper}>
        <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  );
}

function disabledDate(current) {
  // can not select days before today and today
  return current && current.valueOf() < Date.now();
}

function onChange() {
  console.log('change');
}

function onAfterChange(){
  console.log('afterChange');
}

const data = [{
  key:'1',
  name:'龙门客栈',
  city:'南京',
  number:1,
  price:'111',
}];

const columns = [{
  title: '客栈',
  dataIndex: 'name',
  key: 'name',
  render: (text, row, index) => {
    // console.log(row);
    return <a href={row.key}>{text}</a>
  },
}, {
  title: '地点',
  dataIndex: 'city',
  key: 'city',
}, {
  title: '房间数',
  dataIndex: 'number',
  key: 'number',
},{
  title: '价格',
  dataIndex: 'price',
  key: 'price',
}];

export default HotelList;
