import React from 'react'
import './output.css'
import {Link} from 'react-router-dom'
import cart from '../../Assets/cart.svg'
const Sidebar = () => {
  return (
    <div className='sidebar flex sm:flex-col pt-7.5 gap-5 w-full sm:max-w-62.5 sm:h-screen bg-linear-to-t from-[#C4E2F5] to-[#e1ffea22] justify-center sm:justify-start'>
      <Link to='/addproduct' className='decoration-none'>
        <div className="sidebar-item flex items-center justify-center sm:my-5 py-1.25 px-2.5 rounded-md bg-[#f6f6f6] gap-5 cursor-pointer">
            <img src={cart} />
            <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' className='decoration-none'>
        <div className="sidebar-item  flex items-center justify-center sm:my-5 py-1.25 px-2.5 rounded-md bg-[#f6f6f6] gap-5 cursor-pointer">
            <p>Product list</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
