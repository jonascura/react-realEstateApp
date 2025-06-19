import React from 'react'
import "./layout.scss";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='layout'>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout