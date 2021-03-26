import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listTodoDetails } from '../actions/todoActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const TodoScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const todoDetails = useSelector((state) => state.todoDetails);
  const { loading, error, todo } = todoDetails;

  useEffect(() => {
    dispatch(listTodoDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-secondary my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h1>{todo.name}</h1>
          <p>{todo.description}</p>
        </>
      )}
    </>
  );
};

export default TodoScreen;
