/**
 * Created by christine on 2017/3/14.
 */

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/HotelLayout';
import Finance from '../components/HotelCenter/HotelFinance';



function HotelFinance({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={5}>
          <Finance/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

HotelFinance.propTypes = {
};

export default connect()(HotelFinance);
