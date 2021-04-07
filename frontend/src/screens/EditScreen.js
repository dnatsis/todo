import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { updateTodo } from '../actions/todoActions';
import { TODO_UPDATE_RESET } from '../constants/todoConstants';

const EditScreen = ({ history, match }) => {
  const [name, setName] = useState(' ');
  const [description, setDescription] = useState(' ');
  const [priority, setPriority] = useState('Low');
  const [finished] = useState(false);

  const todoUpdate = useSelector((state) => state.todoUpdate);
  const { success } = todoUpdate;

  const dispatch = useDispatch();

  const id = match.params.id;

  useEffect(() => {
    if (success) {
      history.push('/');
      dispatch({ type: TODO_UPDATE_RESET });
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

    dispatch(updateTodo(id, todo));
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
            placeholder="Entet todo"
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
          Update
        </Button>
      </Form>
    </>
  );
};

export default EditScreen;
