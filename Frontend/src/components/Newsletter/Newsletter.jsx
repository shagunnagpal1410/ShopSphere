import React from 'react'
import './output.css'
const Newsletter = () => {
  return (
    <div className='bg-linear-to-t from-[#C4E2F5] from-0% to-[#e1ffea22] to-100% h-[60vh]'>
    <div className='w-[60%] h-[60vh] flex flex-col items-center justify-center m-auto sm:pl-35 sm:pr-35 mb-70 gap-30px'>
      <h1 className='text-[#454545] text-[30px] sm:text-[55px] font-semibold'>Get Exclusive Offers On Your Email</h1>
      <p className='text-[#454545]  text-[15px] sm:text-[20px]'>Subscibe to our newsletter and stay updated</p>
      <div className='flex items-center justify-center bg-white w-screen h-10 sm:w-182.5 sm:h-17.5 rounded-[80px] border border-white'>
        <input type="email" placeholder='Your Email id' className='w-125 ml-30px text-[#616161] text-[16px]' />
        <button className='w-52.5 h-10 sm:h-17.5 rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
      </div>
    </div>
    </div>
  )
}

export default Newsletter
