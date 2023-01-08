import { useContext } from 'react';
import { GameContext } from './gameProvider.component';
import { Chip } from './chip.component';
import { ChipPlaceholder } from './chipPlaceholder.component';
import { StyledPick, StyledPicks } from './picks.styles';

export const Picks = () => {
  const {
    state: { userChoice, computerChoice, winner },
  } = useContext(GameContext);

  return (
    <StyledPicks>
      <StyledPick>
        <Chip
          name={userChoice?.name!!}
          color={userChoice?.color!!}
          winner={winner}
        />
        <p>You Picked</p>
      </StyledPick>
      <StyledPick>
        {computerChoice ? (
          <Chip
            name={computerChoice?.name!!}
            color={computerChoice?.color!!}
            winner={winner === false}
          />
        ) : (
          <ChipPlaceholder />
        )}
        <p>The House Picked</p>
      </StyledPick>
    </StyledPicks>
  );
};
