import React from 'react'
import './output.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='bg-linear-to-b from-[#C4E2F5] to-[#2C5EAD]'>
    <div className='flex flex-col justify-center items-center gap-12.5'>
      <div className="footer-logo flex items-center gap-5">
        <img src={logo} className='w-[12vw]'/>
      </div>
      <ul className="footer-links flex list-none gap-12.5 flex-wrap">
        <li className='cursor-pointer'>Company</li>
        <li className='cursor-pointer'>Products</li>
        <li className='cursor-pointer'>Offices</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-5">
        <div className="footer-icons-container p-2.5 pb-1.5">
            <img src={instagram_icon}></img>
        </div>
        <div className="footer-icons-container  p-2.5 pb-1.5">
            <img src={pintester_icon}></img>
        </div>
        <div className="footer-icons-container  p-2.5 pb-1.5">
            <img src={whatsapp_icon}></img>
        </div>
      </div>
      <div className="footer-copyright flex flex-col items-center gap-7.5 wfull mb-7.5 text-[#1a1a1a] text-[20px]">
        <hr className='w-[80%] rounded-[10px] h-0.75 bg-[#c7c7c7]'/>
        <p>&copy; Copyright at 2026</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
