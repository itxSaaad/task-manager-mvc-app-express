import asyncWrapper from '../middlewares/asyncWrapper.js';
import { createCustomError } from '../middlewares/errorHandler.js';

import Task from '../models/taskSchema.js';

// @desc Get all tasks
// @route GET /api/v1/tasks
// @access Public

const getAllTasks = asyncWrapper(async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// @desc Create a task
// @route POST /api/v1/tasks
// @access Public

const createTask = asyncWrapper(async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// @desc Get a task by id
// @route GET /api/v1/tasks/:id
// @access Public

const getTaskById = asyncWrapper(async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// @desc Update a task
// @route PUT /api/v1/tasks/:id
// @access Public

const updateTask = asyncWrapper(async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// @desc Delete a task
// @route DELETE /api/v1/tasks/:id
// @access Public

const deleteTask = asyncWrapper(async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404));
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

export { createTask, deleteTask, getAllTasks, getTaskById, updateTask };
