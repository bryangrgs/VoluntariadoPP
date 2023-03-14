import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext'
 import './style.css'
export const ItemCart = ({item}) => {
  const {deleteItemToCart, addItemToCart,ResetItemToCart}= useContext(CartContext);
  return( <div className='cartItem'>
  <img  className='imagen' src={item.image} alt={item.name}/>
  <div>Stock: {item.stock} </div>
  <div className='dataContainer'>
   <div className='left'>
     <p className='parrafo'>{item.name}</p>
     <div className='buttons'>
       <button className='boton' onClick={()=> addItemToCart(item)}>
         Agregar
       </button>
       <button className='boton' onClick={()=> deleteItemToCart(item)}>
         Eliminar
       </button>
       <button className='boton' onClick={()=> ResetItemToCart(item)}>Borrar todo</button>
     </div>
   </div>
   <div className='dataContainerp'>
     <div className='parrafo'> Cantidad: {item.amount}</div>
       <p className='parrafo'>Total: ${item.amount* item.price}</p>
     
   </div>
  </div>
  </div>
);
};
