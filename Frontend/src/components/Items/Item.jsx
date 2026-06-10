import React from 'react'
import './output.css'
import {Link} from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='h-[25vh] w-[40vw] sm:w-[20vw] sm:h-[45vh] hover:scale-105 transition-[0.6s] overflow-hidden flex flex-col border-b
    border-b-[#4BB8FA] items-center justify-center bg-linear-to-b from-[#4BB8FA] to-white rounded-3xl'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} className= 'rounded-2xl h-[15vh] w-[30vw] sm:w-[16vw] sm:h-[30vh] object-cover'></img>
      </Link>
      <p className='m-[6px 0px]'>{props.name}</p>
      <div className="item-prices flex gap-5 ">
        <div className="item-new-price text-[#374151] text-[18px] font-semibold">
            Rs {props.new_price}
        </div>
        <div className="item-old-price  text-[#8c8c8c] text-[18px] font-semibold line-through">
            Rs {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
