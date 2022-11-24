import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
min-height : 700px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(108deg,
rgba(2,147,86,0.1) 0%,
rgb(10,201,122,1) 100%
);
`
export const FormWrap= styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 400px){
    height: 80%;
}
`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 600;
font-size: 30px;
@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`
export const FormContent= styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 480px){
    padding: 10px;
}
`
export const Form = styled.form`
background: #010101;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
@media screen and (max-width: 400px){
    padding: 32px 32px;
}

`
export const FormH1= styled.h1`
margin-bottom: 40px;
color:#fff;
font-size: 20px;
font-weight: 400;
text-align: center;
`
export const FormLabel= styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`
export const FormLabel2= styled.label`
margin-bottom: 8px;
font-size: 14px;
color: red;
`
export const FormInput= styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;
`
export const FormButton = styled.button`

text-decoration: none;
text-align: center;
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`
export const Text= styled.span`
text-align: center;
margin-top: 24px;
margin-bottom: 20px;
color: #fff;
font-size: 14px;
`
export const ButtonSignin= styled.button`
text-align: center;
text-decoration: none;
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
&:hover{
    background-color: white;
color: black;  
}

`
export const Line= styled.div`
align-items:  center;
border-bottom: 1px solid #dadde1;
display: flex;
margin: 20px 16px;
text-align: center;

`
export const FormInput1= styled.input`

`
export const ButtonSigninLink= styled(Link)`
text-align: center;
text-decoration: none;
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
&:hover{
background-color: white;
color: black;  
}

`