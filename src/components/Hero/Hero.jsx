
import React from 'react'
import './Hero.css'
import main_logo from '../../assets/main logo.png'
import plane from '../../assets/plane.png'
import hero_img from '../../assets/hero-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section className='bg-color section-padd' id='home'>
        <div className="container">
            <div className="hero-page">
                <div className="hero-content">
                    <img className='logo' src={main_logo} alt="" />
                    <h4>Wanderlust Unleashed <img src={plane} alt="" /></h4>
                    <h1>Your Next Escape
                    Begins Now</h1>
                    <div className="buttons">
                        <a href="#" className='btn btn-primary'>Go Exploration</a>
                        <a href="#" >Get a Price</a>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={hero_img} alt="" />
                    <div className="box-1">
                        <span><FontAwesomeIcon className='icon' icon={faStar}/><b>24K</b></span>
                        <span>Customer Reviews</span>
                    </div>
                    <div className="box-2">
                        <span><FontAwesomeIcon className='icon' icon={faClock}/><b>24 / 7</b></span>
                        <span>Our Services</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero