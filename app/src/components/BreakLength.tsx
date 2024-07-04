/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { setBreakLength } from "../redux/actions/timerAction";
import { selectors } from "../redux/reducers";

const BreakLength: React.FC = () => {
  const breakLength = useSelector(selectors.getBreakLength);
  const dispatch = useDispatch();

  const decrease = () => {    
    const newBreakLength = breakLength - 1;
    dispatch(setBreakLength(newBreakLength < 1 ? 1 : newBreakLength));
  };

  const increase = () => {
    const newBreakLength = breakLength + 1;
    dispatch(setBreakLength(newBreakLength > 60 ? 60 : newBreakLength));
  };

  return (
    <>
      <h3 id="break-label">Break Length</h3>
      <div className="center-container">
        <button id="break-decrement" onClick={decrease}>-</button>
        <span id="break-length" className="card">{breakLength}</span>
        <button id="break-increment" onClick={increase}>+</button>
      </div>
    </>
  );
};

export default BreakLength;
