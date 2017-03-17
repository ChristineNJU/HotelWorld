import React from 'react';
import { connect } from 'dva';
import { Row, Col, Alert ,Dropdown,Menu,Icon} from 'antd';
import styles from './Header.css';
import Link from 'dva';

function Header({ dispatch,location, token, username, userType,loginSuccess,registerSuccess ,logoutSuccess}) {
  function handleVipLogout() {
    dispatch({
      type:'session/vipLogout',
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
          <a  rel="noopener noreferrer" onClick={handleVipLogout}>退出登录</a>
        </Menu.Item>
      </Menu>
    );
  }

  // const HotelMenu = (
  //   <Menu>
  //     <Menu.Item>
  //       <a  rel="noopener noreferrer" href="/userinfo">个人资料</a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a  rel="noopener noreferrer" href="/uservip">会员资格</a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a  rel="noopener noreferrer" href="/userorders">我的订单</a>
  //     </Menu.Item>
  //     <Menu.Divider />
  //     <Menu.Item>
  //       <a  rel="noopener noreferrer" >退出登录</a>
  //     </Menu.Item>
  //   </Menu>
  // );
  //
  // const AdminMenu = (
  //   <Menu>
  //     <Menu.Item>
  //       <a  rel="noopener noreferrer" href="/userinfo">个人资料</a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a  rel="noopener noreferrer" href="/uservip">会员资格</a>
  //     </Menu.Item>
  //     <Menu.Item>
  //       <a  rel="noopener noreferrer" href="/userorders">我的订单</a>
  //     </Menu.Item>
  //   </Menu>
  // );

  function getDrop(username,userType) {

    // let map = [VipMenu,HotelMenu,AdminMenu];

    return (
      <Dropdown overlay={<VipMenu/>}>
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
  return {
    token,username,userType,loginSuccess,registerSuccess,logoutSuccess
  }
}

export default connect(mapStateToProps)(Header);
