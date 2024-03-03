import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { GiSplitCross } from "react-icons/gi";
import "./Navbar.css"
import React, { useState } from "react";



const Navbar = () => {
  
    const [click,setclick] = useState(false);
    const handleClick = () => setclick(!click)

    const[color,setcolor] = useState(false);
    const changeColor = ()=>{
        if(window.scrollY >= 100){
            setcolor(true)
        }else{
            setcolor(false)
        }
    }

    window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"header header-bg":"header"}>
        <Link to = "/">
              <h2>Arnab Paul</h2>
        </Link>
        <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li className="main"><Link to = "/" >Home</Link></li>
               <li> <Link to = "/project">Projects</Link></li>
                <li><Link to = "/about">About </Link></li>
               <li> <Link to = "/contact">Contact Me</Link></li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <GiSplitCross size={20} style={{color: "white"}}/>
            ):(
                <FaBars size={20} style={{color: "white"}}/>
            )}
        </div>
    </div>
  );
};

export default Navbar