import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Todos from '../models/todosModel.js';

// @desc Fetch all todos
// @route GET /api/todos
// @access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const todos = await Todos.find({});

    res.json(todos);
  })
);

// @desc Fetch single todo
// @route GET /api/todos/:id
// @access public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const todo = await Todos.findById(req.params.id);

    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  })
);

export default router;
