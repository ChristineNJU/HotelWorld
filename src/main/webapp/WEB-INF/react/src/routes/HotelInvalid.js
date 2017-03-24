/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/HotelLayout';
import Invalid from '../components/HotelCenter/HotelInvalid';



function HotelInvalid({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={6}>
          <Invalid/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

HotelInvalid.propTypes = {
};

export default connect()(HotelInvalid);
