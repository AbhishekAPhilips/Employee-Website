import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src="src\assets\PhilipsLogo.png" alt="Philips Logo" className="logo" width={200}/>
          </Link>
        </div>
        
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link"> Home </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link"> About </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link"> Contact </Link>
            </li>
          </ul>
        </nav>
        
        <div className="profile-section">
          <div className="profile-info">
            <div className="profile-image">
              <img className="profile-pic" src="src\assets\profilePic.jpg" width={50} />
            </div>
            <p className="profile-name">Abhishek A</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
