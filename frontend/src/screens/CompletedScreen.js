import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Container, Table, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {
  listCompletedTodos,
  deleteCompletedTodo,
} from '../actions/todoActions';

const CompletedScreen = ({ history }) => {
  const dispatch = useDispatch();

  const todoListCompleted = useSelector((state) => state.todoListCompleted);
  const { loading, error, todos } = todoListCompleted;

  const todoDeleteCompleted = useSelector((state) => state.todoDeleteCompleted);
  const { success } = todoDeleteCompleted;

  useEffect(() => {
    if (success) {
      history.push('/completed');
    }
    dispatch(listCompletedTodos());
  }, [dispatch, history, success]);

  const deleteHandler = (id) => {
    dispatch(deleteCompletedTodo(id));
  };

  return (
    <>
      <h1>Current Todos</h1>
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
                  <th>SESSIONS</th>
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
                    <td>{todo.sessions}</td>
                    <td style={{ display: 'flex' }}>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(todo._id)}
                      >
                        <i className="fas fa-trash"></i>
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

export default CompletedScreen;
