import React from 'react';
import BreakTimer from '../components/BreakTimer';
import SessionTimer from '../components/SessionTimer';

const PomodoroScreen = () => {
  return (
    <div>
      <h1>This is were the Pomodor Timer will go!</h1>
      <BreakTimer />
      <SessionTimer />
    </div>
  );
};

export default PomodoroScreen;
