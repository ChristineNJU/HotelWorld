/**
 * Created by christine on 2017/3/16.
 */
import React from 'react';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import Login from '../components/Login/Login';

export default function LoginContainer({location}) {
  return(
    <MainLayout>
      <div className={styles.normal}>
        <Login/>
      </div>
    </MainLayout>
  )
}


