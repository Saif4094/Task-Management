import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/Todo/TodoList';
import Avatar from '../components/User/Avatar';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user, picture, token, logout } = useUser(); // Use context to get user data and functions
  const navigate = useNavigate(); // navigate to different routes using useNavigate hook

  useEffect(() => {
    // If there is no user or token, redirect to the login page
    if (!user || !token) {
      navigate('/login');
    }
  }, [user, token, navigate]);

  return (
    <div className="mt-5 py-3">
      <Avatar url={picture} user={user} /> {/* pass user email and picture url as props */}
      <div className="menu mt-3" aria-labelledby="dropdownMenuButton">
        <button className="btn btn-sm btn-danger" type="button" onClick={logout}>
          Logout
        </button>
      </div>
      <TodoList /> {/* display the TodoList component */}
    </div>
  );
};

export default Dashboard;
