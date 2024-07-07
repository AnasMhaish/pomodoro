/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  DECREMENT_TIMER,
  RESET,
  SET_BREAK_LENGTH,
  SET_SESSION_LENGTH,
  SET_SESSION_STATE,
  SET_TIMER,
  SET_TIMER_INTERVAL_ID,
  SET_TIMER_STATE,
  TimerActionTypes,
} from "../actions/types";
import { SessionState, TimerState } from "../types";

export interface IState {
  timerState: TimerState;
  sessionState: SessionState;
  timerValueInSeconds: number;
  breakLength: number;
  sessionLength: number;
  timerIntervalId: number | undefined;
}

const initialState: IState = {
  timerState: TimerState.Stopped,
  sessionState: SessionState.Session,
  timerValueInSeconds: 25 * 60,
  breakLength: 5,
  sessionLength: 25,
  timerIntervalId: undefined,
};

export default (state = initialState, action: TimerActionTypes) => {
  switch (action.type) {
    case SET_TIMER_STATE:
      return { ...state, timerState: action.payload };
    case SET_TIMER:
      return { ...state, timerValueInSeconds: action.payload };
    case SET_BREAK_LENGTH:
      return { ...state, breakLength: action.payload };
    case SET_SESSION_LENGTH:
      return { ...state, sessionLength: action.payload };
    case DECREMENT_TIMER:
      return { ...state, timerValueInSeconds: state.timerValueInSeconds - 1 };
    case SET_TIMER_INTERVAL_ID:
      return { ...state, timerIntervalId: action.payload };
    case SET_SESSION_STATE:
      return { ...state, sessionState: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
