/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import { Link } from 'dva/router';
import styles from './ContentLayout.css';

function AdminLayout({ children, index }) {
  return(
    <div className={styles.main}>
      <div className={styles.leftMenu}>
        <Link className={index === 0 ? styles.linkCurrent : styles.link} to="/admincheck">资料修改</Link>
        <Link className={index === 1 ? styles.linkCurrent : styles.link} to="/admingive">客栈结账</Link>
        <Link className={index === 2 ? styles.linkCurrent : styles.link} to="/adminmoney">财务情况</Link>
      </div>
      <div className={styles.rightContent}>
        {children}
      </div>
    </div>
  )
}

export default AdminLayout;
