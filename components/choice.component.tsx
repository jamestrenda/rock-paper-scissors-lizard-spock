import Image from 'next/image';
import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GameContext, ReducerActionType } from './gameProvider.component';
import { Chip } from './chip.component';

export interface Option {
  name: string;
  beats: string[];
  color: string;
}

export const Rock: Option = {
  name: 'Rock',
  beats: ['Scissors', 'Lizard'],
  color: 'var(--color-rock)',
};
export const Paper: Option = {
  name: 'Paper',
  beats: ['Rock', 'Spock'],
  color: 'var(--color-paper)',
};
export const Scissors: Option = {
  name: 'Scissors',
  beats: ['Paper', 'Lizard'],
  color: 'var(--color-scissors)',
};
export const Lizard: Option = {
  name: 'Lizard',
  beats: ['Paper', 'Spock'],
  color: 'var(--color-lizard)',
};
export const Spock: Option = {
  name: 'Spock',
  beats: ['Rock', 'Scissors'],
  color: 'var(--color-spock)',
};

export const choices: Option[] = [Rock, Paper, Scissors, Lizard, Spock];

export interface Props {
  option: Option;
}

const StyledChoice = styled.button`
  background: none;
  appearance: none;
  border: none;
`;

export const Choice: FC<Props> = ({ option }) => {
  const { state, dispatch } = useContext(GameContext);

  const handleChoice = (option: Option): void => {
    if (dispatch) {
      dispatch({
        type: ReducerActionType.SET_USER_CHOICE,
        payload: option,
      });
    }
  };
  return (
    <StyledChoice
      type="button"
      onClick={() => handleChoice(option)}
      title={`Choose ${option.name}`}
      color={option.color}
    >
      <Chip name={option.name} color={option.color} />
    </StyledChoice>
  );
};
