/**
 * Created by christine on 2017/3/14.
 */

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/HotelLayout';
import Before from '../components/HotelCenter/HotelBefore';



function HotelBefore({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={4}>
          <Before/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

HotelBefore.propTypes = {
};

export default connect()(HotelBefore);
