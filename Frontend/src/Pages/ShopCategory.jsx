import React, { useState } from 'react'
import './output.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../components/Assets/dropdown.svg'
import Item from '../components/Items/Item'
const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const product_length = all_products.filter(item => item.category == props.category).length;
  return (
    <div className='bg-linear-to-t from-[#C4E2F5] to-[#e1ffea22] pb-37.5'>
      <img src={props.banner} className='w-screen'></img>
      <div className="shopcategory-index ml-5 mr-5 flex sm:ml-35 sm:mr-35 justify-between items-center mt-5">
        <p>
          <span className='font-semibold'>Showing 1-{product_length}</span> out of {all_products.length} products
        </p>
        <div className="shopcategory-sort sm:pt-2.5 sm:pb-2.5 flex  items-center sm:pl-5 sm:pr-5 rounded-[40px] border border-[#888] ">
          Sort By <img src={dropdown} className='h-3' />
        </div>
      </div>
      <div className="shopcategory-products new-collection-item w-screen flex mt-12.5 gap-5 justify-evenly flex-wrap pt-5 pb-5">
        {all_products.map((item, i) => {
          if (props.category == item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center mt-37.5 ml-auto mr-auto w-58.25 h-17.25 rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
