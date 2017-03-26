/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/HotelLayout';
import Room from '../components/HotelCenter/HotelRoom';



function HotelRoom({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={7}>
          <Room/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

HotelRoom.propTypes = {
};

export default connect()(HotelRoom);
