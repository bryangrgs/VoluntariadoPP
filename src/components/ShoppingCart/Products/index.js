import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { ProductsData } from '../Data/ProductsData'
import './styles.css'

export const Products = () => {
  const {addItemToCart}= useContext(CartContext)
  return (
    <div className='productsContainer'>
        {ProductsData.map((producto,i) => (            
        <div key={i} className='product'>
                <img src={producto.img} alt={producto.name}/>
                <div>
                    <p>
                        {producto.name}- ${producto.price}
                    </p>
                </div>
                <button onClick={()=>addItemToCart(producto)}>Agregar al carritot</button>
</div>
        ))}

    </div>
  )
}
