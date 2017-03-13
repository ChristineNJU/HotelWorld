/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import styles from './ContentLayout.css';
import {Link} from 'dva/router';

function ContentLayout({children,location,index}){
  return(
    <div className={styles.main}>
      <div className={styles.leftMenu}>
        <Link className={index == 0 ? styles.linkCurrent : styles.link} to="/userinfo">个人资料</Link>
        <Link className={index == 1 ? styles.linkCurrent : styles.link} to="/uservip">会员资格</Link>
        <Link className={index == 2 ? styles.linkCurrent : styles.link} to="/userorders">我的订单</Link>
      </div>
      <div className={styles.rightContent}>
        {children}
      </div>
    </div>
  )
}

export default ContentLayout;
