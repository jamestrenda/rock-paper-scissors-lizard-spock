import styled from 'styled-components';
import { Score } from './score.component';

const StyledHeader = styled.header`
  border: 5px solid var(--color-header-outline);
  border-radius: var(--border-radius);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  text-transform: uppercase;

  h1 {
    max-width: 60px;
    line-height: 0.85;
    padding: 0.8rem;
    text-shadow: var(--text-shadow);
    letter-spacing: 0;
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
