
import { combineReducers } from "@reduxjs/toolkit";
import timer from "./timerReducer";

const appReducer = combineReducers({
    timer
});

export default appReducer;