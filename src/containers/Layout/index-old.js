import React, { useState, Fragment, useEffect } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Button } from 'antd';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import navigation from '../_nav';
import { Breadcrumb } from '../../commons';
import routes from '../../routes';
import { LayoutStyle } from './style';
// import { userApi } from '../../apis';

const { Content } = Layout;

const LayoutNoBoard = (props) => {
  const {
    hasBtn,
    btnTitle,
    btnOnClick,
    btnClass,
    size,
    match,
    location,
    children,
    userId,
    // userIds,
  } = props;
  const local = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);

  const onCollapse = () => setCollapsed(!collapsed);
  const currPath = location.pathname;
  const routeName = routes.filter((route) => route.path === currPath);
  const pathParams = match.params && match.params.slug;

  return (
    <Fragment key="key">
      <LayoutStyle>
        <Header />
        {/* loading === false && profile */}
        <Layout>
          <Sidebar
            navi={navigation}
            collapsed={collapsed}
            onCollapse={onCollapse}
          />
          <Layout
            className={`layout-boards overflow-y-scroll py-4 ${collapsed === true ? 'md-block' : 'md-none'
              }`}
          >
            <div className="px-4">
              <h2 className="page-title text-capitalize mb-0">
                {routeName.length > 0
                  ? routeName[0].name.replace(/%20/g, ' ')
                  : pathParams}
              </h2>
              <div className="row align-items-center mb-3 mb-xl-4">
                <small className="col-md mb-2 mb-md-0">
                  Manage your exchanges and wallets
                </small>
                {
                  hasBtn === true &&
                  (
                    <div className="col-auto ml-md-auto order-3 order-md-2">
                      <div id="rangePickerWrapper" className="d-flex align-items-center position-relative">
                        <Button
                          type="primary"
                          size="large"
                          onClick={btnOnClick}
                        >
                          {btnTitle}
                        </Button>
                      </div>
                    </div>
                  )
                }
                <div className="col-12 ml-md-auto mt-4 order-2 order-md-3">
                  <Breadcrumb routes={routes} />
                </div>
              </div>
              
              <Content className="tw-body">
                {children}
              </Content>
            </div>
            <Footer />
          </Layout>
        </Layout>
      </LayoutStyle>
    </Fragment>
  );
};

LayoutNoBoard.propTypes = {
  btnTitle: PropTypes.string,
  btnClass: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasBtn: PropTypes.bool,
  btnOnClick: PropTypes.func,
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LayoutNoBoard.defaultProps = {
  btnClass: '',
  hasBtn: false,
};

export default withRouter(LayoutNoBoard);
