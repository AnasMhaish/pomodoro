/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { setBreakLength } from "../redux/actions/timerAction";
import { selectors } from "../redux/reducers";
import { TimerState } from "../redux/types";

const BreakLength: React.FC = () => {
  const breakLength = useSelector(selectors.getBreakLength);
  const timerState = useSelector(selectors.getTimerState);
  const dispatch = useDispatch();

  const decrease = () => {
    const newBreakLength = breakLength - 1 < 1 ? 1 : breakLength - 1;
    dispatch(setBreakLength(newBreakLength));
  };

  const increase = () => {
    const newBreakLength = breakLength + 1 > 60 ? 60 : breakLength + 1;
    dispatch(setBreakLength(newBreakLength));
  };

  const IsControlDisabled = () => {
    return timerState === TimerState.Played;
  };

  return (
    <>
      <h3 id="break-label">Break Length</h3>
      <div className="center-container">
        <button
          id="break-decrement"
          disabled={IsControlDisabled()}
          onClick={decrease}
        >
          -
        </button>
        <span id="break-length" className="card">
          {breakLength}
        </span>
        <button
          id="break-increment"
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
