import styled from 'styled-components';

const StyledScoreBoard = styled.div`
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  text-align: center;

  h2 {
    color: var(--color-accent);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
`;

const StyledScore = styled.div`
  color: var(--color-dark);
  font-size: 3rem;
  font-weight: 700;
`;

export const Score = () => {
  return (
    <StyledScoreBoard>
      <h2>Score</h2>
      <StyledScore>12</StyledScore>
    </StyledScoreBoard>
  );
};
