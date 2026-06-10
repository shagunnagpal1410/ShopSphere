import React from 'react'
import './output.css'
const Descriptionbox = () => {
  return (
    <div className='sm:mx-30 mt-42.5 pb-42.5'>
      <div className="descriptionbox-navigator flex">
        <div className='decriptionbox-nav-box flex item-center justify-center font-semibold text-[16px] w-42.75 h-17.5 border border-[#d0d0d0]'>
            Description
        </div>
        <div className="decriptionbox-nav-box-fade bg-[#FBFBFB] text-[#555]">
            Reviews(122)
        </div>
      </div>
      <div className="descriptionbox-description flex flex-col gap-6.25 border border-[#D0D0D0] p-12 pb-10">
        <p>Upgrade your wardrobe with this stylish and comfortable piece, crafted from high-quality fabric for everyday wear. Designed to offer a perfect blend of fashion and comfort, it's suitable for casual outings, daily use, and special occasions. Pair it with your favorite bottoms for a versatile and modern look.</p>
      </div>
    </div>
  )
}

export default Descriptionbox
