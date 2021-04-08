import React from 'react';
import BreakTimer from '../components/BreakTimer';
import SessionTimer from '../components/SessionTimer';
import PomodoroClock from '../components/PomodoroClock';
import './screens.css';

const PomodoroScreen = () => {
  return (
    <div className="pomodorodiv">
      <div className="pomodoro-clock-div">
        <PomodoroClock />
      </div>
      <div className="inlinediv">
        <BreakTimer />
        <SessionTimer />
      </div>
    </div>
  );
};

export default PomodoroScreen;
