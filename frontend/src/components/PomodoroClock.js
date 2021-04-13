import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Form } from 'react-bootstrap';
import momentDurationFormatSetup from 'moment-duration-format';
import { useDispatch, useSelector } from 'react-redux';
import './components.css';
import { Container } from 'react-bootstrap';
import { listTodos, updateTodo, listTodoDetails } from '../actions/todoActions';

momentDurationFormatSetup(moment);

const PomodoroClock = () => {
  const dispatch = useDispatch();

  const pomodoroSessionTime = useSelector((state) => state.pomodoroSessionTime);
  const { sessionTimer } = pomodoroSessionTime;

  const pomodoroBreakTime = useSelector((state) => state.pomodoroBreakTime);
  const { breakTimer } = pomodoroBreakTime;

  const todoList = useSelector((state) => state.todoList);
  const { todos } = todoList;

  const todoDetails = useSelector((state) => state.todoDetails);
  const { todo } = todoDetails;

  const [currentSessionType, setCurrentSessionType] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionTimer);
  const [intervalId, setIntervalId] = useState(null);
  const [todoId, setTodoId] = useState('');

  useEffect(() => {
    setTimeLeft(sessionTimer);
    dispatch(listTodos());
  }, [sessionTimer, dispatch]);

  useEffect(() => {
    dispatch(listTodoDetails(todoId));
  }, [dispatch, todoId]);

  const isStarted = intervalId != null;

  const getTodoByIdAndUpdateSessions = (id) => {
    const updatedTodo = {
      name: todo.name,
      description: todo.description,
      priority: todo.priority,
      finished: todo.finished,
      sessions: todo.sessions + 1,
    };
    console.log(id);
    console.log(updatedTodo);

    dispatch(updateTodo(id, updatedTodo));
  };

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
            getTodoByIdAndUpdateSessions(todoId);
            setCurrentSessionType('Break');
            setTimeLeft(breakTimer);
          }
        });
      }, 100);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetClick = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSessionType('Session');
    setTimeLeft(sessionTimer);
  };

  const onChangeHandler = (e) => {
    setTodoId(e.target.value);
  };

  const formattedTimeLeft = moment
    .duration(timeLeft, 's')
    .format('mm:ss', { trim: false });

  return (
    <div>
      <Container>
        <Form.Group controlId="todoNames" className="controlTodo">
          <Form.Label>Todos</Form.Label>
          <div className="divider" />
          <Form.Control as="select" onChange={onChangeHandler}>
            <option value="">Other</option>
            {todos.map((todo) => (
              <option key={todo._id} value={todo._id}>
                {todo.name}
              </option>
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
