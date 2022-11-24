import React, { useContext, useEffect, useState } from 'react'
import './style.css'
import {CartContext} from '../Context/CartContext'
import { ItemCart, } from '../ItemCart';
import {HiShoppingCart} from 'react-icons/hi'
import {FiXCircle} from 'react-icons/fi'
import guardarOrden from "../../utils/guardarOrden";
import ordenGenerada from "../../utils/generarOrden";
import Form from '../../Form/Form'
import { Button, Typography } from "@mui/material";


export const Cart = () => {
  const [isForm, setForm] = useState(false);
  const [precioTotal, setPrecioTotal] = useState(0);
  const confirmarOrden = async (name, adress, phone, email) => {
    const order = ordenGenerada(name, adress, phone, email, cartItems, precioTotal);
    guardarOrden(cartItems, order);
    clearItem();
  };
  const handleSubmit = (param) => {
    setForm(param);
  };
  const [cartOpen,setCartOpen]= useState(false)
  const [productsLength, setProductsLength] = useState(0)
  
  const{cartItems,clearItem} = useContext(CartContext);
 
  useEffect(() => {
    const precioReduce = () => {
     
      const valor = Object.values(cartItems).reduce(
        (suma, objeto) => suma + objeto.price * objeto.quantity,
        0
      );
      console.log('valor',valor)
      setPrecioTotal(total);
    };
    precioReduce();
  }, []);




  useEffect(()=>{
    setProductsLength(
      cartItems.reduce((previous, current)=> previous + current.amount,0)
    );
    },[cartItems]);
    const total = cartItems.reduce((previous, current)=> previous + current.amount * current.price,0);
   
    
  return (
    <div className='cartContainer'>
      <div  onClick={()=>{setCartOpen(!cartOpen)}} className='buttonCartContainer'>
        <div className='buttonCart'>
          {!cartOpen ?(
          <HiShoppingCart className='contenedorcarro'></HiShoppingCart>
          ):(
            <FiXCircle className='contenedorcarro'></FiXCircle>
            
          )}
        </div>
        {!cartOpen && 
          <div className='productsNumber'>{productsLength} </div>}
          </div>
       {cartItems && cartOpen &&(
       
       <div className='cart' >
        <div className='scrollP'>
       <h2 className='titulo 2'>tu carrito</h2>
       {cartItems.length === 0 ? <p className='cartVacio'> tu carrito esta vacio</p> :(
         <div className='items'>{cartItems.map((item,i)=>(
           <ItemCart key={i} item={item}/>
         ))}
         </div>
         
       )}
       <h2 className='total'>Total: $ {total}</h2>
       
       {isForm && <Form cerrar={handleSubmit} makeOrder={confirmarOrden} />}
       
       
      <div className="container-btns-cart">
    
        {cartItems.length !== 0 ? (
          <>
            <Button
              variant="text"
              onClick={() => clearItem()}
              style={{
                color: "#000",
                backgroundColor: "#FF5D5D",
                width: 140,
                height: 38,
              }}
            >
              Cancel
            </Button>
            <Button
              variant="text"
              style={{
                color: "#000",
                backgroundColor: "#A0D995",
                width: 150,
                height: 38,
                padding: 1,
              }}
              onClick={() => {
                handleSubmit(true);
              }}
            >
              Confirmar compra
            </Button>
          </>
        ) : (
          <Typography className="Notselect-products">
            You have no selected products...
          </Typography>
        )} </div>
        </div>
      
</div>


  )}
  </div>
);

};
