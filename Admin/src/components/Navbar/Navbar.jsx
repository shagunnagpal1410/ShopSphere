import React from 'react'
import './output.css'
import logo from '../../Assets/logo.png'
import profile from '../../Assets/profile.jpg'
const Navbar = () => {
  return (
    <div className='flex w-full  items-center justify-between sm:py-3.75 shadow-[0px_1px_3px_-2px] shodow-[#000000] h-[10vh]'>
      <img src={logo} className="nav-logo h-[10vh]" />
      <img src={profile} className="nav-profile  h-[10vh]" />
    </div>
  )
}

export default Navbar
