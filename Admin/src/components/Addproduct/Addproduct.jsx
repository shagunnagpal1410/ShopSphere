import React from 'react'
import './output.css'
import upload_area from '../../Assets/upload_area.svg'
import { useState } from 'react'
const Addproduct = () => {
    const [image, setimage] = useState(false);
    const imagehandler=(e)=> {
        setimage(e.target.files[0]);
    }
    const [productdetails, setproductdetails] = useState({name:"", image:"", category:"women", new_price:"", old_price:""});
    const changehandler=(e)=> {
        setproductdetails({...productdetails, [e.target.name]:e.target.value})
    }
    const addproduct=async ()=>{
        let responsedata;
        let product=productdetails;
        let formdata=new FormData();
        formdata.append('product',image);
        await fetch(`https://shopsphere-nfq5.onrender.com/upload`, {
            method:'POST',
            headers:{
                Accept:'application/json'
            },
            body:formdata,
        } ).then((res)=> res.json()).then((data)=>{responsedata=data})
        if(responsedata.success) {
            product.image=responsedata.image_url;
            await fetch(`https://shopsphere-nfq5.onrender.com/addproduct`, {
                method:'POST',
                headers: {
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((res)=>res.json()).then((data)=> {
                data.success?alert("Product Added"):alert("Some Error has Occured");
                window.location.reload();
            })
        }
    }
  return (
    <div className='box-border w-full sm:max-w-200 py-7.5 sm:px-12.5 my-5  sm:mx-7.5 rounded-md bg-[#daecf7]'>
      <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
        <p>Product title</p>
        <input value={productdetails.name} onChange={changehandler} className='box-border w-full h-12.5 rounded-sm pl-3.75 border border-[#c3c3c3] text-[#7b7b7b] text-[14px]' type="text" name="name" placeholder='Type Here' />
      </div>
      <div className="addproduct-price flex gap-10">
        <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
            <p>Price</p>
            <input value={productdetails.old_price} onChange={changehandler} className='box-border w-full h-12.5 rounded-sm pl-3.75 border border-[#c3c3c3] text-[#7b7b7b] text-[14px]' type="text" name="old_price" placeholder="Type Here" />
        </div>
        <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
            <p>Offer Price</p>
            <input value={productdetails.new_price} onChange={changehandler} className='box-border w-full h-12.5 rounded-sm pl-3.75 border border-[#c3c3c3] text-[#7b7b7b] text-[14px]' type="text" name="new_price" placeholder="Type Here" />
        </div>
      </div>
      <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
        <p>Product Category</p>
        <select value={productdetails.category} onChange={changehandler} name="category" className='add-product-selector p-2.5 w-full h12.5 text-[14px] text-[#7b7b7b] border border-[#7b7b7b] rounded-sm'>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
        </select>
      </div>
      <div className="addproduct-itemfield w-full text-[#7b7b7b] text-[16px]">
        <label htmlFor='file-input'>
            <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumbnail-img h-30 w-30 border object-contain my-2.5 border-[#7b7b7b]'></img>
        </label>
        <input onChange={imagehandler} className='box-border w-full h-12.5 rounded-sm pl-3.75 border border-[#c3c3c3] text-[#7b7b7b] text-[14px]' type="file" name="image" id="file-input" hidden />
      </div>
      <button  onClick={addproduct} className="addproduct-btn mt-5 w-40 h-12.5 rounded-md bg-[#6079ff] text-[16px] text-white cursor-pointer">ADD THIS PRODUCT</button>
    </div>
  )
}

export default Addproduct
