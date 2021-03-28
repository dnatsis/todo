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

// @desc Create a New Todo
// @route POST /api/todos
// @access Public
const createTodo = asyncHandler(async (req, res) => {
  const { name, description, priority, finished } = req.body;

  const todo = new Todos({
    name: name,
    description: description,
    priority: priority,
    finished: finished,
  });

  const createdTodo = await todo.save();
  res.status(201).json(createdTodo);
});

// @desc Delete a Todo
// @route DELETE /api/todos/:id
// @access Public
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id);

  if (todo) {
    await todo.remove();
    res.json({ message: 'Todo Removed!' });
  } else {
    res.status(404);
    throw new Error('Todo not found!');
  }
});

// @desc Update a todo as Completed
// @route PUT /api/todos/:id
// @access Public
const completeTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findById(req.params.id);

  if (todo) {
    todo.finished = true;
    const completedTodo = await todo.save();

    res.json(completedTodo);
  } else {
    res.status(404);
    throw new Error('Todo not found!');
  }
});

export { getTodos, getTodoById, createTodo, deleteTodo, completeTodo };
