/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IState {
    timerState: string;
    timer: number;
    breakLength: number;
    sessionLength: number;
}

const initialState: IState = {
    timerState: "stopped",
    timer: 2500,
    breakLength: 5,
    sessionLength: 25,
};

export default function timerReducer(state = initialState, action: any) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case "SET_TIMER_STATE":
            return { ...state, timerState: action.payload };
        case "SET_TIMER":
            return { ...state, timer: action.payload };
        case "SET_BREAK_LENGTH":
            return { ...state, breakLength: action.payload };
        case "SET_SESSION_LENGTH":
            return { ...state, sessionLength: action.payload };
        default:
            return state;
    }
}