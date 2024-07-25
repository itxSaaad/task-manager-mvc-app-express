import Task from '../models/taskSchema.js';

// @desc Get all tasks
// @route GET /api/v1/tasks
// @access Public

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

// @desc Create a task
// @route POST /api/v1/tasks
// @access Public

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

// @desc Get a task by id
// @route GET /api/v1/tasks/:id
// @access Public

const getTaskById = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
    return res.status(404).json({ msg: `No task with id : ${taskID}` });
  }

  res.status(200).json({ task });
};

// @desc Update a task
// @route PUT /api/v1/tasks/:id
// @access Public

const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({
    _id: taskID,
  });
  res.status(200).json({ task });
};

// @desc Delete a task
// @route DELETE /api/v1/tasks/:id
// @access Public

const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  res.status(200).json({ task });
};

export { getAllTasks, createTask, getTaskById, updateTask, deleteTask };
