import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Container, Table, Button } from 'react-bootstrap';
import { listTodos } from '../actions/todoActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoList);
  const { loading, error, todos } = todoList;

  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  const deleteHandler = (id) => {
    console.log('doesnt matter');
  };

  return (
    <>
      <h1>Current Todos</h1>
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
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id}>
                  <td>{todo._id}</td>
                  <td>{todo.name}</td>
                  <td>{todo.description}</td>
                  <td>{todo.priority}</td>
                  <td>
                    <LinkContainer to={`/todo/${todo._id}`}>
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
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Row>
    </>
  );
};

export default HomeScreen;