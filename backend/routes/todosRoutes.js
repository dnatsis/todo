import express from 'express';
const router = express.Router();
import {
  getTodos,
  getTodoById,
  createTodo,
} from '../controllers/todosController.js';

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').get(getTodoById);

export default router;
