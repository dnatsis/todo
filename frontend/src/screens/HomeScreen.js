import React from 'react';
import { Row, Container, ListGroup } from 'react-bootstrap';
import todos from '../todos';

const HomeScreen = () => {
  return (
    <>
      <h1>Current Todos</h1>
      <Row>
        <Container>
          <ListGroup className="py-3">
            {todos.map((todo) => (
              <ListGroup.Item>{todo.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </Row>
    </>
  );
};

export default HomeScreen;
