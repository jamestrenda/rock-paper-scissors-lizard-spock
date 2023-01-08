import styled from 'styled-components';
import { StyledChip } from './chip.component';

export const StyledPicks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  text-align: center;

  ${StyledChip} {
    width: 125px;
    height: 125px;

    img {
      width: 50px !important;
      height: 50px !important;
  }
`;

export const StyledPick = styled.div`
  display: grid;
  gap: 2rem;
  place-items: center;
`;
