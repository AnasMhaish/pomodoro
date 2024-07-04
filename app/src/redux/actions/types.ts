export const SET_BREAK_LENGTH = "SET_BREAK_LENGTH";
export const SET_SESSION_LENGTH = "SET_SESSION_LENGTH";
export const SET_TIMER = "SET_TIMER";
export const SET_TIMER_STATE = "SET_TIMER_STATE";

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

export type TimerActionTypes = ISetBreakLength | ISetSessionLength | ISetTimer | ISetTimerState;