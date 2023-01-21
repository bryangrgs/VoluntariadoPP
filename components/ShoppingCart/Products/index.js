import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/CartContext'

import './styles.css'
import ItemDetail from '../function/ItemDetail';

ItemDetail()
export const Products = () => {
 

  const {addItemToCart}= useContext(CartContext)
 
  const [productos,setProductos]= useState(null);
  useEffect(()=>{
    async function getProducts(){
      const products = await ItemDetail();
      setProductos(products)
    }
    getProducts()
  },[]);
 
  return (
    
    <div className='productsContainer' id='catalogo'>
       {productos? productos.map((p) => ( 
        <div  key={p.id}   className='product'>
        <img src={p.image} alt={p.name} className='imagen'/>
     
        <button className='botoncarrito' onClick={()=>addItemToCart(p)}>Agregar al carrito</button>
                
                <div className='containerbajo' >
                    <p className='letras'>
                        {p.name} 
                      
                    </p>
                 <p className='preciodes'>{p.description} </p>  
                 <p className='precio'>${p.price}</p>
                </div>
                
              
                </div>
                  
              
                
             
                
                
                


      
)): null};

    </div>
  )
}
