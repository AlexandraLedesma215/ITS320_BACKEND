import express from 'express';
import { getTasks, getTaskById, addTask, updateTask, removeTask } from '../controller/todolistController.js';

const router = express.Router();

// Route to get all tasks
router.get('/todolist', getTasks);

// Route to get a single task by ID
router.get('/todolist/:id', getTaskById); // New route for fetching task by ID

// Route to create a new task
router.post('/todolist/create', addTask);

// Route to update an existing task by ID
router.put('/todolist/:id', updateTask); // New route for updating task

// Route to delete a task by ID
router.delete('/todolist/:id', removeTask);

export default router;
