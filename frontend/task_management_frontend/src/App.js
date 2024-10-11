import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import TaskList from './components/Tasks/TaskList';
import TaskDetail from './components/Tasks/TaskDetail';
import TaskForm from './components/Tasks/TaskForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return ( 
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/edit/:id" element={<TaskForm />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
