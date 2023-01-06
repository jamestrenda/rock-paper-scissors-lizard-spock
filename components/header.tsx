import styled from 'styled-components';
import { Score } from './score';

const StyledHeader = styled.header`
  border: 5px solid var(--color-header-outline);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  text-transform: uppercase;

  h1 {
    max-width: 60px;
    line-height: 0.85;
    padding: 0.5rem;
    text-shadow: var(--text-shadow);
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Rock Paper Scissors Lizard Spock</h1>
      <Score />
    </StyledHeader>
  );
};
