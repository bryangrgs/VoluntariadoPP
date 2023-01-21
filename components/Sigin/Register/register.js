import React, { useState} from 'react';
import { Container,FormWrap,Icon,FormContent,
    Form,FormH1,FormLabel,FormInput,ButtonSignin, } from './RegisterElements';
import '../error.css';
import {useAuth} from '../context/authContext'
import { useNavigate } from 'react-router-dom';
    // export function Home1(){
    //     const {user}= useAuth()
    //     // const authContext = useContext(context)
    //     console.log(user);
    //     return <div>hola</div>
    // }
export function Registro(){
    const [ user, setUser]= useState({
        email:'',
        password:'',
    });
    const {signup} =useAuth();
const navigate = useNavigate();
const [error, setError]=useState();

    const handleChange=({target:{name,value}})=>{
        setUser({...user,[name]:value})
    }
    const handleSubmit= async e=>{
        e.preventDefault();
        setError('');
        try{
            await signup(user.email , user.password) ;
           navigate('/login');
        
    }catch (error){

        console.log(error.code);

        if(error.code === 'auth/internal-error'){
            setError('Correo invalido');
        }else{
            if (error.code === 'auth/weak-password'){
            setError('Contraseña corta');
             }else{
                    if (error.code === 'auth/invalid-email'){
            setError('Correo invalido');
        }
    
            }if (error.code === 'auth/email-already-in-use'){
                setError('El correo se encuentra en uso');
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
            {error && <p> {error} </p>}
            <Form action='#' onSubmit={handleSubmit}>
            <FormH1> Registra tu cuenta</FormH1>
            <FormLabel htmlFor= 'email'>Ingrese su email</FormLabel>
            <FormInput    type ='email' name='email' placeholder='Ingrese su correo' onChange={handleChange} required/>
            <FormLabel htmlFor='for'>Ingrese su contraseña</FormLabel>
            <FormInput  type='password' 
                placeholder='Ingrese contraseña'name='password' id='password'  onChange={handleChange}/>
            <ButtonSignin >Crear cuenta nueva</ButtonSignin>
            
            </Form>
        </FormContent>
    </FormWrap>
    
    </Container>
        
        </>
    

    )
}