import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Divider } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuStyle } from './style';

const { SubMenu } = Menu;

const getPaths = (pathname) => {
  const paths = ['/'];
  if (pathname === '/') return paths;
  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

const LeftBar = ({ navi }) => {
  // const divRef = React.useRef()
  const currPath = useLocation().pathname;
  const paths = getPaths(currPath);
  const navigation = (naviItem) => {
    return naviItem.map((item) => {
      if (item.tag === 'NavDropdown') {
        return (
          <SubMenu
            // ref={divRef}
            key={item.to}
            icon={item.icon ? item.icon : ''}
            title={item.name}
          >
            {navigation(item.children)}
          </SubMenu>
        );
      }
      if (item.tag === 'NavDivider') {
        return (
          <li className="px-3" key="divider">
            <Divider />
          </li>
        );
      }
      if (item.tag === 'NavTitle') {
        return (
          <li className="sidebar-nav-title" key={`sidebar-nav-title-${item.name}`}>
            <span>{item.name}</span>
          </li>
        );
      }
      return (
        <Menu.Item key={item.to}>
          {item.name === 'Members' ? (
            <NavLink
              className=""
              to={{
                pathname: item.to,
              }}
            >
              <span className="d-flex align-items-center">
                {item.icon}
                <span>{item.name}</span>
              </span>
            </NavLink>
          ) : (
            <NavLink className="" to={item.to}>
              <span className="d-flex align-items-center">
                {item.icon}
                <span>{item.name}</span>
              </span>
            </NavLink>
          )}
          {item.badge ? (
            <span
              className={`badge badge-pill badge-${
                item.badge && item.badge.color
              } ml-auto`}
            >
              {item.badge && item.badge.text}
            </span>
          ) : (
            ''
          )}
        </Menu.Item>
      );
    });
  };

  return (
    <MenuStyle
      mode="inline"
      // theme="dark"
      className="h-100 border-right-0"
      defaultSelectedKeys={[`${paths}`]}
      selectedKeys={[`${currPath}`]}
      // defaultOpenKeys={['sub1']}
    >
      {navigation(navi)}
    </MenuStyle>
  );
};

LeftBar.propTypes = {
  navi: PropTypes.array.isRequired,
};

export default LeftBar;
