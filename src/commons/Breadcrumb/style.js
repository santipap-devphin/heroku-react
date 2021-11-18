import styled from 'styled-components';
import { Breadcrumb } from 'antd';

export const BreadcrumbStyle = styled(Breadcrumb)`
  color: #e1e1e1;
  background-color: transparent;
  padding: 1rem;
  .breadcrumb {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    span {
      color: #e1e1e1;
      line-height: unset;
      display: flex;
      flex-wrap: nowrap;
      overflow: hidden;
      &.ant-breadcrumb-separator {
        color: #e1e1e1;
        margin: 0 10px;
      }
      &:last-child {
        span {
          color: ${({ theme }) => theme.colors.primary};
          &:last-child.ant-breadcrumb-separator {
            display: none;
          }
        }
      }
    }
  }
  span {
    color: #e1e1e1;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    &.ant-breadcrumb-separator {
      color: #e1e1e1;
      margin: 0 10px;
    }
    &:last-child {
      span {
        color: ${({ theme }) => theme.colors.primary};
        &:last-child.ant-breadcrumb-separator {
          display: none;
        }
      }
    }
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .home {
    vertical-align: middle;
    line-height: 14px;
    span {
      color: #e1e1e1;
      line-height: unset;
      vertical-align: middle;
      /* padding-top: 4px; */
    }
  }
`;
