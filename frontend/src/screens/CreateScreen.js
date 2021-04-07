import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../actions/todoActions';
import { TODO_CREATE_RESET } from '../constants/todoConstants';

const CreateScreen = ({ history }) => {
  const [name, setName] = useState(' ');
  const [description, setDescription] = useState(' ');
  const [priority, setPriority] = useState('Low');
  const [finished] = useState(false);

  const todoCreate = useSelector((state) => state.todoCreate);
  const { success } = todoCreate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      history.push('/');
      dispatch({ type: TODO_CREATE_RESET });
    }
  }, [success, history, dispatch]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const todo = {
      name: name,
      description: description,
      priority: priority,
      finished: finished,
    };

    dispatch(createTodo(todo));
  };

  return (
    <>
      <Link className="btn btn-secondary my-3" to="/">
        Go Back
      </Link>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="todoName">
          <Form.Label>Todo name</Form.Label>
          <Form.Control
            type="todoName"
            placeholder="Enter todo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="todoDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="description"
            placeholder="Enter todo description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="todoDescription">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateScreen;
