import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='flex justify-between items-center sm:px-1 md:px-3 lg:px-20 py-7'>
      <Link to="/" className='title-logo'>GREEN.</Link>
      
      <div className={menuOpen ? "menu flex sm:hidden open" : "menu flex sm:hidden"} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="main-nav gap-4 hidden sm:flex">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">GALLERY</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
      <div className={menuOpen ? "sm:hidden z-20": "hidden z-20"} onClick={() =>setMenuOpen(false)}>
        <div className="w-[45vw] h-screen  fixed top-0 bg-[rgba(0,0,0,0.5)] left-0"></div>
        <Sidebar/>
      </div>
    </nav>
  )
}

export default Navbar