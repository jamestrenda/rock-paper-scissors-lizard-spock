import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  Reducer,
  useReducer,
} from 'react';

import { Option } from './choice.component';

// TODO: look into machine learning to determine the best choice for the computer that way it's not just random
//? could be as simple as storing the user's choices and then choosing the option that beats the most common choice
interface Props {
  children: ReactNode;
}

interface StateProps {
  start: boolean;
  userChoice?: Option | null;
  computerChoice?: Option | null;
  winner?: boolean | null;
  tie?: boolean | null;
  score: number;
}

export enum ReducerActionType {
  START,
  SET_USER_CHOICE,
  SET_COMPUTER_CHOICE,
  SET_WINNER,
  SET_TIE,
  INCREMENT_SCORE,
  RESET,
}

interface GameContext {
  state: StateProps;
  dispatch?: Dispatch<any>;
}
const initialState = {
  start: false,
  userChoice: null,
  computerChoice: null,
  winner: null,
  tie: null,
  score: 0,
};
const GameContext = createContext<GameContext>({
  state: initialState,
});

export type ReducerAction = {
  type: ReducerActionType;
  payload?: any;
};
const reducer: Reducer<StateProps, ReducerAction> = (state, action) => {
  switch (action.type) {
    case ReducerActionType.START: {
      return { ...state, start: true };
    }
    case ReducerActionType.SET_USER_CHOICE: {
      return { ...state, userChoice: action.payload };
    }
    case ReducerActionType.SET_COMPUTER_CHOICE: {
      return { ...state, computerChoice: action.payload };
    }
    case ReducerActionType.SET_WINNER: {
      return { ...state, winner: action.payload };
    }
    case ReducerActionType.INCREMENT_SCORE: {
      return { ...state, score: state.score + 1 };
    }
    case ReducerActionType.SET_TIE: {
      return { ...state, tie: true };
    }
    case ReducerActionType.RESET: {
      return {
        ...initialState,
        score: state.score,
        start: true,
      };
    }
    default:
      throw new Error('Invalid action type');
  }
};
const GameProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

const GameConsumer = GameContext.Consumer;

export { GameProvider, GameConsumer, GameContext };
