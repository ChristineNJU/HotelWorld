/**
 * Created by christine on 2017/3/14.
 */

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/HotelLayout';
import Order from '../components/HotelCenter/HotelOrder';



function HotelOrder({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={3}>
          <Order/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

HotelOrder.propTypes = {
};

export default connect()(HotelOrder);
