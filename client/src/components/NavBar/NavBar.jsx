import React, { useState } from 'react';
import "./navBar.scss";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // dummy user
  const user = true;

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
        {/* handle if user */}
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              {/* dunny notification */}
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">Sign Up</a>
          </>
        )}
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