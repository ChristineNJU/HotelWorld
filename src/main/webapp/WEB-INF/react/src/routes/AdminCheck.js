/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import AdminLayout from '../components/ContentLayout/AdminLayout';
import Check from '../components/Admin/AdminCheck';



function AdminCheck({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <AdminLayout index={0}>
          <Check/>
        </AdminLayout>
      </div>
    </MainLayout>
  );
}

AdminCheck.propTypes = {
};

export default connect()(AdminCheck);
