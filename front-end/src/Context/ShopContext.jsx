import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart
}
const ShopContextProvider = (props) => {

    const [all_product,setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: "",
            })
            .then((response)=>response.json())
            .then((data)=>setCartItems(data))
        }
    },[])
    
    const addToCart = (itemId) =>{
        setCartItems((prev) => {
            const newCartItems = {...prev, [itemId]: prev[itemId] + 1};
            return newCartItems;
        });
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>{
                data.success?alert("Product Added to Cart"):alert("Failed")
            });
        }
        document.querySelectorAll('.productdisplay-right-size-option').forEach(div => {
            div.classList.remove('active');
          });
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => {
            const newCartItems2 = {...prev, [itemId]: prev[itemId] - 1};
            return newCartItems2;
        });
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const getTotalCartAmount = () =>{
        let total_amount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product) => product.id===Number(item));
                if(itemInfo){
                    total_amount += parseFloat(itemInfo.new_price.replace("$", "")) * cartItems[item];
                }
            }
        }
        return total_amount;
    }

    const getTotalCartItems = () => {
        let total_item = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                total_item += cartItems[item];
            }
        }
        return total_item;
    }
    
    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider