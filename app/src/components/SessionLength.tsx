/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { setSessionLength } from "../redux/actions/timerAction";
import { selectors } from "../redux/reducers";
import { TimerState } from "../redux/types";

const BreakLength: React.FC = () => {
  const sessionLength = useSelector(selectors.getSessionLength);
  const timerState = useSelector(selectors.getTimerState);
  const dispatch = useDispatch();

  const decrease = () => {
    const newSessionLength = sessionLength - 1;
    dispatch(setSessionLength(newSessionLength < 15 ? 15 : newSessionLength));
  };

  const increase = () => {
    const newSessionLength = sessionLength + 1;
    dispatch(setSessionLength(newSessionLength > 60 ? 60 : newSessionLength));
  };

  const IsControlDisabled = () => {
    return timerState === TimerState.Played;
  }

  return (
    <>
      <h3 id="session-label">Session Length</h3>
      <div className="center-container">
        <button
          id="session-decrement"
          disabled={IsControlDisabled()}
          onClick={decrease}
        >
          -
        </button>
        <span id="session-length" className="card">
          {sessionLength}
        </span>
        <button
          id="session-increment"
          disabled={IsControlDisabled()}
          onClick={increase}
        >
          +
        </button>
      </div>
    </>
  );
};

export default BreakLength;
