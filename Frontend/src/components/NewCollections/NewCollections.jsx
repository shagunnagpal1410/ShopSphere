import React from 'react'
import Item from '../Items/Item'
import './output.css'
import { useState, useEffect } from 'react'
const NewCollections = () => {
  const [new_collection, setnew_collection] = useState([])
  useEffect(()=> {
    fetch(`https://shopsphere-nfq5.onrender.com`).then((res)=>res.json()).then((data)=>setnew_collection(data));
  }, [])
  return (
    <div className='bg-linear-to-b from-[#C4E2F5] from-0% to-[#e1ffea22] to-100% flex flex-col gap-2.5 pt-[5vh] pb-[10vh] items-center'>
      <h1 className='text-4xl  tracking-tight text-[#171717] font-semibold'>NEW COLLECTION</h1>
      <hr className='w-50 h-1.5 rounded-[10px] bg-[#252525]'/>
      <div className="new-collection-item w-screen flex mt-12.5 gap-7.5 justify-evenly flex-wrap">
        {new_collection.map((item,i)=> {
            return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
