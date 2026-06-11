import React, { useEffect } from 'react'
import './output.css'
import { useState } from 'react'
import delete_icon from '../../Assets/delete.svg'
const Listproduct = () => {
    const [allproducts, setallproducts] = useState([]);
    const fetchinfo = async () => {
        await fetch(`https://shopsphere-nfq5.onrender.com/allproducts`).then((res) => res.json()).then((data) => {
            setallproducts(data)
        });
    }
    useEffect(() => {
        fetchinfo();
    }, [])
    const remove_product = async (id) => {
        await fetch(`https://shopsphere-nfq5.onrender.com/removeproduct`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        await fetchinfo();
    }
    return (
        <div className='flex flex-col items-center w-[95%]
        sm:w-screen h-screen sm:h-185 py-2.5 px-5 overflow-y-scroll scrollbar-hide sm:px-12.5 m-auto sm:mx-7.5 rounded-md bg-[#C4E2F5]'>
            <h1 className='text-2xl sm:text-4xl font-bold text-gray-900'>All Products List</h1>
            <div className="listproduct-format-main grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-2.5 py-5 text-[#454545] text-[12px] sm:text-[15px] font-medium w-full">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listpoduct-allproducts w-full">
                <hr />
                {allproducts.map((product, index) => {
                    return <div key={index} >
                    <div className="listproduct-format-main grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-2.5 py-5 text-[#454545] text-[12px] sm:text-[15px] font-normal w-full items-center">
                        <img src={product.image} className="listproduct-producticon h-8 sm:h-20" />
                        <p>{product.name}</p>
                        <p>{product.old_price}</p>
                        <p>{product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={() => {
                            remove_product(product.id)
                        }} src={delete_icon} className='lisproduct-delete-icon cursor-pointer h-4 sm:h-8' />
                    </div>
                    <hr></hr>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Listproduct
