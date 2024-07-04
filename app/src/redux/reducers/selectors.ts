import { TimerState } from "../types";

export const getBreakLength = (state: any) => state.timer.breakLength;

export const getSessionLength = (state: any) => state.timer.sessionLength;

export const getTimerValue = (state: any) => state.timer.timerValue;

export const getTimerState = (state: any) => state.timer.timerState as TimerState;

