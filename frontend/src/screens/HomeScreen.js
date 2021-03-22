import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Container, Table } from 'react-bootstrap';
import Todo from '../components/Todo';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get('/api/todos');

      setTodos(data);
    };

    fetchTodos();
  }, []);

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
