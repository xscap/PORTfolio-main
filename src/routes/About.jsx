import React from 'react'
import Navbar from '../components/Navbar'

import Aboutcontent from '../components/Aboutcontent'

const About = () => {
  return (
    <div>
      <Navbar/>
         <div className="hero-img">
          <div className="heading">
            <h1> Who Am I </h1>
            <p>Everything about me in a nutshell</p>
          </div>
         </div>
         <Aboutcontent/>

         
     
    </div>
  )
}

export default About