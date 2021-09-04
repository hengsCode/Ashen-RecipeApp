import { React, useState } from "react";
import "./styles.css";
import { PlayArrow, Pause, RotateLeft } from "@material-ui/icons";

const MethodTimer = () => {
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const startTimer = () => {};

  const pauseTimer = () => {};

  const resetTimer = () => {};

  return (
    <div className="method-timer-container">
      <div className="method-timer-content">
        <svg className="method-timer-clock">
          <circle cx="125" cy="125" r="120" />
        </svg>
        <svg className="method-timer-progress">
          <circle cx="125" cy="125" r="120" />
        </svg>
        <div className="method-timer-value-container">
          <input
            type="text"
            className="method-timer-minutes"
            maxLength={2}
            value={minutes}
          />
          :
          <input
            type="text"
            className="method-timer-seconds"
            maxLength={2}
            value={seconds}
          />
        </div>
      </div>
      <div className="method-timer-button-container">
        <PlayArrow class="method-timer-icon" onClick={startTimer} />
        <Pause class="method-timer-icon" onClick={pauseTimer} />
        <RotateLeft class="method-timer-icon" onClick={resetTimer} />
      </div>
    </div>
  );
};

export default MethodTimer;
