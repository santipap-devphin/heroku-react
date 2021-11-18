import styled from 'styled-components';

export const DomainTableStyle = styled.div`
  padding-left: 0;
  margin-bottom: 0;
  ul.ant-list-items {
    .group_member {
      display: block;
      padding-bottom: 0.5rem !important;
      border-color: #f0f0f0;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.primary};
      word-break: break-word;
      border-bottom: 1px solid #eee;
      @media ${({ theme }) => theme.devices.tablet} {
        padding-left: 1rem !important;
        display: flex;
        justify-content: space-between;
      }
      .list-item-name {
        float: none;
        display: flex;
        flex: 1;
        .user-info {
        }
      }
      &:last-child {
        border-bottom: 0px solid #eee;
      }
      a {
        color: ${({ theme }) => theme.colors.primary};
        &.inline-link {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
      .cgray {
        color: ${({ theme }) => theme.colors.white};
      }
      .controls {
        // float: right;
      }

      .member {
        font-weight: 600;
        overflow-wrap: break-word;
        word-break: break-all;
      }
      .controls {
        display: block;
        text-align: center;
        @media ${({ theme }) => theme.devices.phone} {
          display: flex;
        }
        .btn-member {
          display: block;
          width: 100%;
          @media ${({ theme }) => theme.devices.tablet} {
            display: inline-flex;
            width: auto;
          }
        }
      }
      .member-access-text {
        // margin: 0 0 4px 3rem;
      }
    }
  }
  .ant-list-pagination {
    .ant-pagination-prev,
    .ant-pagination-next {
      .ant-pagination-item-link {
        line-height: 12px;
      }
    }
  }
  .member_img {
    min-width: 40px;
    min-height: 40px;
  }
  .search-control-wrap {
    .ant-input-wrapper {
      width: 100%;
      @media ${({ theme }) => theme.devices.tablet} {
        width: 150px;
      }
      @media (min-width: 1080px) {
        width: 200px;
      }
      .ant-input {
        width: 100%;
        @media ${({ theme }) => theme.devices.tablet} {
          width: 150px;
        }
        @media (min-width: 1080px) {
          width: 200px;
        }
      }
    }
    .search-control-input {
      .ant-btn {
        display: flex;
        align-items: center;
      }
    }
  }
  .data-sort-dropdown {
    width: 100%;
    @media ${({ theme }) => theme.devices.tablet} {
      width: 150px;
    }
    @media (min-width: 1080px) {
      width: 200px;
    }
    .ant-select {
      width: 100%;
      @media ${({ theme }) => theme.devices.tablet} {
        width: 150px;
      }
      @media (min-width: 1080px) {
        width: 200px;
      }
      .ant-select-selector {
        width: 100%;
        @media ${({ theme }) => theme.devices.tablet} {
          width: 150px;
        }
        @media (min-width: 1080px) {
          width: 200px;
        }
      }
    }
  }
  .user-status-emoji {
    margin-right: 4px;
  }
  .user-access-role {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 100px;
    font-weight: 400;
  }
`;
