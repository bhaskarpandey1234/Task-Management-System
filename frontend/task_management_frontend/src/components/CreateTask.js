import React, { useState } from 'react';
import { createTask } from '../services/taskService'; // Import from service layer

const CreateTask = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'Low',
    status: 'Todo',
    due_date: '',
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask(taskData); // Call service function
      alert('Task Created Successfully');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={taskData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={taskData.description}
        onChange={handleChange}
      />
      <select name="priority" value={taskData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select name="status" value={taskData.status} onChange={handleChange}>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <input
        type="date"
        name="due_date"
        value={taskData.due_date}
        onChange={handleChange}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
