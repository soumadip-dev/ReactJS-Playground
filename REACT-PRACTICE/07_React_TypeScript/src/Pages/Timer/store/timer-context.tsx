import { createContext, useContext, useReducer, useState, type ReactNode } from 'react';

export type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextType = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

// Context is initialized with null because the real value
// will be provided by TimersProvider
const TimersContext = createContext<TimersContextType | null>(null);

/*
Problem:
When using useContext(TimersContext), TypeScript still considers
the value as (TimersContextType | null) even if the component
is wrapped inside TimersProvider.

Solutions:

Option 1: Non-null assertion operator (!)
Use when you are 100% sure the context exists.

Example:
const ctx = useContext(TimersContext)!;

Option 2: Manual null check
Safer approach but requires repeating the check everywhere.

Example:
const ctx = useContext(TimersContext);
if (ctx === null) {
  throw new Error('TimersContext must be used inside TimersProvider');
}

Option 3 (Best Practice): Create a custom hook
Centralizes the null check and keeps components clean.
*/

export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('useTimersContext must be used inside TimersProvider');
  }

  return timersCtx;
};

type TimersProviderProps = {
  children: ReactNode;
};

function TimersProvider({ children }: TimersProviderProps) {
  // const [isRunning, setIsRunning] = useState<boolean>(false); => Not using useState now

  const initialState: TimersState = {
    isRunning: false,
    timers: [],
  };

  // type ActionType = {
  //   type: 'ADD_TIMER' | 'START_TIMER' | 'STOP_TIMER';
  // };
  //
  // The problem here is that ADD_TIMER needs a payload,
  // but the other actions do not. We could make the payload optional,
  // but that would allow other actions to also access the payload,
  // which is not ideal.
  //
  // That is why we use a discriminated union type, where we can
  // specify the exact payload type for each action.

  type StartTimersActionType = {
    type: 'START_TIMER';
  };

  type StopTimersActionType = {
    type: 'STOP_TIMER';
  };

  type AddTimersActionType = {
    type: 'ADD_TIMER';
    payload: Timer; // Here we specify that ADD_TIMER must have a Timer as its payload
  };

  type ActionType = StartTimersActionType | StopTimersActionType | AddTimersActionType;

  const reducer = (state: TimersState, action: ActionType): TimersState => {
    switch (action.type) {
      case 'ADD_TIMER':
        return {
          ...state,
          timers: [
            ...state.timers,
            { name: action.payload.name, duration: action.payload.duration },
          ],
        };
      case 'START_TIMER':
        return { ...state, isRunning: true };
      case 'STOP_TIMER':
        return { ...state, isRunning: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const ctxValues: TimersContextType = {
    timers: state.timers,
    isRunning: state.isRunning,
    addTimer: timerData => {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimer: () => {
      dispatch({ type: 'START_TIMER' });
    },
    stopTimer: () => {
      dispatch({ type: 'STOP_TIMER' });
    },
  };

  return <TimersContext.Provider value={ctxValues}>{children}</TimersContext.Provider>;
}

export { TimersContext, TimersProvider };
