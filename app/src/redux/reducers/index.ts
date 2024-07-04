
import { combineReducers } from "@reduxjs/toolkit";
import timerReducer from "./timerReducer";
import * as selectors from './selectors'

const appReducer = combineReducers({
    timer: timerReducer
});

export default appReducer;

export { selectors }