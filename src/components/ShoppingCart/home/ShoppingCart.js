import React from "react"

import './ShoppingCart.css';

import { CartProvider } from "../Context/CartContext";
/*home carpeta *//* < HiShoppingCart className="CartWidget"/> */
const CartWidget = () =>
{
    return (
        <div>
            <CartProvider>
                
                </CartProvider>    
        </div>

    )
}
export default CartWidget
