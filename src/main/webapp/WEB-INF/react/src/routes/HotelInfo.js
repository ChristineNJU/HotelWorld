/**
 * Created by christine on 2017/3/14.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/HotelLayout';
import Info from '../components/HotelCenter/HotelInfo';



function HotelInfo({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={0}>
          <Info/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

HotelInfo.propTypes = {
};

export default connect()(HotelInfo);
