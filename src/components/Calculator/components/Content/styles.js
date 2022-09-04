import styled from '@emotion/styled';

export const StyledContent = styled.div`
  display: grid;
  border: 1px solid var(--gray-200);
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr) 26px;
  width: 256px;
  grid-row-gap: 1px;
  grid-column-gap: 1px;
`;
