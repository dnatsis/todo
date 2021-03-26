import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TodoScreen = ({ match, history }) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const { data } = await axios.get(`/api/todos/${match.params.id}`);

      setTodo(data);
    };

    fetchTodo();
  }, [match]);
  return (
    <div>
      <Link className="btn btn-secondary my-3" to="/">
        Go Back
      </Link>
      <h1>{todo.name}</h1>
      <p>{todo.description}</p>
    </div>
  );
};

export default TodoScreen;
