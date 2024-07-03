/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { setBreakLength } from "../redux/actions/timerAction";
import { useEffect } from "react";

const BreakLength = () => {
  const breakLength = useSelector((state: any) => state.breakLength) || 5;
  const dispatch = useDispatch();

  const decrease = () => {    
    const newBreakLength = breakLength - 1;
    dispatch(setBreakLength(newBreakLength < 1 ? 1 : newBreakLength));
  };

  const increase = () => {
    const newBreakLength = breakLength + 1;
    dispatch(setBreakLength(newBreakLength > 60 ? 60 : newBreakLength));
  };

  useEffect(() => {
    console.log("breakLength:", breakLength);
  }, [breakLength]);

  return (
    <>
      <h3>Break Length</h3>
      <div className="center-container">
        <button onClick={decrease}>-</button>
        <span className="card">{breakLength}</span>
        <button onClick={increase}>+</button>
      </div>
    </>
  );
};

export default BreakLength;
