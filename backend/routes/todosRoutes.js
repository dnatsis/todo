import express from 'express';
const router = express.Router();
import {
  getTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  completeTodo,
  createCompletedTodo,
  getTodosCompleted,
  updateTodo,
  deleteCompletedTodo,
} from '../controllers/todosController.js';

router.route('/completed').get(getTodosCompleted).post(createCompletedTodo);
router.route('/completed/:id').delete(deleteCompletedTodo);
router.route('/').get(getTodos).post(createTodo);
router.route('/:id/edit').put(updateTodo);
router.route('/:id').get(getTodoById).delete(deleteTodo).put(completeTodo);

export default router;
