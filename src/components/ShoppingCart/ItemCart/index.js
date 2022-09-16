import React,{useContext} from 'react'
import { CartContext } from '../Context/CartContext'
// import './style.css'
export const ItemCart = ({item}) => {
  const {deleteItemToCart, addItemToCart}= useContext(CartContext);

  return( <div className='cartItem'>
     <img src={item.img} alt={item.name}/>
     <div className='dataContainer'>
      <div className='left'>
        <p>{item.name}</p>
        <div className='buttons'>
          <button onClick={()=> addItemToCart(item)}>
            Agregar
          </button>
          <button onClick={()=> deleteItemToCart(item)}>
            Eliminar
          </button>
        </div>
      </div>
      <div className='right'>
        <div> {item.amount}</div>
          <p>Total: ${item.amount* item.price}</p>
        
      </div>
     </div>
     </div>
  );
};
