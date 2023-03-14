import React, { useState } from 'react';
import './ItemCount.css'
     
        //condicio ?
export const ItemCount = ({initial, stock,onAdd}) => {

    const [count,setCount]= useState(initial)

    const handleAdd=()=>{
 if(count<stock){
         setCount(count+1)
      } else{
        alert(`Compra maximo`+stock)
      }
      // count < stock ? onAdd(count+param) : alert(`stock maximo ${stock}`)
      }
     

    
    const handleSubstract =()=>{
      if(count>initial){
        setCount(count-1)

      }
      else{
        alert('compra minima:'+ initial)
      }

    }
    const reset=() =>{
      setCount(initial)
    }


/* {count >= initial && <button> Agregar al carro</button> }
 */
  return (
    <div className='container'>
        <h2>{count}</h2>
        <button onClick={()=>handleAdd(1)}>+</button>
        <button onClick={handleSubstract}>-</button>
        <button onClick={reset}>reset</button>
        
     <button  onClick={() => onAdd(count)} disabled ={count < initial ? true : false}> Agregar al carro</button> 

    </div>
  )
}
