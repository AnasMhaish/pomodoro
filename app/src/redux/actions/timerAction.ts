import { SessionState, TimerState } from "../types";
import {
  SET_BREAK_LENGTH,
  SET_SESSION_LENGTH,
  SET_TIMER,
  SET_TIMER_STATE,
  DECREMENT_TIMER,
  RESET,
  SET_TIMER_INTERVAL_ID,
  SET_SESSION_STATE,
} from "./types";

export const setTimerState = (timerState: TimerState) => {
  return {
    type: SET_TIMER_STATE,
    payload: timerState,
  };
};

export const setTimerValueInSeconds = (value: number) => {
  return {
    type: SET_TIMER,
    payload: value,
  };
};

export const setBreakLength = (value: number) => {
  return {
    type: SET_BREAK_LENGTH,
    payload: value,
  };
};

export const setSessionLength = (value: number) => {
  return {
    type: SET_SESSION_LENGTH,
    payload: value,
  };
};

export const DecrementTimer = () => {
  return {
    type: DECREMENT_TIMER,
  };
};

export const setTimerIntervalId = (value: number) => {
  return {
    type: SET_TIMER_INTERVAL_ID,
    payload: value,
  };
};

export const setSessionState = (sessionState: SessionState) => {
  return {
    type: SET_SESSION_STATE,
    payload: sessionState,
  };
}

export const reset = () => {
  return {
    type: RESET,
  };
};
