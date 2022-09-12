import React from 'react'
import { Container,FormWrap,Icon,FormContent,
    Form,FormH1,FormLabel,FormInput,FormButton,Text,ButtonSignin,Line } from './SigninElements'

export const SignIn = () => {
  return (
    <><Container>
        <FormWrap>
            <Icon to='/'>logo</Icon>
            <FormContent>
                <Form action='#'>
                <FormH1> Inicia sesion en tu cuenta</FormH1>
                <FormLabel htmlFor= 'for'>Email</FormLabel>
                <FormInput type ='email' required/>
                <FormLabel htmlFor='for'>Contraseña</FormLabel>
                <FormInput type='password' required/>
                <FormButton type='submit'>Inicar sesion</FormButton>
                <Text> ¿Has olvidado la contraseña?</Text>
                <Line></Line>
                <ButtonSignin>Crear cuenta nueva</ButtonSignin>
                </Form>
            </FormContent>
        </FormWrap>
        </Container></>
  )
}
