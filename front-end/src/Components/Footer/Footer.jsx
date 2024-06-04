import React from 'react'
import './Footer.css'
import instagram_icon from '../Products/instagram_icon.png'
import twitter_icon from '../Products/twitter_icon.png'
import facebook_icon from '../Products/facebook_icon.png'
const Footer = () => {
  return (
    <div className="footer">
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={twitter_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={facebook_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer