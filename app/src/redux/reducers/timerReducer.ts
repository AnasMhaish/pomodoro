/* eslint-disable @typescript-eslint/no-explicit-any */

import { TimerActionTypes } from "../actions/types";
import { TimerState } from "../types";

export interface IState {
    timerState: string;
    timerValue: number;
    breakLength: number;
    sessionLength: number;
}

const initialState: IState = {
    timerState: TimerState.Stopped,
    timerValue: 2500,
    breakLength: 5,
    sessionLength: 25,
};

export default (state = initialState, action: TimerActionTypes) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "SET_TIMER_STATE":
            return { ...state, timerState: action.payload };
        case "SET_TIMER":
            return { ...state, timerValue: action.payload };
        case "SET_BREAK_LENGTH":
            return { ...state, breakLength: action.payload };
        case "SET_SESSION_LENGTH":
            return { ...state, sessionLength: action.payload };
        default:
            return state;
    }
}