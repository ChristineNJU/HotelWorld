/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col,DatePicker,Input,Table,Select,Button } from 'antd';
const {RangePicker } = DatePicker;
const InputGroup = Input.Group;
import styles from './HotelList.css';
import Link from 'dva';

function HotelList({ dispatch,list:hotels,city,keyword }) {

  function cityChange(value) {
    dispatch({
      type: 'hotels/changeCity',
      payload: { city:value },
    });
  }

  function keyWordChange(e) {
    dispatch({
      type: 'hotels/changeKeyword',
      payload: { keyword:e.target.value },
    });
  }

  let filtered = hotels.filter((value) => {
    let noCity = city == null || city == '';
    let noKeyword = keyword == null || keyword == '';

    if (!noCity && !noKeyword)
      return value.city === city && value.name.indexOf(keyword) >= 0;
    if (!noCity)
      return value.city === city ;
    if (!noKeyword)
      return value.name.indexOf(keyword) >= 0;

    return true;
  });

  return (
    <div>
      <div className={styles.tableWrapper}>
        <Row style={{paddingBottom:'10px'}}>
          <Col span={2}>
            <Select
              defaultValue="所有城市"
              className={styles.selector} style={{}}
              onChange={cityChange}>
              <Select.Option value="">所有城市</Select.Option>
              <Select.Option value="南京">南京</Select.Option>
              <Select.Option value="上海">上海</Select.Option>
              <Select.Option value="杭州">杭州</Select.Option>
            </Select>
          </Col>
          <Col span={6}>
            <Input type="text" placeholder="输入关键字以搜索" onChange={keyWordChange}/>
          </Col>
          {/*<Col span={2}>*/}
            {/*<Button type="primary" style={{fontWeight:'lighter'}}>搜索</Button>*/}
          {/*</Col>*/}
        </Row>

        <Table columns={columns} dataSource={filtered}/>
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
  // number:1,
  // price:'111',
}];

const columns = [ {
  title: '地点',
  dataIndex: 'city',
  key: 'city',
},{
  title: '客栈',
  dataIndex: 'name',
  key: 'name',
  render: (text, row, index) => {
    // console.log(row);
    return <a href={'/hotel/'+row.id}>{text}</a>
  },
}];


function mapStateToProps(state) {
  // console.log(state.hotels);
  const { list, city, keyword } = state.hotels;
  return {
    loading: state.loading.models.hotels,
    list,
    city,
    keyword,
  };
}

export default connect(mapStateToProps)(HotelList);
