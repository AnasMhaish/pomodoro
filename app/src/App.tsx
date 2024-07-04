import { useState } from "react";
import pomodoroLogo from "./assets/pomodoro.png";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={pomodoroLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Pomodoro</h1>

      <div className="center-container">
        <div className="column">
          <BreakLength />
        </div>
        <div className="column">
          <SessionLength />
        </div>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <Timer />
        </button>
        <p></p>
      </div>
      <p className="footer">Designed and Developed by: <a href="https://www.linkedin.com/in/anasmhaish/">Anas Mhaish</a></p>
    </>
  );
}

export default App;
