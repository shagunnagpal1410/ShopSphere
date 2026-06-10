import React from 'react'
import './output.css'
import exclusive from '../Assets/exclusive.png'
const Offers = () => {
  return (
    <div className="box w-screen bg-linear-to-t from-[#C4E2F5] from-0% to-[#e1ffea22] to-100%">
    <div className='w-[65%] height-[60vh] flex gap-5 m-auto sm:pl-35 sm:pr-35  '>
      <div className="offers-left  flex flex-col justify-center">
        <h1 className='text-[#171717] text-[20px] sm:text-[80px] font-semibold'>Exclusive</h1>
        <h1 className='text-[#171717] text-[20px] sm:text-[80px] font-semibold'>Offers for You</h1>
        <p className='text-[#171717] text-[11px] sm:text-[22px] font-semibold'>ONLY ON THE BEST SELLERS PRODUCTS</p>
        <button className='sm:W-[282px] sm:h-17.5 rounded-[35px] bg-red-600 text-white sm:text-[22px] cursor-pointer'>Check Now</button>
      </div>
      <div className="offers-right flex justify-center items-center pt-12.5">
        <img src={exclusive} className='w-full object-cover'></img>
      </div>
    </div>
    </div>
  )
}

export default Offers
