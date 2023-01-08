import { useContext } from 'react';
import styled from 'styled-components';
import { GameContext } from './gameProvider.component';

const StyledScoreBoard = styled.div`
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  padding: 1.6rem 2.4rem;
  border-radius: var(--border-radius);
  text-align: center;

  h2 {
    color: var(--color-accent);
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing);
  }
`;

const StyledScore = styled.div`
  color: var(--color-dark);
  font-size: 4.8rem;
  font-weight: 700;
`;

export const Score = () => {
  const {
    state: { score },
  } = useContext(GameContext);
  return (
    <StyledScoreBoard>
      <h2>Score</h2>
      <StyledScore>{score}</StyledScore>
    </StyledScoreBoard>
  );
};
