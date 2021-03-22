import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
const Todo = (props) => {
  const { todo } = props;
  const { index } = props;
  const currIndex = index + 1;

  return (
    <tbody>
      <tr key={currIndex}>
        <td key={currIndex + 0.1}>{currIndex}</td>
        <LinkContainer style={{ cursor: 'pointer' }} to={`/todo/${todo._id}`}>
          <td key={currIndex + 0.2}>{todo.name}</td>
        </LinkContainer>
        <td key={todo._id + 0.3}>{todo.description}</td>
        <td key={todo._id + 0.4}>{todo.priority}</td>
      </tr>
    </tbody>
  );
};

export default Todo;
