import React from 'react'
import './output.css'
import hi from '../assets/hi.png'
import fashion from '../assets/fashion.png'
const Hero = () => {
    return (
        <div className='h-[60vh] sm:h-screen  bg-linear-to-t from-[#C4E2F5] from-0% to-[#e1ffea22] to-100% flex p-10 justify-between'>
            <div className="hero-left flex flex-col justify-center gap-5 sm:pl-45 text-[1.1]">
                <h2 className=" text-[18px] sm:text-[26px] font-bold text-black mb-4">
                    NEW ARRIVALS ONLY
                </h2>
                <div>
                    <div className="hand-hand-icon flex items-center gap-5">
                        <p className='text-[#1717117] text-[30px] sm:text-[80px] font-bold'>New</p>
                        <img src={hi} className='w-10 sm:w-26.25'></img>
                    </div>
                    <p className='text-[#1717117] text-[30px] sm:text-[80px] font-bold'>Collections</p>
                    <p className='text-[#1717117] text-[30px] sm:text-[80px] font-bold'>for everyone</p>
                </div>
                <div className="hero-latest-btn flex justify-center items-center gap-4 sm:w-77.5 sm:h-17.5 rounded-full mt-7.5 bg-[#ff4141] text-white sm:text-[32px] font-medium">
                    <div>Latest Collection</div>
                </div>
            </div>
            <div className="hero-right flex items-center justify-center">
                <img src={fashion} className='h-[40vh] sm:h-full'></img>
            </div>
        </div>
    )
}

export default Hero
