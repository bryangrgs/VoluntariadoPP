import React, { useState} from 'react';
import { Container,FormWrap,Icon,FormContent,
    Form,FormH1,FormLabel,FormInput,Line,ButtonSignin} from './Register/RegisterElements';
import './error.css';
import {useAuth} from './context/authContext';
import { useNavigate } from 'react-router-dom';

    // export function Home1(){
    // const{user,logout,loading} useAuth()
    // conts handleLogout= async()=>{
    // await logout()
    //}
    // if (loading)return <h1> loading
    //return <div>
    // <h1> welcome {user.email}
    //<button onClick={handleLogout}
    // }

export function Forgot(){
    const [ user, setUser]= useState({
        email:'',
        password:'',
    });
    const {resetPassword} =useAuth();

const [error, setError]=useState();
 const handleChange=({target:{name,value}})=>{
        setUser({...user,[name]:value})
    }
const handleResetPassword=async()=>{
    if (!user.email) return setError('Por favor ingresa tu correo');
  try{
        await resetPassword(user.email);
        
        setError('te enviamos un enlace con un link para que recuperes tu contraseña')
} catch(error){
    setError(error.message)
}
    }

   

   
 
    return(
        <>
        
        <Container>
    <FormWrap>
        <Icon to='/'>logo</Icon>
        <FormContent>
       
            <Form action='#' >
           
            <FormH1> Ingresa tu correo para recuperar tu cuenta</FormH1>
            {error && <p className='texto'> {error} </p>}
            <FormLabel htmlFor= 'email'>Ingrese su correo</FormLabel>
            
            <FormInput    type ='email' name='email' placeholder='Ingrese su correo' onChange={handleChange} required/>
                <Line></Line>
                <ButtonSignin to='/' onClick={handleResetPassword}>Enviar</ButtonSignin>
            </Form>
        </FormContent>
    </FormWrap>
    
    </Container>
        
        </>
    )
}