/**
 * Created by christine on 2017/3/14.
 */

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/HotelLayout';
import Current from '../components/HotelCenter/HotelCurrent';



function HotelCurrent({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={2}>
          <Current/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

HotelCurrent.propTypes = {
};

export default connect()(HotelCurrent);
