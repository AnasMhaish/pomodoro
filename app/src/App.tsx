import { useState } from "react";
import pomodoroLogo from "./assets/pomodoro.png";
import BreakLength from "./components/BreakLength";
import SessionLength from "./components/SessionLength";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={pomodoroLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>25 + 5 Clock</h1>

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
          count is {count}
        </button>
        <p></p>
      </div>
      <p className="footer">Designed and Developed by: Anas Mhaish</p>
    </>
  );
}

export default App;
