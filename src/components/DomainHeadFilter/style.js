import styled from 'styled-components';

export const DomainHeadFilterStyle = styled.div`
  button {
    &.ant-btn {
      &.ant-btn-link {
        &.active {
          color: ${({ theme }) => theme.colors.white};
          border-bottom: 1px solid ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;