import React, { useState } from 'react';
import "./navBar.scss";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <a href= "/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">
        Sign Up
        </a>
        <div className='menuIcon'>
          {/* set to opposite current state */}
          <img src="/menu.png" alt="" onClick={()=>setOpen(!open)}/>
        </div>
        {/* conditional styling for menu*/}
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar