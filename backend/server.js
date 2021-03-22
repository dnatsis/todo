import express from 'express';
import todos from './data/todos.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find((p) => p._id === req.params.id);
  res.json(todo);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
