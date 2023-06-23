import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here
    // Redirect to the home page
    window.location.href = '/';
  };

  // Check if the current location is "/sidebar"
  const isSidebarPage = location.pathname === '/sidebar';

  return (
    <div className="navbar">
      <div className="nav-container">
        <h1 className="nav-head">HYRN MPD INC.</h1>
      </div>
      <ul className="nav-links">
        <li>
          {location.pathname === '/' && (
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <i className="fa-solid fa-house"></i>Home
            </Link>
          )}
          {location.pathname === '/login' && (
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <i className="fa-solid fa-house"></i>Home
            </Link>
          )}
        </li>
        <li>
          <Link to="/login">
            <i className="fa-solid fa-lock-open"></i>Login
          </Link>
        </li>
        {isLoggedIn && isSidebarPage && (
          <>
            <li>
              <p className="sidebar-link">Doctors</p>
            </li>
            <li>
              <p className="sidebar-link">Admit</p>
            </li>
            <li>
              <p className="sidebar-link">Discharge</p>
            </li>
            <li>
              <p className="sidebar-link">Checkup</p>
            </li>
            <li>
              <p className="sidebar-link">Room Details</p>
            </li>
            <li>
              <p className="sidebar-link">Departments</p>
            </li>
            <li>
              <button className="sidebar-link logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
