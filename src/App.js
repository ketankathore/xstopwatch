import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <div className="time-display">
          Time: {formatTime(seconds)}
        </div>
        <div className="button-group">
          {!isRunning ? (
            <button onClick={handleStart}>Start</button>
          ) : (
            <button onClick={handleStop}>Stop</button>
          )}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
