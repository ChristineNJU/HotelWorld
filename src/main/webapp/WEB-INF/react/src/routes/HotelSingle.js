/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import Hotel from '../components/Hotels/HotelSingle';

function HotelDetail({ location }) {

  const detail = {
    name:'1111',
    city:'南京',
  };

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <Hotel detail={detail}/>
      </div>
    </MainLayout>
  );
}

HotelDetail.propTypes = {
};

export default connect()(HotelDetail);



