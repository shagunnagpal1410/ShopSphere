import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.svg'
import './output.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const {cartvaluecalc}=useContext(ShopContext);
  const [menu, setmenu] = useState("Shop");
  return (
    <div className='flex justify-between p-2 shadow-sm '>
      <div className="nav-logo">
        <img src={logo} className='w-[12vw]'></img>
      </div>
      <ul className='nav-menu flex items-center gap-5 sm:gap-12.5 text-[12px] sm:text-[20px] text-[#626262] font-medium'>
        <li onClick={()=> {
            setmenu("Shop");
        }}><Link to='/'>Shop</Link> {menu=="Shop"?<hr className='w-[80%] h-0.75 rounded-2xl bg-blue-500 ease-in-out'/>:""}</li>
        <li onClick={()=> {
            setmenu("Men")
        }}><Link to='/men'>Men</Link> {menu=="Men"?<hr className='w-[80%] h-0.75 rounded-2xl bg-blue-500 ease-in-out'/>:""}</li>
        <li onClick={()=> {
            setmenu("Women")
        }}><Link to='./women'>Women</Link> {menu=="Women"?<hr className='w-[80%] h-0.75 rounded-2xl bg-blue-500 ease-in-out'/>:""}</li>
        <li onClick={()=> {
            setmenu("Kids")
        }}><Link to='./kids'>Kids</Link> {menu=="Kids"?<hr className='w-[80%] h-0.75 rounded-2xl bg-blue-500 ease-in-out'/>:""}</li>
      </ul>
      <div className="nav-login-cart flex  gap-5 items-center sm:gap-11.25">
        {localStorage.getItem('auth-token')?<button onClick={ ()=>{
          localStorage.removeItem('auth-token');
          window.location.replace("/");
        }}  className=' w-18 h-6 sm:w-37.5 sm:h-12.5 border border-[#7a7a7a] rounded-[75px] text-[12px]sm:text-[20px] font-medium cursor-pointer text-[#7a7a7a] active:bg-[#f3f3f3]'>Log out</button>:<Link to='./login'>
        <button className=' w-18 h-6 sm:w-37.5 sm:h-12.5 border border-[#7a7a7a] rounded-[75px] text-[12px]sm:text-[20px] font-medium cursor-pointer text-[#7a7a7a] active:bg-[#f3f3f3]'>Login</button></Link>}
        <Link to='./cart'>
        <img src={cart_icon} className=' h-[4vh] sm:h-[5vh]'></img>
        </Link>
        <div className="nav-cart-count w-5.5 h-5.5 flex justify-center -mt-8.75 -ml-13.75 rounded-[11px] text-[14px] bg-red-600 text-white">{cartvaluecalc()}</div>
      </div>
    </div>
  )
}

export default Navbar
