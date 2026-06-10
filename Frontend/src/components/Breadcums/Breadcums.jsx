import React from 'react'
import './output.css'
import arrow from '../Assets/arrow.svg'
const Breadcums = (props) => {
    const {product}=props;
  return (
    <div className=' flex items-center gap-2 text-[#5e5e5e] flex-wrap sm:flex-nowrap w-[80vw] text-[12px] sm:text-[16px] font-semibold my-15 sm:mx-42.5 capitalize '>
      Home <img src={arrow} className='h-3'></img> SHOP <img src={arrow} className='h-3'></img> {product.category} <img src={arrow} className='h-3'></img> {product.name}
    </div>
  )
}

export default Breadcums
