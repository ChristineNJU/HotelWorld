import React from 'react';
import { connect } from 'dva';
import { Row, Col, Alert ,Dropdown,Menu,Icon} from 'antd';
import styles from './Header.css';
import Link from 'dva';

function Header({ dispatch,location, token, username, userType,loginSuccess,registerSuccess ,logoutSuccess}) {
  function handleLogout() {
    dispatch({
      type:'session/logout',
    })
  }

  function VipMenu() {
    return (
      <Menu>
        <Menu.Item key={1}>
          <a  rel="noopener noreferrer" href="/userinfo">个人资料</a>
        </Menu.Item>
        <Menu.Item key={2}>
          <a  rel="noopener noreferrer" href="/uservip">会员资格</a>
        </Menu.Item>
        <Menu.Item key={3}>
          <a  rel="noopener noreferrer" href="/userorders">我的订单</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key={4}>
          <a  rel="noopener noreferrer" onClick={handleLogout}>退出登录</a>
        </Menu.Item>
      </Menu>
    );
  }
  function HotelMenu() {
    return (
      <Menu>
        <Menu.Item key={1}>
          <a  rel="noopener noreferrer" href="/hotelinfo">客栈资料</a>
        </Menu.Item>
        <Menu.Item key={2}>
          <a  rel="noopener noreferrer" href="/hotelcheckin">入店登记</a>
        </Menu.Item>
        <Menu.Item key={3}>
          <a  rel="noopener noreferrer" href="/hotelcurrent">入住情况</a>
        </Menu.Item>
        <Menu.Item key={4}>
          <a  rel="noopener noreferrer" href="/hotelorder">查看预定</a>
        </Menu.Item>
        <Menu.Item key={5}>
          <a  rel="noopener noreferrer" href="/hotelbefore">以往入住</a>
        </Menu.Item>
        <Menu.Item key={3}>
          <a  rel="noopener noreferrer" href="/hotelfinance">财务情况</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key={9}>
          <a  rel="noopener noreferrer" onClick={handleLogout}>退出登录</a>
        </Menu.Item>
      </Menu>
    );
  }

  function getDrop(username,userType) {

    return (
      <Dropdown overlay={userType == 1?<VipMenu/>:<HotelMenu/>}>
        <a className="ant-dropdown-link" href="/userinfo">
          {username} <Icon type="down" />
        </a>
      </Dropdown>
    )
  }

  function Notice() {
    // console.log(loginSuccess,registerSuccess);
    if (loginSuccess === null && registerSuccess === null && logoutSuccess === null)
      return <div></div>;
    if(loginSuccess === 1)
      return <Alert message="登录成功" type="success" className={styles.notice}/>;
    if(loginSuccess === 0)
      return <Alert message="登录失败，请重新尝试" type="error" className={styles.notice}/>;
    if(registerSuccess === 1)
      return <Alert message="注册成功" type="success" className={styles.notice}/>;
    if(registerSuccess === 0)
      return <Alert message="注册失败" type="error" className={styles.notice}/>;
    if(logoutSuccess === 1){
      return <Alert message="登出成功！" type="success" className={styles.notice}/>;

    }
  }

  return (
    <div className={styles.outer}>
      <div className={styles.wrapper}>
        <Row gutter={8} style={{width:'200%'}}>

          <Col className={"gutter-row"} span={12} >
            <a href="/" className={styles.logo}>Hotel World</a>
          </Col>
          <Col className="gutter-row" span={12} >
            {token === null
              ? <a href="/login" className={styles.username}>登录/注册</a>
              :
              <div className={styles.dropdownWrapper}>
                {getDrop(username,userType)}
              </div>
            }
          </Col>
        </Row>

        <Notice/>
      </div>
    </div>
  );




}




function mapStateToProps(state) {
  // console.log(state.session);
  const {token,username,userType,loginSuccess,registerSuccess,logoutSuccess} = state.session;
  // console.log(state.session);
  return {
    token,username,userType,loginSuccess,registerSuccess,logoutSuccess
  }
}

export default connect(mapStateToProps)(Header);
