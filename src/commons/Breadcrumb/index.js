/* eslint-disable no-else-return */
import React from 'react';
import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import { HomeOutlined } from '@ant-design/icons';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { BreadcrumbStyle } from './style';

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

const BreadcrumbRouteItem = (
  { name, currPath },
  fullCurrPath,
  home,
  slug,
) => {
  // console.log('currPath', route.currPath);
  // console.log('fullCurrPath', fullCurrPath);
  const host = slug ? slug[0].split('/') : '';
  // const marp = host.slice(1, host.length);
  // const pSlug = marp[1];
  // console.log('marp', pSlug);
  // console.log('route', route);

  if (currPath === fullCurrPath) {
    return <Breadcrumb.Item key={currPath}>{name}</Breadcrumb.Item>;
  } else if (currPath === home) {
    return (
      <Breadcrumb.Item key={currPath}>
        <Link
          className="home"
          to={{
            pathname: currPath,
          }}
        >
          <HomeOutlined className="" />
        </Link>
      </Breadcrumb.Item>
    );
  } else if (currPath === '/dashboard') {
    return (
      <Breadcrumb.Item key={currPath}>
        <Link
          className="home"
          to={{
            pathname: currPath,
          }}
        >
          {name}
        </Link>
      </Breadcrumb.Item>
    );
  }
  if (currPath === slug[0]) {
    return (
      <Breadcrumb.Item key={currPath}>
        <Link
          className="slug-name text-capitalize"
          to={{
            pathname: currPath,
          }}
        >
          {host.slice(-1).pop().replace(/-/g, ' ')}
        </Link>
      </Breadcrumb.Item>
    );
  } else {
    return (
      <Breadcrumb.Item key={currPath}>
        <Link
          to={{
            pathname: currPath,
          }}
        >
          {name}
        </Link>
      </Breadcrumb.Item>
    );
  }
};

const BreadcrumbComponent = (props) => {
  const { className, innerRef, routes } = props;
  let items = null;

  // const location = useLocation()

  const currPath = useLocation().pathname;
  const paths = getPaths(currPath);
  const home = paths[0];
  const slug = paths.slice(2, 3);

  const currRoutes = paths
    // eslint-disable-next-line no-shadow
    .map((currPath) => {
      // eslint-disable-next-line no-shadow
      const route = routes.find((route) =>
        matchPath(currPath, {
          path: route.path,
          exact: route.exact,
        }),
      );
      return { ...route, currPath };
    })
    .filter((route) => route && route.name);
  items = currRoutes.map((route) => {
    return BreadcrumbRouteItem(
      route,
      currPath,
      home,
      paths.length >= 4 ? slug : '',
    );
  });

  return (
    <BreadcrumbStyle
      className={`breadcrumb ${className}`}
      ref={innerRef}
      separator=" / "
    >
      {items}
    </BreadcrumbStyle>
  );
};

BreadcrumbComponent.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  routes: PropTypes.array,
};

BreadcrumbComponent.defaultProps = {
  className: '',
};

export default BreadcrumbComponent;
