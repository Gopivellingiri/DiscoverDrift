
import React from 'react'
import './Topbar.css'
import logo from '../../assets/main logo.png'

const Topbar = ({isScrolled}) => {

  
  return (
    <header className={`bg-color ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
       <nav className='top-bar'>
        <div className="top-logo">
            <img src={logo} alt="" />
        </div>
        <div className="topbar-group">
            <ul>
                <li><a className='nav-links' href="#home">home</a></li>
                <li><a className='nav-links' href="#about">About</a></li>
                <li><a className='nav-links' href="#places">Places</a></li>
                <li><a className='nav-links' href="#tour">Tour</a></li>
            </ul>
        </div>
        <div className="sign-buttons">
            <a href="#" className='btn btn-secondary'>Sign Up</a>
            <a href="#" className='btn btn-primary'>Log In</a>
        </div>
       </nav>
          
      </div>
    </header>
  )
}

export default Topbar