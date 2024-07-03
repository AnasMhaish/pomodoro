import { SET_BREAK_LENGTH, SET_SESSION_LENGTH, SET_TIMER, SET_TIMER_STATE } from "./types";

export const setTimerState = (timerState: string) => {
  return {
    type: SET_TIMER_STATE,
    payload: timerState,
  };
};

export const setTimer = (value: number) => {
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
