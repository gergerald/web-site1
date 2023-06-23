import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdPerson, MdAddCircle, MdRemoveCircle, MdLocalHospital, MdHotel, MdExitToApp } from 'react-icons/md';
import '../styles/Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === '/doctors') {
      navigate('/about');
    } else if (path === '/admit') {
      navigate('/admit');
    } else if (path === '/discharge') {
      navigate('/discharge');
    } else if (path === '/checkup') {
      navigate('/checkup');
    } else if (path === '/room-details') {
      navigate('/room-details');
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    // Perform logout logic here

    // Navigate to the home page
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>HYRN</h2>
      </div>
      <ul className="sidebar-links">
        <li>
          <button onClick={() => handleNavigation('/doctors')}>
            <MdPerson /> Admission
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/admit')}>
            <MdAddCircle /> Discharge
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/discharge')}>
            <MdRemoveCircle /> Checkups
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/checkup')}>
            <MdLocalHospital /> Doctor's List
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/room-details')}>
            <MdHotel /> Room Details
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation('/departments')}>
            <MdLocalHospital /> Departments
          </button>
        </li>
        <li>
          <button className="logout-button" onClick={handleLogout}>
            <MdExitToApp /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
