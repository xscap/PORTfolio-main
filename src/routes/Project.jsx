import React from 'react'
import Navbar from '../components/Navbar'

import HeroImg2 from '../components/HeroImg2'
import Workcard from '../components/Workcard'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2/>
      <Workcard/>

      <div className="credits">
      <small>2024 Arnab Paul &copy; All Rights Reserved </small>
        </div>
      
    </div>
  )
}

export default Project