import express from 'express';

const router = express.Router();

import {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/tasksControllers.js';

router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

export default router;
