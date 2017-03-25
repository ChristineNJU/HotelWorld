/**
 * Created by christine on 2017/3/25.
 */
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout';
import AdminLayout from '../components/ContentLayout/AdminLayout';
import Give from '../components/Admin/AdminGive';



function AdminGive({ location }) {

  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <AdminLayout index={1}>
          <Give/>
        </AdminLayout>
      </div>
    </MainLayout>
  );
}

AdminGive.propTypes = {
};

export default connect()(AdminGive);
