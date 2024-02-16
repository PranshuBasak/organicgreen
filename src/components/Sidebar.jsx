import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    
  return (
    <div className='fixed right-0 top-0 flex flex-col bg-black w-[55vw] min-h-screen p-10 text-white'>
        <ul className="flex flex-col gap-10 side-nav">
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

    </div>
  )
}

export default Sidebar