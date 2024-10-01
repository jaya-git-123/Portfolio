import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Img from '../Assets/logo.jpg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleNav = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Img} alt='logo'/>
      </div>
      <div className="hamburger-menu" onClick={handleToggleNav}>
        <FaBars />
      </div>
      <div className={`navbar-menu ${showMenu ? 'show-menu' : ''}`}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;