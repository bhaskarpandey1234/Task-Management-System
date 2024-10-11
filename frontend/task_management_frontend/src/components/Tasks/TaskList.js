// import React, { useState, useEffect } from 'react';
// import api from '../../services/api';

// function TaskList() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const response = await api.get('/tasks/'); // Use api instance
//       setTasks(response.data);
//     };
//     fetchTasks();
//   }, []);

//   return (
//     <div>
//       <h1>Task List</h1>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <a href={`/tasks/${task.id}`}>{task.title}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TaskList;
import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useNavigate, Link } from 'react-router-dom';


function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [sortOption, setSortOption] = useState(''); // State to store the sorting option
  const navigate = useNavigate();

  // Priority rank mapping
  const priorityRank = {
    'Low': 3,
    'Medium': 2,
    'High': 1,
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks/');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Redirect to login if no token
    } else {
      fetchTasks();
    }
  }, [navigate]);

  // Function to handle sorting tasks
  const handleSort = (option) => {
    setSortOption(option);
    let sortedTasks = [...tasks];

    if (option === 'priority') {
      sortedTasks.sort((a, b) => {
        return priorityRank[a.priority] - priorityRank[b.priority]; // Sorting based on priority rank
      });
    } else if (option === 'due_date') {
      sortedTasks.sort((a, b) => {
        return new Date(a.due_date) - new Date(b.due_date); // Sorting based on date
      });
    }

    setTasks(sortedTasks);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}/`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return (
    <div className='taskListContainer'>
      <h1>Task List</h1>

      {/* Sorting options */}
      <div>
        <label>Sort by: </label>
        <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          <option value="">Select</option>
          <option value="priority">Priority</option>
          <option value="due_date">Due Date</option>
        </select>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link>
              <p className="priority">Priority: {task.priority}</p>
              <p className="due-date">Due Date: {new Date(task.due_date).toLocaleDateString()}</p>
              <button onClick={() => navigate(`/tasks/edit/${task.id}`)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => navigate('/tasks/new')}>Create New Task</button>
    </div>
  );
}

export default TaskList;
