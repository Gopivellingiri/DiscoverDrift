
import React from 'react'
import './Tours.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons/faFontAwesome'
import { faCalendarCheck, faCalendarXmark, faLocationDot, faPeopleGroup, faUser } from '@fortawesome/free-solid-svg-icons'


const Tours = () => {
  return (
    <section className="section-padd bg-color" id='tour'>
        <div className="container">
           <div className="destination-wrapper">
           <div className="destination">
                <div className="title destination-title">
                    <h4>Destination</h4>
                    <span className='line'></span>
                </div>
                <h2 className='title-padd'>The Best Places
                to Explore This Year</h2>
                <p>Stay ahead of the travel trends with our curated list of the best places to explore this year. Each destination offers unique attractions and experiences.</p>
            </div>
            <div className="booking">
                <div className="booking-text">
                    <div className="location-mark">
                    <span className='location-icon'><FontAwesomeIcon  icon={faLocationDot}/></span>
                    </div>
                    <div className="location-text">
                    <h4>Location</h4>
                    <span>What is your next Adventure</span>
                    </div>
                </div>
                <div className="booking-text">
                    <div className="location-mark">
                    <span className='location-icon'><FontAwesomeIcon  icon={faPeopleGroup}/></span>
                    </div>
                    <div className="location-text">
                    <h4>Person</h4>
                    <span>Number of Guests</span>
                    </div>
                </div>
                <div className="booking-text">
                    <div className="location-mark">
                    <span className='location-icon'><FontAwesomeIcon  icon={faCalendarCheck}/></span>
                    </div>
                    <div className="location-text">
                    <h4>Chek In</h4>
                    <span>October 1, 2023</span>
                    </div>
                </div>
                <div className="booking-text">
                    <div className="location-mark">
                    <span className='location-icon'><FontAwesomeIcon  icon={faCalendarXmark}/></span>
                    </div>
                    <div className="location-text">
                    <h4>Chek Out</h4>
                    <span>October 7, 2023</span>
                    </div>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Tours