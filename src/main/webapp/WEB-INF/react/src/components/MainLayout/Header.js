import React from 'react';
import { connect } from 'dva';
import { Row, Col, Alert } from 'antd';
import styles from './Header.css';
import Link from 'dva';

function Header({ location, token, username, userType,loginSuccess,registerSuccess }) {

  function Notice() {
    // console.log(loginSuccess,registerSuccess);
    if (loginSuccess === null && registerSuccess === null)
      return <div></div>;
    if(loginSuccess === 1)
      return <Alert message="登录成功" type="success" className={styles.notice}/>;
    if(loginSuccess === 0)
      return <Alert message="登录失败，请重新尝试" type="error" className={styles.notice}/>;
    if(registerSuccess === 1)
      return <Alert message="注册成功" type="success" className={styles.notice}/>;
    if(registerSuccess === 0)
      return <Alert message="注册失败" type="error" className={styles.notice}/>;

  }

  return (
    <div>

      <Row gutter={8} className={styles.wrapper}>

        <Col className={"gutter-row"} span={12} >
          <a href="/" className={styles.logo}>Hotel World</a>
        </Col>
        <Col className="gutter-row" span={12} >
          {token === null
            ? <a href="/login" className={styles.username}>登录/注册</a>
            : <a href="/userinfo" className={styles.username}>christine</a>
          }
        </Col>
      </Row>

      <Notice/>

    </div>
  );
}


function mapStateToProps(state) {
  // console.log(state.session);
  const {token,username,userType,loginSuccess,registerSuccess} = state.session;
  return {
    token,username,userType,loginSuccess,registerSuccess
  }
}

export default connect(mapStateToProps)(Header);
