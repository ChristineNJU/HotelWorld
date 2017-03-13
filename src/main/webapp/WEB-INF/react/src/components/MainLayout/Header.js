import React from 'react';
import { Row, Col } from 'antd';
import styles from './Header.css';
import Link from 'dva';

function Header({ location }) {
  return (
    <Row gutter={8} className={styles.wrapper}>
      <Col className={"gutter-row"} span={2} >
        <p className={styles.logo}>Hotel World</p>
      </Col>
      <Col className="gutter-row" span={20}>
        <input className={styles.search} type="text" placeholder="输入关键字搜索旅店"/>
      </Col>
      <Col className="gutter-row" span={2} >
         <p className={styles.username}>christine</p>
      </Col>
    </Row>
  );
}

export default Header;
