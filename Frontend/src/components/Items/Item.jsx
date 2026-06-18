import React from 'react'
import './output.css'
import {Link} from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='h-[28vh] w-[40vw] sm:w-[20vw] sm:h-[48vh] hover:scale-105 transition-[0.6s] overflow-hidden flex flex-col border-b border-b-[#4BB8FA] items-center justify-evenly bg-linear-to-b from-[#4BB8FA] to-white '>
      <div>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} className= ' h-[15vh] w-[30vw] sm:w-[16vw] sm:h-[30vh] object-cover overflow-hidden'></img>
      </Link>
      </div>
      <p className='h-[5vh] sm:h-[7.5vh] w-full my-[6px] text-[10px] sm:text-[18px] leading-none text-center'>
  {props.name}
</p>
      <div className="item-prices flex gap-5 h-[5vh] sm:h-[7.5vh] w-full justify-center">
        <div className="item-new-price text-[#374151] text-[10px] sm:text-[18px] font-semibold">
            Rs {props.new_price}
        </div>
        <div className="item-old-price  text-[#8c8c8c] text-[10px] sm:text-[18px] font-semibold line-through">
            Rs {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
