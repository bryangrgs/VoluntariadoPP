
import { createContext,useEffect, useState } from "react";

 export const CartContext= createContext()

export const CartProvider= ({children}) =>{
    const[cartItems,setCartItem]= useState(()=>{
        try {
            const productosEnLocalStorage = localStorage.getItem('cartProducts')
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch (error) {
            return [];
            
        }
    });
    useEffect(()=>{
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
        console.log(cartItems)
        
    },[cartItems]);

    const addItemToCart = (producto) =>{
      const inCart = cartItems.find((productInCart )=> productInCart.id === producto.id);
      if (inCart){
        setCartItem(
            cartItems.map((productInCart)=>{
                if(productInCart.id === producto.id){
                    return{...inCart, amount: inCart.amount + 1}
                } else return productInCart;
            })
        );
      }else {
        setCartItem([...cartItems, {...producto, amount: 1}])
      };
    };
      const deleteItemToCart = (producto) =>{
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === producto.id
        );
        if(inCart.amount === 1){
            setCartItem(
                cartItems.filter((productInCart) => productInCart.id !== producto.id)
            );
        }else {
            setCartItem(cartItems.map((productInCart)=> {
                if(productInCart.id === producto.id){
                    return{...inCart, amount : inCart.amount - 1};
                } else return productInCart;
            }));

        }
      };
      return (
        <CartContext.Provider value= {{cartItems, addItemToCart,deleteItemToCart}}>
            {children}
        </CartContext.Provider>
      )
    };
