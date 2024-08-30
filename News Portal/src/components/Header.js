import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>
          <Link to="/">Real-Time News Portal</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
