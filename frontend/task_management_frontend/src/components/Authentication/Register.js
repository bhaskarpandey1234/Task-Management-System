import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({ username: '', password: '', email: '' }); // Ensure email is included
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', formData);
      alert('Registration successful! You can now log in.');
    } catch (error) {
      const errorMessage = error.response ? error.response.data.detail || 'Registration failed. Please try again.' : 'Registration failed. Please check your network.';
      setError(errorMessage);
      console.error('Error registering', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}

export default Register;
