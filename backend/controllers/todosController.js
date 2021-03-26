import asyncHandler from 'express-async-handler';
import Todos from '../models/todosModel.js';

// @desc Fetch all todos
// @route GET /api/todos
// @access public
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todos.find({});

  res.json(todos);
});

// @desc Fetch single todo
// @route GET /api/todos/:id
// @access public
const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id);

  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

export { getTodos, getTodoById };
