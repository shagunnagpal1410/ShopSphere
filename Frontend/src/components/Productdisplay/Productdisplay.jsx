import React from 'react'
import star_dull from '../Assets/star_dull_icon.png'
import star from '../Assets/star_icon.png'
import './output.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
const Productdisplay = (props) => {
    const {product}=props;
    const {addtocart}=useContext(ShopContext);
  return (
    <div className='flex sm:mx-42.5 flex-col sm:flex-row mx-5'>
      <div className="productdisplay-left flex gap-4.25 ">
      <div className="productdisplay-imglist flex flex-col gap-4">
        <img src={product.image} className='h-[12.5vh] w-[10vw] object-cover'></img>
        <img src={product.image} className='h-[12.5vh] w-[10vw] object-cover'></img>
        <img src={product.image} className='h-[12.5vh] w-[10vw] object-cover'></img>
        <img src={product.image} className='h-[12.5vh] w-[10vw] object-cover'></img>
      </div>
      <div className="productdisplay-img">
        <img className='productdisplay-mainimg h-[55vh]' src={product.image}></img>
      </div>
      </div>
      <div className="productdisplay-right  sm:mx-17.5 flex flex-col">
        <h1 className='text-[#3d3d3d] w-full flex-wrap text-[20px] sm:text-[40px] font-bold'>{product.name}</h1>
        <div className="productdisplay-rightstars flex w-full items-center mt-3.25 gap-1.25 text-[#1c1c1c] text-[16px]">
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star}></img>
            <img src={star_dull}></img>
            <p>(122)</p>
        </div>
        <div className="productdisplay-rightprices flex sm:mx-10 gap-7.5 text-[18px] sm:text-[24px] font-bold ">
            <div className="productdisplay-rightoldprice text-[#818181] line-through">
                Rs {product.old_price}
            </div>
            <div className="producrdisplay-rightnewprice text-[#ff4141]">
                Rs {product.new_price}
            </div>
        </div>
        <div className="productdisplay-rightdesc"></div>
        <div className="productdisplay-rightsize">
            <h1 className=' mt-13.75  text-[#656565] font-semibold'>Select Size</h1>
            <div className="productdisplay-rightsizes flex my-6 font-semibold gap-5">
                <div className='px-0.5 py-0.5 sm:px-4.5 sm:py-6 border border-[#ebebeb] bg-[#fbfbfb] rounded-[3px] cursor-pointer'>S</div>
                <div  className='px-0.5 py-0.5 sm:px-4.5 sm:py-6 border border-[#ebebeb] bg-[#fbfbfb] rounded-[3px] cursor-pointer'>M</div>
                <div  className='px-0.5 py-0.5 sm:px-4.5 sm:py-6 border border-[#ebebeb] bg-[#fbfbfb] rounded-[3px] cursor-pointer'>L</div>
                <div  className='px-0.5 py-0.5 sm:px-4.5 sm:py-6 border border-[#ebebeb] bg-[#fbfbfb] rounded-[3px] cursor-pointer'>XL</div>
                <div  className='px-0.5 py-0.5 sm:px-4.5 sm:py-6 border border-[#ebebeb] bg-[#fbfbfb] rounded-[3px] cursor-pointer'>XXL</div>
            </div>
        </div>
        <button onClick={()=> {
          addtocart(product.id);
        }} className='px-2.5 py-5 text-16px] font-semibold bg-red-500 mb-10 cursor-pointer'>ADD TO CART</button>
        <p className='productdisplay-rightcategory mt-2.5 '>
            <span className='font-semibold'>Category: </span>Women, T-shirt, Crop Top
        </p>
        <p className='productdisplay-righttags'>
            <span className='font-semibold'>Tags: </span>Latest, Trending</p>
      </div>
    </div>
  )
}

export default Productdisplay
