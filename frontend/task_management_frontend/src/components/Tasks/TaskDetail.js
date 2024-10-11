import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await api.get(`/tasks/${id}/`); // Use api instance
      setTask(response.data);
    };
    fetchTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div className='task-details-container'>
      <h1 className="task-details-title">{task.title}</h1>
      <div className="task-details-info">
      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.due_date}</p>
      </div>
    </div>
  );
}

export default TaskDetail;
