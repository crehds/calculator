import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledSvg = styled.svg`
  ${({ color }) => css`
    > path {
      fill: ${color};
    }
  `}
`;
