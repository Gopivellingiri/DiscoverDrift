import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressBook, faMap, faSuitcaseRolling, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({isScrolled}) => {
  
  const [activeLink, setActiveLink] = useState(null);



  const handleClick = (link) => {
    setActiveLink(link === activeLink ? null : link);
  };

  return (
    <header className={`bg-color ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav>
          <div className="navbar">
            <ul className="nav-group">
              <li
                className={`nav-link ${activeLink === 'home' ? 'show' : ''}`}
                onClick={() => handleClick('home')}
              >
                <FontAwesomeIcon  icon={faHouse} />
                <a className="navigation" href="#home">
                  Home
                </a>
              </li>
              <li
                className={`nav-link ${activeLink === 'about' ? 'show' : ''}`}
                onClick={() => handleClick('about')}
              >
                <FontAwesomeIcon  icon={faAddressBook} />
                <a className="navigation" href="#about">
                  About
                </a>
              </li>
              <li
                className={`nav-link ${activeLink === 'places' ? 'show' : ''}`}
                onClick={() => handleClick('places')}
              >
                <FontAwesomeIcon  icon={faMap} />
                <a className="navigation" href="#places">
                  Places
                </a>
              </li>
              <li
                className={`nav-link ${activeLink === 'tour' ? 'show' : ''}`}
                onClick={() => handleClick('tour')}
              >
                <FontAwesomeIcon  icon={faSuitcaseRolling} />
                <a className="navigation" href="#tour">
                Tour
                </a>
              </li>
              <li
                className={`nav-link ${activeLink === 'signup' ? 'show' : ''}`}
                onClick={() => handleClick('signup')}
              >
                <FontAwesomeIcon  icon={faRightFromBracket} />
                <a className="navigation" href="#">
                Sign Up
                </a>
              </li>
              <li
                className={`nav-link ${activeLink === 'login' ? 'show' : ''}`}
                onClick={() => handleClick('login')}
              >
                <FontAwesomeIcon  icon={faRightToBracket} />
                <a className="navigation" href="#">
                Log In
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
