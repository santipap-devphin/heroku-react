import React from 'react';
import PropTypes from 'prop-types';
import { Button, Avatar, Menu, Dropdown } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import {
  LogoutOutlined,
  PlusCircleOutlined,
  UserOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { HeaderStyle } from './style';

const Header = (props) => {
  const { className, user } = props;
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('auth');
    localStorage.clear();
    // history.push('/')
    window.location.href = '/';
  };

  const menu = (
    <Menu>
      {/* <Menu.Item key="0" className="d-flex align-items-center p-0">
        <Link
          to={{
            pathname: `/`,
          }}
          className="d-flex align-items-center w-100 py-2 px-3 ml-0"
        >
          <span className="d-flex align-items-center">
            <UserOutlined className="fnt-14 mr-1" />
            <span>Profile</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Divider /> */}
      <Menu.Item
        key="1"
        className="d-flex align-items-center"
        icon={<SettingOutlined className="fnt-20" />}
      >
        <Link
          to={{
            pathname: `/change-password`,
          }}
          className="d-block"
        >
          Profile and Password
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item
        key="3"
        icon={<LogoutOutlined className="fnt-20" />}
        onClick={logOut}
      >
        logout
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderStyle className={`d-flex w-100 align-items-center user-bar ${className}`}>
      <div className="ml-40 ml-5 ml-lg-0 mr-320 mr-auto p-2">
        {/* <img src="/assets/images/logo.png" alt="mana backend" /> */}
      </div>
      <div className="p-1 p-md-2 d-flex align-items-center">
        <Dropdown className="cursor-pointer" overlay={menu} trigger={['click']}>
          <span
            aria-hidden="true"
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <span className="d-none d-md-inline-block user-name"> Amilio Jr. </span>
            <Avatar
              className="ml-0 ml-md-2 bg-white"
              src="https://www.bootstrapdash.com/demo/corona/jquery/template/assets/images/faces/face15.jpg"
              size={32}
            >
              USER
            </Avatar>
          </span>
        </Dropdown>
        {/* <Link
          to={{
            pathname: `/member/${`${user && user.firstname} ${
              user && user.lastname
            }`}`,
            state: { profileId: user && user.id },
          }}
        >
          <span className="d-none d-md-inline-block">
            {user && user.firstname}
          </span>
          <Avatar
            className="ml-0 ml-md-2 bg-white"
            src={user && user.avartar}
            size={32}
          >
            USER
          </Avatar>
        </Link>
        <Button
          onClick={logOut}
          className="d-flex align-items-center px-2 px-md-3 mx-2"
          icon={<LogoutOutlined className="fnt-20" />}
          ghost
        >
          <span className="d-none d-md-block">logout</span>
        </Button> */}
      </div>
    </HeaderStyle>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  // showDrawer: PropTypes.func,
};
Header.defaultProps = {
  className: '',
};

export default Header;
