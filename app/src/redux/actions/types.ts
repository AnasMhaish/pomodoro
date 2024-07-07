export const SET_BREAK_LENGTH = "SET_BREAK_LENGTH";
export const SET_SESSION_LENGTH = "SET_SESSION_LENGTH";
export const SET_TIMER = "SET_TIMER";
export const SET_TIMER_STATE = "SET_TIMER_STATE";
export const SET_SESSION_STATE = "SET_SESSION_STATE";
export const DECREMENT_TIMER = "DECREMENT_TIMER";
export const SET_TIMER_INTERVAL_ID = "SET_TIMER_INTERVAL_ID";
export const RESET = "RESET";

interface ISetBreakLength {
  type: typeof SET_BREAK_LENGTH;
  payload: number;
}

interface ISetSessionLength {
  type: typeof SET_SESSION_LENGTH;
  payload: number;
}

interface ISetTimer {
  type: typeof SET_TIMER;
  payload: number;
}

interface ISetTimerState {
  type: typeof SET_TIMER_STATE;
  payload: string;
}

interface IDecrementTimer {
  type: typeof DECREMENT_TIMER;
}

interface ISetTimerIntervalId {
  type: typeof SET_TIMER_INTERVAL_ID;
  payload: number;
}

interface ISetSessionState {
    type: typeof SET_SESSION_STATE;
    payload: string;
}

interface IReset {
  type: typeof RESET;
}

export type TimerActionTypes =
  | ISetBreakLength
  | ISetSessionLength
  | ISetTimer
  | ISetTimerState
  | IDecrementTimer
  | ISetTimerIntervalId
  | ISetSessionState
  | IReset;
