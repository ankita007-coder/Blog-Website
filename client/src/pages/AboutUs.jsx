import React from 'react'
import Wrapper from '../assets/wrappers/AboutUs'
import image from '../assets/images/3713299.jpg'

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="row">
        <div>
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <img src={image} alt="About us" />
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutUs