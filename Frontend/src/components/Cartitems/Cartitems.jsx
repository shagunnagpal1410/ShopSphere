import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import delete_icon from '../Assets/delete.svg'
import './output.css'
const Cartitems = () => {
  const { all_products, cartitems, removefromcart, totalpricecalc} = useContext(ShopContext);
  return (
    <div className='bg-linear-to-t from-[#C4E2F5] to-[#e1ffea22]'>
    <div className='mt-5 sm:mt-25 pb-25 mx-5 sm:mx-42.5 '>
      <div className="cartitem-format-main grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr_1fr_1fr] items-center sm:gap-18.75 py-5 px-0 text-[#454545] text-[12px] sm:text-[18px] font-semibold gap-5">
        <p>Products</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p>Size</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-0.75 bg-[#e2e2e2]'></hr>
      {cartitems.map((e) => {
        let id=e.itemid;
        let product=all_products.find(item=>item.id===id);
        if (!product) return null;
          return (
            <React.Fragment key={String(product.id)+e.size}>
          <div className="cartitems-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr_1fr_1fr] items-center sm:gap-18.75 py-5 px-0 text-[#454545] text-[11px] sm:text-[17px] font-medium gap-5">
            <img src={product.image} className='carticon-product-icon sm:h-15.5 h-10' />
            <p>{product.name}</p>
            <p>{product.new_price}</p>
            <button className='cartitems-quantity sm:w-16 sm:h-12.5 h-5 w-8 border-2 border-[#ebebeb] bg-white'> {e.quantity}</button>
            <p>{e.size}</p>
            <p>Rs {product.new_price*e.quantity}</p>
            <img onClick={() => {
              removefromcart(product.id,e.size);
            }} src={delete_icon} className='w-3.75 my-10 cursor-pointer' />
          </div>
          <hr className='h-0.75 bg-[#e2e2e2]'></hr>
          </React.Fragment>
          )
      })}
      <div className="cartitems-down flex my-25 flex-col sm:flex-row">
        <div className="cartitems-total flex flex-col mr-50 gap-10">
          <h1>cart Total</h1>
          <div>
            <div className="cartitems-total-item flex justify-between py-3.75">
              <p>Subtotal</p>
              <p>rs {totalpricecalc()}</p>
            </div>
            <hr/>
            <div className="cartitems-total-item  flex justify-between py-3.75">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <div className="cartitems-total-item  flex justify-between py-3.75">
              <h3>Total</h3>
              <h3>Rs {totalpricecalc()}</h3>
            </div>
          </div>
          <button className='sm:w-65.5 sm:h-14.5 bg-orange-600 text-white text-[16px] font-semibold cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode flex flex-col text-[16px] font-medium">
          <p className='text-[#555555]'>If you have apromo code enter it here</p>
          <div className="cartitems-promobox w-80 sm:w-126 mt-3.75 pl-5 sm:h-14.5 bg-[#eaeaea] flex ">
            <input className='bg-transparent text-[16px] w-50 sm:w-82.5 sm:h-12.5' type="text" placeholder='PROMOCODE'/>
            <button className='w-30 sm:w-42.5 sm:h-14.5 text-[16px] bg-black text-white cursor-pointer'>Enter</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cartitems
