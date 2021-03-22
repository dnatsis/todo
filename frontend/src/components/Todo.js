import React from 'react';

const Todo = (props) => {
  const { todo } = props;
  const { index } = props;
  const currIndex = index + 1;

  return (
    <tbody>
      <tr>
        <td>{currIndex}</td>
        <td>{todo.name}</td>
        <td>{todo.description}</td>
        <td>{todo.priority}</td>
      </tr>
    </tbody>
  );
};

export default Todo;
