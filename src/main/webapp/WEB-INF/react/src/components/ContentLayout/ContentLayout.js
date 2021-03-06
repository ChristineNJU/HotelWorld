/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { Link } from 'dva/router';
import styles from './ContentLayout.css';

function ContentLayout({ children, index }) {
  return(
    <div className={styles.main}>
      <div className={styles.leftMenu}>
        <Link className={index === 0 ? styles.linkCurrent : styles.link} to="/userinfo">个人资料</Link>
        <Link className={index === 1 ? styles.linkCurrent : styles.link} to="/uservip">会员资格</Link>
        <Link className={index === 2 ? styles.linkCurrent : styles.link} to="/userorders">我的订单</Link>
        {/*<Link className={styles.link} >退出登录</Link>*/}
      </div>
      <div className={styles.rightContent}>
        {children}
      </div>
    </div>
  )
}

export default ContentLayout;
