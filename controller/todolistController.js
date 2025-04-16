import Task from '../models/todolistModel.js'; // Import the Task model

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching task' });
  }
};

// Add a new task
export const addTask = async (req, res) => {
  try {
    const { task, dueDate, priority } = req.body;
    const newTask = new Task({ task, dueDate, priority });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error adding task' });
  }
};

// Update an existing task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, dueDate, priority } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, dueDate, priority },
      { new: true } // This ensures the updated document is returned
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
};

// Remove a task
export const removeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};
