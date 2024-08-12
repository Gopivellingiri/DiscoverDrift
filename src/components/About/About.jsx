
import React from 'react'
import './About.css'
import about_img from '../../assets/about-img.png'
import Pick_icon from '../../assets/Pick-icon.png'
import service_icon from '../../assets/service-icon.png'
import choices_icon from '../../assets/choices-icon.png'


const About = () => {
  return (
    <section className="bg-color" id='about'>
        <div className="container">
            <div className="about-page">
                <div className="about-img">
                    <img src={about_img}alt="" />
                </div>
                <div className="about-content">
                    <div className="title text-center">
                        <h4>About us</h4>
                        <span className='line'></span>
                    </div>
                    <h2 className='title-padd'>Every Month, A New
                    Adventure: Our Destination
                        Recommendations</h2>
                        <p>Explore our curated selection of stunning destinations chosen just for you each month. Find your next adventure with our top recommendations.</p>
                    <div className="about-info">
                        <div className="info-item">
                        <h4>3,000+
                        </h4>
                        <span>Explorers</span>
                        </div>
                        <div className="info-item">
                        <h4> 150+
                        </h4>
                        <span>Destinations</span>
                        </div>
                        <div className="info-item">
                        <h4> 20+
                        </h4>
                        <span>Experience</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-us section-padd">
                <div className="choose-content">
                    <div className="title choose-heading">
                        <h4>Why Choose Us</h4>
                        <span className='line'></span>
                    </div>
                    <h2 className='title-padd'>Elevate                     Your Adventures:
                            The DiscoverDrift
                            Difference</h2>
                </div>
                <div className="service-box">
                    <img src={Pick_icon} alt="" />
                    <h4 className='title-padd-sm'>Tailored Picks</h4>
                    <p>Curated recommendations
                        that match your interests
                        and travel style.</p>
                </div>
                <div className="service-box">
                    <img src={service_icon} alt="" />
                    <h4 className='title-padd-sm'>Exceptional Service</h4>
                   <p>Experience top-notch
            support from booking to
            your journey’s end.</p>
                </div>
                <div className="service-box">
                    <img src={choices_icon} alt="" />
                    <h4 className='title-padd-sm'>Endless Choices</h4>
                <p>Curated recommendations
                    that match your interests
                    and travel style.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About