// import React, { useState, useContext} from 'react'
// import { Container,FormWrap,Icon,FormContent,
//     Form,FormH1,FormLabel,FormInput,
//     FormButton,Text,ButtonSignin,Line,FormInput1,FormLabel2 } from './SigninElements'
// import './error.css';
// import { useAuth } from './context/authContext';


// export const SignIn = () => {

//     const username='bryan@gmail.com';
//     const password='1234567';

//     const[usernameState,setUsernameState]=useState('');
//     const[userpassState,setUserPassState]=useState('');
//     const[passwordError, setPasswordError]=useState(false);
//     const[loggedin,setLoggedIn]=useState(false);
//     const[hasError,setHasError]=useState(false);
    
    


//     function handleChange(name,value1){
//         if(name === username){
//             setUsernameState(value1)
//         }else{
//             if(value1.length < 6){
//                 setPasswordError(true)

//             }else{
//                 setPasswordError(false)
//                  setUserPassState(value1)
//             }
           
//         }
//     };


//     function Login(value){
//         let account = {username,password}
//         if (account){
//             IfMatch(account);    
//     };
//         if(userpassState.length < 6){
            
//             setPasswordError(true);
//             console.log('contrasenia corta:', userpassState)


//         }else{
//             if(usernameState === username && userpassState === password){
//             setLoggedIn(true);
//             setUserPassState(value);
//             setPasswordError(false);
//         }else{
//             setHasError(true);
//             setPasswordError(true);
//             setUserPassState(value)
//             setLoggedIn(false);
            
            
//         }
//         }
//     };
//     function IfMatch(param){
//         if(param.username.length > 0 && param.password.length > 0){
//             if(param.username === username && param.password === password){
//                 const{username, password}= param;
//                 let ac= {username,password};
//                 let account= JSON.stringify(ac);
//                 localStorage.setItem('accont',account);
//                 setHasError(false);
                
                
//             }else{
//                 setLoggedIn(false);
//                 setHasError(true);
//             }
//         }else{
//             setLoggedIn(false);
//             setHasError(true);
//         }
//         }
//     function HandleSubmit(){
        
//       Login()
  
//     }
//     const handleSubmitLogin=e=>{
//         e.preventDefault()
        
//     }
//   return (
//     <>
//     <Container>
//         <FormWrap>
//             <Icon to='/'>logo</Icon>
//             <FormContent>
//                 <Form action='#' onSubmit={handleSubmitLogin}>
//                 <FormH1> Inicia sesion en tu cuenta</FormH1>
//                 {hasError &&
//                  <FormLabel2 className=''>
//                     Su contraseña o usuario son incorrectos, o no existen en nuestra plataforma.</FormLabel2>}
               
//                 <FormLabel htmlFor= 'for'>Email</FormLabel>
//                 <FormInput    type ='email' placeholder='Ingrese su correo' name='usuario' id='usuario'  onChange={(event)=>{
//                     setUsernameState(event.target.value);
//                 }} required/>
//                 <FormLabel htmlFor='for'>Contraseña</FormLabel>
//                 <FormInput1  param={passwordError} type='password' 
//                 className={passwordError ? 'input-error' :'regular-style'}  
//                 placeholder='Ingrese contraseña'name='contraseña' id='contraseña' 
//                 onChange={
//                     (event)=>{handleChange(event.target.name,event.target.value);}
                   
//                 }
                

//                       required/>
//                 {passwordError &&
//                 <FormLabel>Contraseña incorrecta o incompleta</FormLabel>}
                
//                 <FormButton type='submit'  onClick={HandleSubmit} >Inicar sesion</FormButton>
//                 {loggedin && <FormLabel>logged in</FormLabel>}
//                 <Text> ¿Has olvidado la contraseña?</Text>
//                 <Line></Line>
//                 <ButtonSignin >Crear cuenta nueva</ButtonSignin>
                
//                 </Form>
//             </FormContent>
//         </FormWrap>
        
//         </Container></>
//   )
// }
