import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import logo from '../../assets/main logo.png'

const Footer = () => {
  return (
    <footer className='section-padd'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-items">
                    <p className='footer-title title-padd-sm'>Company</p>
                    <span>Careers</span>
                    <span>About Us</span>
                    <span>Blog</span>
                    <span>Press Info</span>
                    <span>Features</span>
                </div>
                <div className="footer-items">
                    <p className='footer-title title-padd-sm'>DiscoverDrift</p>
                    <span>Why DiscoverDrift</span>
                    <span>Enterprise</span>
                    <span>Customer Stories</span>
                    <span>Pricing</span>
                    <span>Security</span>
                </div>
                <div className="footer-items">
                     <p className='footer-title title-padd-sm'>Resources</p>
                    <span>Download</span>
                    <span>Help Center</span>
                    <span>Guides</span>
                    <span>Events</span>
                    <span>Developers</span>
                </div>
                <div className="footer-items">
                <p className='footer-title title-padd-sm'>Extras</p>
                    <span>Podcast</span>
                    <span>DiscoverDrift Shop</span>
                    <span>DiscoverDrift at work</span>
                    <span>DiscoverDrift Fund</span>
                    <span>Integrations</span>
                </div>
                <div className="footer-items">
                <p className='footer-title title-padd-sm'>Subscribe</p>
                <div className="input-grp">
                    <span className='message-icon'><FontAwesomeIcon  icon={faLocationArrow}/></span>
                <input className='input-box' type="email" placeholder="Enter your email address" required />
                </div>
                </div>
            </div>
            <div className="social-media">
                <div className="footer-logo">
                    <img className='btm-logo' src={logo} alt="" />
                </div>
                <div className="sm-icons">
                   <img src={facebook} alt="" />
                   <img src={twitter} alt="" />
                   <img src={youtube} alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer