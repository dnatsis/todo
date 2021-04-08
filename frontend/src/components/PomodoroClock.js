import React, { useState, useEffect } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { useSelector } from 'react-redux';
import './components.css';

momentDurationFormatSetup(moment);

const PomodoroClock = () => {
  const pomodoroSessionTime = useSelector((state) => state.pomodoroSessionTime);
  const { sessionTimer } = pomodoroSessionTime;

  const pomodoroBreakTime = useSelector((state) => state.pomodoroBreakTime);
  const { breakTimer } = pomodoroBreakTime;

  const [currentSessionType, setCurrentSessionType] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionTimer);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setTimeLeft(sessionTimer);
  }, [sessionTimer]);

  const isStarted = intervalId != null;

  const handleStartClick = () => {
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          if (currentSessionType === 'Session') {
            setCurrentSessionType('Break');
            setTimeLeft(breakTimer);
          }
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType('Session');
    setTimeLeft(sessionTimer);
  };

  const formattedTimeLeft = moment
    .duration(timeLeft, 's')
    .format('mm:ss', { trim: false });

  return (
    <div>
      <p>{currentSessionType === 'Session' ? 'Session' : 'Break'}</p>
      <h2 className="session-clock">{formattedTimeLeft}</h2>
      <button className="pom-start" onClick={handleStartClick}>
        {isStarted ? (
          <i className="fas fa-pause"></i>
        ) : (
          <i className="fas fa-play"></i>
        )}
      </button>
      <div className="divider" />
      <button className="pom-reset" onClick={handleResetClick}>
        <i className="fas fa-redo"></i>
      </button>
    </div>
  );
};

export default PomodoroClock;
