import React from 'react'
import './Hero.css'
import basketball_icon from '../Products/jordan_ball.png'
import arrow_icon from '../Products/arrow.png'
import jordan4 from '../Products/jordan4.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-basketball-icon">
            <p>LEVEL UP</p>
            <img src={basketball_icon} alt="" />
          </div>
          <p>YOUR GAME</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='hero-right'>
        <img src={jordan4} alt="" />
      </div>
    </div>
  )
}

export default Hero
