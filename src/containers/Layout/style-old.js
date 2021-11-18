import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutStyle = styled(Layout)`
  .issue-boards-content {
    overflow-x: scroll;
    min-height: 200px;
    padding: 24px 15px;
    margin: 0px;
    /* @media (min-width: 992px) || 1024 { */
    @media ${({ theme }) => theme.devices.desktop} {
      height: calc(100vh - 150px);
      padding: 24px;
    }
  }
  .ant-layout-sider-zero-width-trigger {
    top: -43px;
    line-height: 33px;
    background: #1f2940;
    @media ${({ theme }) => theme.devices.tablet} {

    }
    &:hover {
      color: #fff;
      .anticon {
        color: #fff;
      }
      &:after {
        background: #1f2940;
        color: #fff;
      }
    }
  }
  .header-page {
    .breadcrumb {
      display: flex;
    }
    h2 {
      white-space: nowrap;
    }
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .tw-sidebar {
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
  }
  .tw-body {
    color: #e1e1e1;
    .ant-form-item-label {
      > label {
        color: #e1e1e1;
      }
    }
  }
  .layout-boards {
    min-height: calc(100vh - 48px);
    background: #141b2d;
    color: #e1e1e1;
    .breadcrumb {
      white-space: nowrap;
      display: flex;
      align-items: center;
    }
    .page-title {
      color: #e1e1e1;
      font-size: calc(19px + 4 * ((100vw - 991px)/ 209));
    }
    &.md-none {
      .breadcrumb {
        flex-wrap: nowrap;
        line-height: 16px;
        padding: 1rem;
        span {
          display: flex;
          flex-wrap: nowrap;
          color: ${({ theme }) => theme.colors.primary};
          &.ant-breadcrumb-separator {
            color: #e1e1e1;
            margin: 0 10px;
          }
          &:last-child {
            span {
              color: #e1e1e1;
              &:last-child.ant-breadcrumb-separator {
                display: none;
              }
            }
          }
        }
      }
      .card-body {
        opacity: 0;
        @media ${({ theme }) => theme.devices.tablet} {
          opacity: 1;
        }
        @media ${({ theme }) => theme.devices.desktop} {
          opacity: 1;
        }
      }
    }
  }
  .ant-layout-sider {
    width: 300px !important;
    flex: 0 0 300px !important;
    max-width: 300px !important;
    min-width: 300px !important;
    @media ${({ theme }) => theme.devices.phone} {
      width: 200px !important;
      flex: 0 0 200px !important;
      max-width: 200px !important;
      min-width: 200px !important;
    }
    &.ant-layout-sider-zero-width {
      flex: 0 0 0px !important;
      max-width: 0px !important;
      min-width: 0px !important;
      width: 0px !important;
    }
  }
  aside.tw-body {
    .ant-layout-sider-zero-width-trigger {
      height: 40px;
      width: 40px;
      font-size: 22px;
      top: -44px;
      line-height: 32px;
      background: #ee202f;
      right: auto;
      @media ${({ theme }) => theme.devices.tablet} {
        font-size: 18px;
      }
    }
  }
  .tw-body {
    .layout-boards {
      .card-body {
        opacity: 0;
      }
    }
    &.ant-layout-sider-collapsed {
      .layout-boards {
        .card-body {
          opacity: 1;
        }
      }
    }
  }
  /* table */
  .table-responsive {
    .ant-table {
      .ant-table-content {
        display: block;
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  }
`;
