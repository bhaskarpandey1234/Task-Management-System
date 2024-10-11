import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '',
    status: '',
    due_date: ''
  });

  useEffect(() => {
    if (id) {
      api.get(`/tasks/${id}/`).then(response => {
        setTask(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? 'put' : 'post';
    const url = id ? `/tasks/${id}/` : '/tasks/';
    api[method](url, task).then(() => {
      navigate('/tasks');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          required
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          required
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="due_date"
          value={task.due_date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskForm;
