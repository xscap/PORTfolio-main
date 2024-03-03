import React from 'react'
import "./getintouch.css"
import {MdEmail} from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa";
import {IoLogoWhatsapp} from 'react-icons/io'
const GetinTouch = () => {
  return (
    <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
               <a href="mailto:arnab2181@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
               <a href="https://www.linkedin.com/in/arnab-paul-09507022b/" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
               <a href="https://wa.link/oxv7js" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>

        <div className="credits">
        <small>2024 Arnab Paul &copy; All Rights Reserved </small>
        </div>
       </section>
  )
}

export default GetinTouch