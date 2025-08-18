import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function validateTime(num) {
    if (num >= 0 && num <= 9) {
      return "0" + String(num);
    }
    return String(num);
  }
  function handleStartBtn() {
    setIsRunning(true);
  }
  function handleStopBtn() {
    setIsRunning(false);
  }
  function handleResetBtn() {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSec) => {
          if (prevSec + 1 === 60) {
            setMinutes((prevMin) => {
              if (prevMin + 1 === 60) {
                setHours((prevHr) => prevHr + 1);
                return 0;
              }
              return prevMin + 1;
            });
            return 0;
          }
          return prevSec + 1;
        });
      }, 1000);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    // CLEANUP
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="container">
      <div className="timer-area">
        {validateTime(hours)}:{validateTime(minutes)}:{validateTime(seconds)}
      </div>
      <div className="buttons">
        {isRunning ? (
          <button className="stop" onClick={handleStopBtn}>
            STOP
          </button>
        ) : (
          <button onClick={handleStartBtn}>START</button>
        )}
        <button onClick={handleResetBtn}>RESET</button>
      </div>
    </div>
  );
};

export default App;
