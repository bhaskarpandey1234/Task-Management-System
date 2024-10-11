import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');  // Optional: remove refresh token as well
    navigate('/');  // Redirect to login page after logout
  };

  return (
    <nav>
      <ul>
        {/* Conditionally render links based on user's login status */}
        {token ? (
          <>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/tasks/new">New Task</Link></li>
            <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
