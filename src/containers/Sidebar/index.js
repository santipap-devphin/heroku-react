import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
// import { MenuStyle } from "./style"
import Navigation from '../Nav';

const { Sider } = Layout;

const Sidebar = ({ navi, onCollapse }) => {
  // const divRef = React.useRef()

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      // onBreakpoint={broken => {
      //   console.log(broken);
      // }}
      onCollapse={onCollapse}
      width={200}
      className="tw-sidebar"
    >
      <Navigation
        navi={navi}
      />
    </Sider>
  );
};

Sidebar.propTypes = {
  navi: PropTypes.array.isRequired,
  onCollapse: PropTypes.func.isRequired,
};

export default Sidebar;
