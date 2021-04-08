import React from 'react';
import BreakTimer from '../components/BreakTimer';
import SessionTimer from '../components/SessionTimer';
import { useSelector } from 'react-redux';
import './screens.css';

const PomodoroScreen = () => {
  const pomodoroSessionTime = useSelector((state) => state.pomodoroSessionTime);
  const { sessionTimer } = pomodoroSessionTime;

  return (
    <div className="pomodorodiv">
      <h1>This is were the Pomodor Timer will go!</h1>
      <div className="inlinediv">
        <BreakTimer />
        <SessionTimer />
      </div>
    </div>
  );
};

export default PomodoroScreen;
