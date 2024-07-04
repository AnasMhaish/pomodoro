/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../redux/reducers";
import { TimerState } from "../redux/types";
import { useCallback, useEffect, useState } from "react";

const Timer: React.FC = () => {
  const timerValue = useSelector(selectors.getTimerValue);
  const timerState = useSelector(selectors.getTimerState);
  const sessionLength = useSelector(selectors.getSessionLength);
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const dispatch = useDispatch();

  const startTimer = useCallback(() => {
    dispatch({ type: "SET_TIMER_STATE", payload: TimerState.Played });
    const intervalId = setInterval(() => {
      dispatch({ type: "SET_TIMER", payload: timerValue - 1 });
    }, 1000);
    setIntervalId(intervalId);
  }, [dispatch, timerValue]);

  const pauseTimer = useCallback(() => {
    dispatch({ type: "SET_TIMER_STATE", payload: TimerState.Paused });
    clearInterval(intervalId);
  }, [dispatch, intervalId]);

  const stopTimer = useCallback(() => {
    dispatch({ type: "SET_TIMER_STATE", payload: TimerState.Stopped });
    clearInterval(intervalId);
    dispatch({ type: "SET_TIMER", payload: sessionLength });
  }, [dispatch, intervalId, sessionLength]);

  useEffect(() => {
    if (timerState === TimerState.Played) {
      startTimer();
    } else if (timerState === TimerState.Paused) {
      pauseTimer();
    } else {
      stopTimer();
    }
  }, [timerState, pauseTimer, startTimer, stopTimer]);

  return (
    <>
      <h3 id="session-label">Session</h3>
      <div className="center-container">
        <span id="session-length" className="card">
          {timerValue}
        </span>
      </div>
    </>
  );
};

export default Timer;
