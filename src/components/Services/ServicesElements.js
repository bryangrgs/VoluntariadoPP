import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
export const ServicesContainer =  styled.div`
height: 800px;
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background: #010606;

@media screen and (max-width: 760px){
    height: 1100px;
}
@media screen and (max-width: 480px){
    height: 1300px;
}
`
export const ServicesWrapper = styled.div`
width: 100%;
max-width: 1000px;
margin:0 auto;
display: flex;
flex-direction: row;
justify-content: space-around;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
flex-flow: wrap;


@media screen and (max-width: 1000px){


    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 760px){
grid-template-columns: 1fr 1fr;
padding: 0 20px;
}
`
export const ServicesCard = styled(LinkS)`
box-sizing: border-box;
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.3 ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;

}
`
export const ServicesIcon = styled.img`

height: 80px;
width: 80px;
margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom:60px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const ServicesH2 = styled.h2`
 font-size: 1rem;
 margin-bottom: 10px;

`
export const ServicesP = styled.p`
justify-items: center;
justify-items: center;
width: 80px;
height: 40px;
font-size: 10px;
text-align: center;
`