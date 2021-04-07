import React, { useState } from 'react';
import moment from 'moment';
import './components.css';

const SessionTimer = () => {
  const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(60 * 25);

  const decrementSessionByOneMinute = () => {
    const newSession = sessionLengthInSeconds - 60;
    if (newSession < 0) {
      setSessionLengthInSeconds(0);
    } else {
      setSessionLengthInSeconds(newSession);
    }
  };
  const incrementSessionByOneMinute = () => {
    setSessionLengthInSeconds(sessionLengthInSeconds + 60);
  };

  const sessionLengthInMinutes = moment
    .duration(sessionLengthInSeconds, 's')
    .minutes();

  return (
    <div className="sessiondiv">
      <p className="session-label">Session</p>

      <p className="session-length">{sessionLengthInMinutes}</p>
      <button
        className="session-increment"
        onClick={incrementSessionByOneMinute}
      >
        <i className="fas fa-plus"></i>
      </button>
      <button
        className="session-decrement"
        onClick={decrementSessionByOneMinute}
      >
        <i className="fas fa-minus"></i>
      </button>
    </div>
  );
};

export default SessionTimer;
