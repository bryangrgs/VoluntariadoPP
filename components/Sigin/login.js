import React, { useState} from 'react';
import { Container,FormWrap,Icon,FormContent,
    Form,FormH1,FormLabel,FormInput,ButtonSignin,Line,ButtonSigninLink} from './Register/RegisterElements';
import './error.css';
import {useAuth} from './context/authContext';
import { useNavigate } from 'react-router-dom';
import { Texta } from './SigninElements';
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

export function Login(){
    const [ user, setUser]= useState({
        email:'',
        password:'',
    });
    const {login} =useAuth();
const navigate = useNavigate();
const [error, setError]=useState();

    const handleChange=({target:{name,value}})=>{
        setUser({...user,[name]:value})
    }

    const handleSubmit= async e=>{
        e.preventDefault();
        setError('');
        try{
            await login(user.email , user.password) ;
           navigate('/');
        
    }catch (error){

        console.log(error.code);
        if(error.code === 'auth/user-not-found'){
            setError('Correo invalido');
        } else{
            if (error.code === 'auth/wrong-password') {
            setError('Contraseña incorrecta');
        } else{
            if (error.code === 'auth/too-many-requests') {
                setError('Se realizo muchos intentos');
            }
        }
    }
    }
 
    }
 
    return(
        <>
        
        <Container>
    <FormWrap>
        <Icon to='/'>logo</Icon>
        <FormContent>
       
            <Form action='#' onSubmit={handleSubmit}>
           
            <FormH1> Inicia sesion en tu cuenta</FormH1>
            {error && <p className='texto'> {error} </p>}
            <FormLabel htmlFor= 'email'>Ingrese su correo</FormLabel>
            
            <FormInput    type ='email' name='email' placeholder='Ingrese su correo' onChange={handleChange} required/>
            <FormLabel htmlFor='for'>Ingrese su contraseña</FormLabel>
            <FormInput  type='password' 
                placeholder='Ingrese su contraseña'name='password' id='password'  onChange={handleChange}/>
            <ButtonSignin>Iniciar sesion</ButtonSignin>
            <Texta href='/RecoverPassword'> ¿Has olvidado tu contraseña?</Texta>
                <Line></Line>
                <ButtonSigninLink to='/registro' >Crear cuenta nueva</ButtonSigninLink>
            </Form>
        </FormContent>
    </FormWrap>
    
    </Container>
        
        </>
    )
}