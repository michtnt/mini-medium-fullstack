import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">MyMedium</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
        <li className="navbar-item">
          <Link to="/" className="nav-link">MyMedium Posts</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">User Profile</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Posts</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }

export default Navbar;