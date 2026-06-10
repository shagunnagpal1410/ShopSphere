import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcums from '../components/Breadcums/Breadcums';
import Descriptionbox from '../components/Descriptionbox/Descriptionbox';
import './output.css'
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Relatedproducts from '../components/Relatedproducts/Relatedproducts';
const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productid}=useParams();
  const product = all_products.find((e)=>e.id===Number(productid));
  return (
    <div className='bg-linear-to-t from-[#C4E2F5] from-0% to-[#e1ffea22] to-100%'>
      {product && <Breadcums product={product} />}
      {product && <Productdisplay product={product}/>}
      <Descriptionbox/>
      <Relatedproducts/>
    </div>
  )
}

export default Product
