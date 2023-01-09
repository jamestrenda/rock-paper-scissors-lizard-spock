import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from './button.component';
import { choices } from './choice.component';
import { Choices } from './choices.component';
import { GameContext, ReducerActionType } from './gameProvider.component';
import { Picks } from './picks.component';

const StyledPlay = styled.div`
  display: grid;
  place-items: center;
  margin-top: 4.8rem;
`;

const StyledResult = styled.p`
  font-size: 4.8rem;
  margin: 4.8rem 0 1.6rem;
`;

export const Play = () => {
  const {
    state: { start, userChoice, computerChoice, winner, tie },
    dispatch,
  } = useContext(GameContext);

  const handleStart = () => {
    if (dispatch) {
      dispatch({
        type: ReducerActionType.START,
      });
    }
  };

  const handleComputerChoice = () => {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    // TODO: add sound fx
    // TODO: add animation
    // TODO: add slot machine effect

    if (dispatch) {
      setTimeout(
        () =>
          dispatch({
            type: ReducerActionType.SET_COMPUTER_CHOICE,
            payload: choice,
          }),
        2000
      );
    }
  };
  const playSound = async (path: string) => {
    const audio = new Audio(path);
    await audio.play();
  };
  const handleWinner = () => {
    // TODO: add sound fx
    // TODO: add animation

    // check tie
    if (dispatch) {
      if (userChoice?.name === computerChoice?.name) {
        dispatch({
          type: ReducerActionType.SET_TIE,
        });
      } else {
        // user wins: true
        // computer wins: false
        const winner = userChoice?.beats.find(
          (choice) => computerChoice?.name === choice
        )
          ? true
          : false;

        dispatch({
          type: ReducerActionType.SET_WINNER,
          payload: winner,
        });

        if (winner) {
          playSound(`/sounds/bell.m4a`);
          dispatch({
            type: ReducerActionType.INCREMENT_SCORE,
          });
        }
      }
    }
  };

  useEffect(() => {
    if (userChoice) {
      playSound(`/sounds/time.m4a`);
      handleComputerChoice();
    }
  }, [userChoice]);

  useEffect(() => {
    if (computerChoice) {
      handleWinner();
    }
  }, [computerChoice]);

  const handleReset = () => {
    if (dispatch) {
      dispatch({
        type: ReducerActionType.RESET,
      });
    }
  };

  return !start ? (
    <StyledPlay>
      <Button onClick={handleStart} size="large">
        Start
      </Button>
    </StyledPlay>
  ) : (
    <StyledPlay>
      {userChoice ? (
        <Picks />
      ) : (
        <>
          <Choices />
        </>
      )}
      <StyledResult>
        {winner
          ? 'YOU WIN!'
          : winner !== null && winner === false && 'YOU LOSE'}
        {tie && 'TIE'}
      </StyledResult>

      {(winner !== null || tie) && (
        <Button onClick={handleReset}>Play Again</Button>
      )}
    </StyledPlay>
  );
};
