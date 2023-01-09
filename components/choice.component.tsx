import {
  LazyMotion,
  domAnimation,
  m,
  AnimatePresence,
  useMotionValue,
  useMotionValueEvent,
  useAnimationControls,
} from 'framer-motion';
import { FC, useContext, useEffect } from 'react';
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

export const choices: Option[] = [Scissors, Paper, Rock, Lizard, Spock];

export interface Props {
  option: Option;
  position?: string;
  initial?: string;
}

const initialPos = 'translate(-50%, -50%)';

const StyledChoice = styled(m.button)`
  background: none;
  appearance: none;
  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${initialPos};
`;

export const Choice: FC<Props> = ({ option, position }) => {
  const { dispatch } = useContext(GameContext);

  const controls = useAnimationControls();

  useEffect(() => {
    const playSound = async () => {
      const audio = new Audio(`/sounds/deal.m4a`);
      await controls.start({ transform: position });
      await audio.play();
    };
    playSound();
  }, []);

  const handleChoice = (option: Option): void => {
    if (dispatch) {
      dispatch({
        type: ReducerActionType.SET_USER_CHOICE,
        payload: option,
      });
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <StyledChoice
          type="button"
          onClick={() => handleChoice(option)}
          title={`Choose ${option.name}`}
          color={option.color}
          animate={controls}
          transition={{ duration: 0.2, delay: 0.15 * choices.indexOf(option) }}
          initial={{ transform: initialPos }}
        >
          <Chip name={option.name} color={option.color} />
        </StyledChoice>
      </AnimatePresence>
    </LazyMotion>
  );
};
