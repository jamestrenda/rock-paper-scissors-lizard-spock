import styled from 'styled-components';
import { StyledChip } from './chip.component';

export const StyledPicks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  text-align: center;

  ${StyledChip} {
    --width: 14rem;
    width: var(--width) !important;
    height: var(--width) !important;
    &::before {
       width: calc(var(--width) - 2.25rem) !important;
      height: calc(var(--width) - 2rem) !important;
    }
    &::after {
      width: var(--width) !important;
      height: var(--width) !important;
      
    }
    img {
      width: 4rem !important;
  }
`;

export const StyledPick = styled.div`
  display: grid;
  gap: 2rem;
  place-items: center;
`;
