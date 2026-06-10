import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
export const ShopContext = createContext(null);
const getdefaultcart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [all_products, setall_products] = useState([]);
    useEffect(() => {
        fetch(`https://shopsphere-nfq5.onrender.com/allproducts`).then((res) => res.json()).then((data) => setall_products(data));
        if (localStorage.getItem('auth-token')) {
            fetch(`https://shopsphere-nfq5.onrender.com/getcart`, {
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
            }).then((res)=>res.json()).then((data)=>setcartitems(data));
        }
    }, [])

    const [cartitems, setcartitems] = useState(getdefaultcart());
    const addtocart = ((itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch(`https://shopsphere-nfq5.onrender.com/addtocart`, {
                method: 'POST',
                headers: {
                    Accept: 'aaplication/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemid }),
            }).then((res) => res.json()).then((data) => console.log(data))
        }
    })
    const removefromcart = ((itemid) => {
        setcartitems((prev) => (prev[itemid] > 0 ? { ...prev, [itemid]: prev[itemid] - 1 } : prev));
        if (localStorage.getItem('auth-token')) {
            fetch(`https://shopsphere-nfq5.onrender.com/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'aaplication/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemid }),
            }).then((res) => res.json()).then((data) => console.log(data))
        }
    })
    const totalpricecalc = () => {
        let total = 0;

        all_products.forEach((product) => {
            total += cartitems[product.id] * product.new_price;
        });

        return total;
    };
    const cartvaluecalc = () => {
    let count = 0;

    all_products.forEach((product) => {
        count += cartitems[product.id] || 0;
    });

    return count;
};
    const contextValue = { all_products, cartitems, addtocart, removefromcart, cartvaluecalc, totalpricecalc };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
