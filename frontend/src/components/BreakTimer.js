import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './components.css';
import { Container } from 'react-bootstrap';
import { breakTimer } from '../actions/pomodoroActions';

const BreakTimer = () => {
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);

  const decrementBreakByOneMinute = () => {
    const newBreak = breakLengthInSeconds - 60;
    if (newBreak < 0) {
      setBreakLengthInSeconds(0);
    } else {
      setBreakLengthInSeconds(newBreak);
    }
  };
  const incrementBreakByOneMinute = () => {
    setBreakLengthInSeconds(breakLengthInSeconds + 60);
  };

  const breakLengthInMinutes = moment
    .duration(breakLengthInSeconds, 's')
    .minutes();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(breakTimer(breakLengthInSeconds));
  }, [dispatch, breakLengthInSeconds]);

  return (
    <Container>
      <div className="breakdiv">
        <p className="break-label">Break</p>

        <p className="break-length">{breakLengthInMinutes}</p>
        <button className="break-increment" onClick={incrementBreakByOneMinute}>
          <i className="fas fa-plus"></i>
        </button>
        <div className="divider" />
        <button className="break-decrement" onClick={decrementBreakByOneMinute}>
          <i className="fas fa-minus"></i>
        </button>
      </div>
    </Container>
  );
};

export default BreakTimer;
