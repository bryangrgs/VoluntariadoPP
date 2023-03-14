import { useState } from "react";

export const useCounter = (initialState) =>{

    const[counter,setCounter]= useState(initialState)
    const reset = ()=>{
        setCounter(initialState)
    }
    const increment = (param, stock) => {

        counter < stock && setCounter(prev => prev+param)
    }
    const decrement = (param, initial)=> {

        counter > initial && setCounter(prev => prev - param)
    }
    return{
        counter,
        increment,
        decrement,
        reset
    }
}