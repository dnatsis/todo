import React from 'react';

const Todo = (props) => {
  const { todo } = props;
  const { index } = props;
  const currIndex = index + 1;

  return (
    <tbody>
      <tr>
        <td key={todo._id}>{currIndex}</td>
        <td key={todo._id + 1}>{todo.name}</td>
        <td key={todo._id + 2}>{todo.description}</td>
        <td key={todo._id + 3}>{todo.priority}</td>
      </tr>
    </tbody>
  );
};

export default Todo;
