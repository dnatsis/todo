import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { sessionTimer } from '../actions/pomodoroActions';
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionTimer(sessionLengthInSeconds));
  }, [dispatch, sessionLengthInSeconds]);

  return (
    <Container>
      <div className="sessiondiv">
        <p className="session-label">Session</p>

        <p className="session-length">{sessionLengthInMinutes}</p>
        <button
          className="session-increment"
          onClick={incrementSessionByOneMinute}
        >
          <i className="fas fa-plus"></i>
        </button>
        <div className="divider" />
        <button
          className="session-decrement"
          onClick={decrementSessionByOneMinute}
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>
    </Container>
  );
};

export default SessionTimer;
