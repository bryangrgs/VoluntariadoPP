import React from 'react';
import { useCounter } from '../hooks/useCounter';
import './ItemCount.css'
     
        //condicio ?
export const ItemCount2 = ({initial, stock,onAdd}) => {
    const {counter,increment,decrement,reset}= useCounter(initial)

  return (
    <div className='container'>
        <h2>{counter}</h2>
        <button onClick={()=>increment(1,stock)}>+</button>
        <button onClick={()=>decrement(1,initial)}>-</button>
        <button onClick={reset}>reset</button>
        
     <button  onClick={() => onAdd(counter)} disabled ={counter < initial ? true : false}> Agregar al carro</button> 

    </div>
  )
}
