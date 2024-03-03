import "./heroImg.css";
import React from 'react'
import IntroImg from "../assets/heromain.jpg"
import {Link} from "react-router-dom"
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} alt="Introimg" className="into-img" />
        </div>
        <div className="content">
            <p>
                Hello I am a young
            </p>
            <h1>Enthusiastic Developer.</h1>
            
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Get in Touch</Link>
                
            </div>

    

            
        </div>

        <div className="credits">
        <small>2024 Arnab Paul &copy; All Rights Reserved </small>
        </div>
    </div>
  )

}

export default HeroImg