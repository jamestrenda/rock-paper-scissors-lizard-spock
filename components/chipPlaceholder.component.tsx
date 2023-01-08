import styled from 'styled-components';
import { StyledChip } from './chip.component';

const StyledChipPlaceholder = styled(StyledChip)`
  background: rgba(0, 0, 0, 0.1);
  border: none;

  &::before,
  &::after {
    display: none;
  }
`;

export const ChipPlaceholder = () => {
  return <StyledChipPlaceholder />;
};
