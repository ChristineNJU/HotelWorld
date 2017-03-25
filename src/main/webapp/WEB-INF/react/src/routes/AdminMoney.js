/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import AdminLayout from '../components/ContentLayout/AdminLayout';
import Money from '../components/Admin/AdminMoney';



function AdminMoney({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <AdminLayout index={2}>
          <Money/>
        </AdminLayout>
      </div>
    </MainLayout>
  );
}

AdminMoney.propTypes = {
};

export default connect()(AdminMoney);
