import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoScreen = ({ match, history }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const { data } = await axios.get(`/api/todos/${match.params.id}`);

      setTodo(data);
    };

    fetchTodo();
  }, []);
  return (
    <div>
      <h1>{todo.name}</h1>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoScreen;
