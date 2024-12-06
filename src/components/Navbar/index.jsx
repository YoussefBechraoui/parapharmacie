import React from 'react';
import './style.css';

function Navbar({ count, setCurrentView }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsfa1IH8qjdF0zHAGCHs6MfWzEDDX0pzTHA&s"
          alt="Logo"
        />
        <h1>Parapharmacie</h1>
      </div>

      <ul className="navbar-links">
        <li onClick={() => setCurrentView('Home')}>
          <h3>Home</h3>
        </li>
        <li onClick={() => setCurrentView('Default')}>
          <h3>Products</h3>
        </li>
        <li onClick={() => setCurrentView('Cart')}>
          <h3>Cart({count})</h3>
        </li>
      </ul>

      <div className="navbar-auth">
        {}
        <div
          className="navbar-small"
          onClick={() => {
            setCurrentView('Home'); 
          }}
        >
          <h4>Logout</h4>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
