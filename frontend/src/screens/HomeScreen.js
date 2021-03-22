import React from 'react';
import { Row, Container, Table } from 'react-bootstrap';
import todos from '../todos';
import Todo from '../components/Todo';

const HomeScreen = () => {
  return (
    <>
      <h1>Current Todos</h1>
      <Row>
        <Container>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Priority</th>
              </tr>
            </thead>
            {todos.map((todo, index) => (
              <Todo todo={todo} index={index} />
            ))}
          </Table>
        </Container>
      </Row>
    </>
  );
};

export default HomeScreen;
