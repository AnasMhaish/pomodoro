import { TimerState } from "../types";

export const getBreakLength = (state: any) => state.timer.breakLength;

export const getSessionLength = (state: any) => state.timer.sessionLength;

export const getTimerValue = (state: any) => state.timer.timerValueInSeconds;

export const getBreakValue = (state: any) => state.timer.breakValueInSeconds;

export const getTimerState = (state: any) => state.timer.timerState as TimerState;

export const getTimerIntervalId = (state: any) => state.timer.timerIntervalId;

export const getSessionState = (state: any) => state.timer.sessionState;