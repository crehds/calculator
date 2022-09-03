import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const KeyWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  color: var(--gray-600);
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ color }) => css`
    background-color: ${color};
  `}
`;
