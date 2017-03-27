/**
 * Created by christine on 2017/3/27.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import AdminLayout from '../components/ContentLayout/AdminLayout';
import VipOrders from '../components/Admin/AdminVipOrders';



function AdminVipOrders({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <AdminLayout index={3}>
          <VipOrders/>
        </AdminLayout>
      </div>
    </MainLayout>
  );
}

AdminVipOrders.propTypes = {
};

export default connect()(AdminVipOrders);
