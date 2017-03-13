/**
 * Created by christine on 2017/3/13.
 */

import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Vip from '../components/UserCenter/Vip';


function UserCenter({ location }) {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={1}>
          <Vip/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

UserCenter.propTypes = {
};

export default connect()(UserCenter);
