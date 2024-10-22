import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Senior Helper</h1>
      <p>Your tech learning platform for seniors.</p>
      <Link to="/tutorials">Explore Tutorials</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
