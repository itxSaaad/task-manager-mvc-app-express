// @desc Get all tasks
// @route GET /api/v1/tasks
// @access Public

const getAllTasks = async (req, res) => {
  res.send('All Tasks');
};

// @desc Create a task
// @route POST /api/v1/tasks
// @access Public

const createTask = async (req, res) => {
  res.send('Create Task');
};

// @desc Get a task by id
// @route GET /api/v1/tasks/:id
// @access Public

const getTaskById = async (req, res) => {
  res.send(`Get Task ${req.params.id}`);
};

// @desc Update a task
// @route PUT /api/v1/tasks/:id
// @access Public

const updateTask = async (req, res) => {
  res.send(`Update Task ${req.params.id}`);
};

// @desc Delete a task
// @route DELETE /api/v1/tasks/:id
// @access Public

const deleteTask = async (req, res) => {
  res.send(`Delete Task ${req.params.id}`);
};

export { getAllTasks, createTask, getTaskById, updateTask, deleteTask };
