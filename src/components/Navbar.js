import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="navbar-content" onClick={handleReload} style={{ cursor: 'pointer' }}>
        <h1 className="title">Recipe Finder</h1>
        <p className="subtitle">search your own recipe</p>
      </div>
    </nav>
  );
}

export default Navbar;