import styled from '@emotion/styled';

export const StatItem = styled.li`
  :not(last-child) {
    margin-bottom: 10px;

    :last-child {
      font-weight: 600;
      font-size: 18px;
    }
  }
`;
