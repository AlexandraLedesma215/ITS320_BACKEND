// todolist/models/taskModel.js
import mongoose from 'mongoose';

// Define the Task schema
const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    default: Date.now,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium',
  },
}, { timestamps: true });

// Create the Task model
const Task = mongoose.model('Task', taskSchema);

export default Task;
