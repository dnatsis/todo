import express from 'express';
const router = express.Router();
import { getTodos, getTodoById } from '../controllers/todosController.js';

router.route('/').get(getTodos);
router.route('/:id').get(getTodoById);

export default router;
