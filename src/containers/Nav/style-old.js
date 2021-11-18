import styled from 'styled-components';
import { Menu } from 'antd';

export const MenuStyle = styled(Menu)`
  background: #1f2940;
  .ant-menu {
    color: #e1e1e1;
    &.ant-menu-dark {
      background: #1f2940;
      &:not(.ant-menu-horizontal) {
        .ant-menu-item-selected {
          background-color: transparent !important;
        }
      }
      .ant-menu-item-selected {
        background-color: transparent !important;
      }
    }
  }
  .ant-divider {
    color: #c3c3c3;
  }
  .ant-menu-item {
    display: flex;
    flex: 1 1;
    align-items: center;
    padding: 0.3445rem 1rem;
    text-decoration: none;
    white-space: nowrap;
    /* border-bottom: 1px solid #c3c3c3; */
    margin-bottom: 0;
    margin-top: 0;
    height: auto;
    &:not(:last-child) {
      margin-top: 0;
      margin-bottom: 0;
    }
    a {
      color: #e1e1e1;
      display: block;
    }
    &.ant-menu-item-selected {
      background-color: rgb(255 255 255 / 5%);
      
      a {
        /* font-weight: 600; */
        color: #696ffb;
        background: transparent;
      }
      .anticon {
        color: #696ffb;
        + span {
          color: #696ffb;
        }
      }
      &:after {
        border-right: 0px solid #1890ff;
      }
    }
    &:hover,
    .ant-menu-item-active {
      color: #e1e1e1;
    }
    &:hover {
      a {
        color: #696ffb;
      }
    }
  }
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover {
    color: #e1e1e1;
    .ant-menu-submenu-arrow {
      &::before,
      &::after {
        background: #e1e1e1;
      }
    }
  }
  .ant-menu-submenu {
    color: #e1e1e1;
    &.ant-menu-submenu-selected {
      color: #e1e1e1;
      .ant-menu-submenu-title {
        font-weight: 600;
      }
    }
    .ant-menu-submenu-title {
      /* border-bottom: 1px solid #c3c3c3; */
      margin-top: 0;
      margin-bottom: 0;
      height: auto;
      padding: 0.3445rem 1rem;
    }
    i {
      &:before,
      &:after {
        color: #e1e1e1;
      }
    }
    .ant-menu {
      background-color: rgba(0, 0, 0, 0.2);
      .ant-menu-item {
        border-bottom: 0;
        margin-top: 0;
        margin-bottom: 0;
        height: auto;
        padding: 0.3445rem 1rem;
      }
    }
  }
  .sidebar-nav-title {
    color: #b2b2b2;
    padding: 0.75rem 1rem;
    margin-top: 1rem;
    // font-size: 80%;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    transition: 0.3s;
    background: #1f2940;
  }
`;
