import "./workcard.css"

import React from 'react'
import pro1 from "../assets/hardweb front.png"
import pro2 from "../assets/old portfolio.png"
import pro3 from "../assets/workout.png"
import pro4 from "../assets/img4.png"
import { NavLink } from "react-router-dom"
const Workcard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading"> My Projects </h1>
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="img" />
                <h2 className="project-title">VAPS</h2>
                <div className="pro-details">
                    <p>We made a hardware project in our final year using Arduino and other Hardware equipments, Later on I thought that a blog website should be made, So I made this React Application using modern UI systems.</p>
                    <div className="pro-btns">
                       <button className="view"> <NavLink to = "https://hardweb-theta.vercel.app/" classname = "btn" target="_blank">View</NavLink></button>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={pro2} alt="img" />
                <h2 className="project-title">Old Portfolio</h2>
                <div className="pro-details">
                    <p>This is my first ever portfolio website, At that time I learned only basic HTML,CSS and basic JS.</p>
                    <div className="pro-btns">
                       <button className="view"> <NavLink to = "https://xscap.github.io/personal-website/" classname = "btn" target="_blank">View</NavLink></button>
                    </div>
                </div>
            </div>

            <div className="project-card">
                <img src={pro3} alt="img" />
                <h2 className="project-title">Healthcare Analytics</h2>
                <div className="pro-details">
                    <p>I have completed this project during my Traineeship in MedTourEasy,I learned about data analysis using python programming and also used jupyter notebook in this project ,Click down below to View Report and Code.</p>
                    <div className="pro-btns">
                       <button className="view"> <NavLink to = "https://github.com/xscap/MTE_proj" classname = "btn" target="_blank">View</NavLink></button>
                    </div>
                </div>
            </div>

          <div className="project-card">
                <img src={pro4} alt="img" />
                <h2 className="project-title">Student Marks Analysis</h2>
                <div className="pro-details">
                    <p>Dowloaded a dataset from kaggle and worked on various operations usng python libraries and also found meaningful insights from tha above result which are written in the comments</p>
                    <div className="pro-btns">
                       <button className="view"> <NavLink to = "https://github.com/xscap/DA2" classname = "btn" target="_blank">View</NavLink></button>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Workcard
