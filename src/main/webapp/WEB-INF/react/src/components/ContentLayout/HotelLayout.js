/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import { Link } from 'dva/router';
import styles from './ContentLayout.css';

function HotelLayout({ children, index }) {
  return(
    <div className={styles.main}>
      <div className={styles.leftMenu}>
        <Link className={index === 0 ? styles.linkCurrent : styles.link} to="/hotelinfo">客栈资料</Link>
        <Link className={index === 1 ? styles.linkCurrent : styles.link} to="/hotelcheckin">入店登记</Link>
        <Link className={index === 2 ? styles.linkCurrent : styles.link} to="/hotelcurrent">入住情况</Link>
        <Link className={index === 3 ? styles.linkCurrent : styles.link} to="/hotelorders">查看预定</Link>
        <Link className={index === 4 ? styles.linkCurrent : styles.link} to="/hotelbefore">以往入住</Link>
        <Link className={index === 5 ? styles.linkCurrent : styles.link} to="/hotelfinance">财务情况</Link>
        <Link className={index === 6 ? styles.linkCurrent : styles.link} to="/hotelinvalid">失效订单</Link>
      </div>
      <div className={styles.rightContent}>
        {children}
      </div>
    </div>
  )
}

export default HotelLayout;
