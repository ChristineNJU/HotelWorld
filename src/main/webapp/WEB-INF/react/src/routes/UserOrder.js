/**
 * Created by christine on 2017/3/13.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import ContentLayout from '../components/ContentLayout/ContentLayout';
import Info from '../components/UserCenter/Info';
import Vip from '../components/UserCenter/Vip';
import Orders from '../components/UserCenter/Orders';



function UserOrder({ location }) {

  const index = 2;
  const list = [Info,Vip,Orders];
  const Content = list[index];

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <ContentLayout index={2}>
          <Content/>
        </ContentLayout>
      </div>
    </MainLayout>
  );
}

UserOrder.propTypes = {
};

export default connect()(UserOrder);
