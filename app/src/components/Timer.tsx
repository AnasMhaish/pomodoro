/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../redux/reducers";
import { SessionState, TimerState } from "../redux/types";
import { useEffect, useRef, useState } from "react";
import {
  DecrementTimer,
  reset,
  setSessionState,
  setTimerIntervalId,
  setTimerState,
  setTimerValueInSeconds,
} from "../redux/actions/timerAction";
import {} from "./Timer.css";

const Timer: React.FC = () => {
  const timerValueInSeconds = useSelector(selectors.getTimerValue);
  const timerState = useSelector(selectors.getTimerState);
  const sessionLength = useSelector(selectors.getSessionLength);
  const breakLength = useSelector(selectors.getBreakLength);
  const intervalId = useSelector(selectors.getTimerIntervalId);
  const sessionState = useSelector(selectors.getSessionState);

  const [timerLabel, setTimerLabel] = useState(sessionState);

  const finishAudio = useRef<HTMLAudioElement>(null);

  const dispatch = useDispatch();

  const startTimer = () => {
    clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      dispatch(DecrementTimer());
    }, 1000);
    dispatch(setTimerState(TimerState.Played));
    dispatch(setTimerIntervalId(newIntervalId));
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    dispatch(setTimerState(TimerState.Paused));
  };

  const resetTimerValue = (sessionState: SessionState) => {
    if (sessionState === SessionState.Session) {
      dispatch(setTimerValueInSeconds(sessionLength * 60));
    } else {
      dispatch(setTimerValueInSeconds(breakLength * 60));
    }
  };

  const stopTimer = (sessionState: SessionState) => {
    clearInterval(intervalId);
    dispatch(setTimerState(TimerState.Stopped));
    resetTimerValue(sessionState);
  };

  const formatTime = (timerInSeconds: number) => {
    const minutes = Math.floor(timerInSeconds / 60);
    const seconds = timerInSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const resetTimer = () => {
    stopTimer(sessionState);
    finishAudio.current!.pause();
    finishAudio.current!.currentTime = 0;
    dispatch(reset());
  };

  useEffect(() => {
    if (timerState === TimerState.Played) {
      startTimer();
    } else if (timerState === TimerState.Paused) {
      pauseTimer();
    } else {
      stopTimer(sessionState);
    }
  }, []);

  useEffect(() => {
    if (timerValueInSeconds < 0) {
      finishAudio.current?.play();
      const newState =
        sessionState === SessionState.Session
          ? SessionState.Break
          : SessionState.Session;
      dispatch(setSessionState(newState));

      stopTimer(newState);
      startTimer();
    }
  }, [timerValueInSeconds]);

  useEffect(() => {
    setTimerLabel(sessionState);
  }, [sessionState]);

  return (
    <>
      <h3 id="timer-label" >
        {timerLabel}
      </h3>
      <div>
        <div id="time-left" className="card timer">
          {formatTime(timerValueInSeconds)}
        </div>
        <div className="card">
          {timerState === TimerState.Played ? (
            <button id="start_stop" onClick={pauseTimer}>
              Pause
            </button>
          ) : (
            <button id="start_stop" onClick={startTimer}>
              Play
            </button>
          )}
          <button id="stop" onClick={() => stopTimer(sessionState)}>
            Stop
          </button>
          <button id="reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
      <audio id="beep" ref={finishAudio} src="bell.mp3" />
    </>
  );
};

export default Timer;
