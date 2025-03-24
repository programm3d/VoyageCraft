import React from 'react'
import {NavLink} from 'react-router'
import '../App.css'

function Navbar() {
  return (
    <div className='header'>
        <div className="logo">
            <span className="logo1">Voyage</span>
            <span className="logo2">Craft</span>
        </div>
        <div className="nav">
            <NavLink to='/' className='nav-item'>Home</NavLink>
            <NavLink to='/dashboard' className='nav-item'>Dashboard</NavLink>
            <NavLink to='/map' className='nav-item'>Map</NavLink>
        </div>
    </div>
  )
}

export default Navbar