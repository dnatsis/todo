import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Container, Table, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {
  listTodos,
  deleteTodo,
  completeTodo,
  createCompletedTodo,
} from '../actions/todoActions';
import { TODO_COMPLETED_CREATE_RESET } from '../constants/todoConstants';

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoList);
  const { loading, error, todos } = todoList;

  const todoDelete = useSelector((state) => state.todoDelete);
  const { error: errorDelete, success } = todoDelete;

  const todoCompletedCreate = useSelector((state) => state.todoCompletedCreate);
  const { success: successCompletedCreate } = todoCompletedCreate;

  useEffect(() => {
    if (success) {
      history.push('/');
    }
    dispatch(listTodos());
    if (successCompletedCreate && success) {
      history.push('/completed');
      dispatch({ type: TODO_COMPLETED_CREATE_RESET });
    }
  }, [dispatch, success, history, successCompletedCreate]);

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const completeHandler = (todo) => {
    dispatch(completeTodo(todo._id));
    const todoCompleted = {
      name: todo.name,
      description: todo.description,
      priority: todo.priority,
      finished: todo.finished,
    };
    dispatch(createCompletedTodo(todoCompleted));

    dispatch(deleteTodo(todo._id));
  };

  return (
    <>
      <h1>Current Todos</h1>
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Container>
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>DESCRIPTION</th>
                  <th>PRIORITY</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo._id}>
                    <td>{todo._id}</td>
                    <LinkContainer
                      style={{ cursor: 'pointer' }}
                      to={`/todo/${todo._id}`}
                    >
                      <td>{todo.name}</td>
                    </LinkContainer>
                    <td>{todo.description}</td>
                    <td>{todo.priority}</td>
                    <td style={{ display: 'flex' }}>
                      <LinkContainer to={`/todo/${todo._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(todo._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        className="btn-sm"
                        onClick={() => completeHandler(todo)}
                      >
                        <i className="fas fa-check"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
