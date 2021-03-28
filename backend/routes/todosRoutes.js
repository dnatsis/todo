import express from 'express';
const router = express.Router();
import {
  getTodos,
  getTodoById,
  createTodo,
  deleteTodo,
} from '../controllers/todosController.js';

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').get(getTodoById).delete(deleteTodo);

export default router;
