import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
    const [all_products, setall_products] = useState([]);
    useEffect(() => {
        fetch(`https://shopsphere-nfq5.onrender.com/allproducts`).then((res) => res.json()).then((data) => setall_products(data));
        if (localStorage.getItem('auth-token')) {
            fetch(`https://shopsphere-nfq5.onrender.com/getcart`, {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: "",
            }).then((res) => res.json()).then((data) => setcartitems(data));
        }
    }, [])

    const [cartitems, setcartitems] = useState([]);
    const addtocart = ((itemid, size) => {
        setcartitems(prev => {
            const exists = prev.some(
                item => item.itemid === itemid && item.size === size
            );

            if (exists) {
                return prev.map(item =>
                    item.itemid === itemid && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prev,
                {
                    itemid,
                    quantity: 1,
                    size
                }
            ];
        });
        if (localStorage.getItem('auth-token')) {
            fetch(`https://shopsphere-nfq5.onrender.com/addtocart`, {
                method: 'POST',
                headers: {
                    Accept: 'aaplication/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemid, "size": size }),
            }).then((res) => res.json()).then((data) => console.log(data))
        }
    })
    const removefromcart = ((itemid, size) => {
        setcartitems(prev => {
            return prev
                .map(item =>
                    item.itemid === itemid && item.size === size
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0);
        });
        if (localStorage.getItem('auth-token')) {
            fetch(`https://shopsphere-nfq5.onrender.com/removefromcart`, {
                method: 'POST',
                headers: {
                    Accept: 'aaplication/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemid, "size": size }),
            }).then((res) => res.json()).then((data) => console.log(data))
        }
    })
    const totalpricecalc = () => {
        let total = 0;

        all_products.forEach((product) => {
            let carts = cartitems.filter(item => item.itemid === product.id)
            carts.forEach(element => {
                total += (element.quantity * product.new_price);
            });
        });

        return total;
    };
    const cartvaluecalc = () => {
        let count = 0;

        all_products.forEach((product) => {
            let carts = cartitems.filter(item => item.itemid === product.id)
            carts.forEach(element => {
                count += (element.quantity);
            });
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
