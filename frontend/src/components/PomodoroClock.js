import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Form } from 'react-bootstrap';
import momentDurationFormatSetup from 'moment-duration-format';
import { useDispatch, useSelector } from 'react-redux';
import './components.css';
import { Container } from 'react-bootstrap';
import { listTodos } from '../actions/todoActions';

momentDurationFormatSetup(moment);

const PomodoroClock = () => {
  const dispatch = useDispatch();

  const pomodoroSessionTime = useSelector((state) => state.pomodoroSessionTime);
  const { sessionTimer } = pomodoroSessionTime;

  const pomodoroBreakTime = useSelector((state) => state.pomodoroBreakTime);
  const { breakTimer } = pomodoroBreakTime;

  const todoList = useSelector((state) => state.todoList);
  const { todos } = todoList;

  const [currentSessionType, setCurrentSessionType] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionTimer);
  const [intervalId, setIntervalId] = useState(null);
  const [todoName, setTodoName] = useState('');

  useEffect(() => {
    setTimeLeft(sessionTimer);
    dispatch(listTodos());
  }, [sessionTimer, dispatch]);

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
      <Container>
        <Form.Group controlId="todoNames" className="controlTodo">
          <Form.Label>Todos</Form.Label>
          <Form.Control
            as="select"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          >
            {todos.map((todo) => (
              <option>{todo.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Container>
      <Container>
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
      </Container>
    </div>
  );
};

export default PomodoroClock;
