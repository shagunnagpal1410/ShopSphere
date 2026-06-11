import React from 'react'
import './output.css'
import Item from '../Items/Item'
import { useState, useEffect} from 'react'
const Relatedproducts = () => {
  const [relatedproducts, setrelatedproducts] = useState([]);
  useEffect(() => {
    fetch("https://shopsphere-nfq5.onrender.com/relatedproducts")
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA:", data);
        setrelatedproducts(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className='flex flex-col items-center gap-2.5'>
      <h1 className='text-[#171717] text-[20px] sm:text-[50px] font-semibold '>Related Products</h1>
      <hr className='w-50 h-1.5 rounded-[10px] bg-[#252525]'></hr>
      <div className="relatedproducts-item mt-12.5 flex gap-6 flex-wrap justify-around">
        {relatedproducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
        })}
      </div>
    </div>
  )
}

export default Relatedproducts
