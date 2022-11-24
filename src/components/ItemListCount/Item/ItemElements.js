import styled from "styled-components";


export const CardContainer= styled.div`
width: 100%;
height: 100%;
min-height: 600px;
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
export const CardWrapper= styled.div`
width: 100%;
max-width: 1000px;
margin:0 auto;
display: flex;
flex-direction: row;
justify-content: space-around;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 10px;
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
export  const Card= styled.div`
box-sizing: border-box;
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 800px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.3 ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;

}
`

export const CardImg= styled.img`
height: 250px;
width: 250px;
margin-bottom: 10px;
`

export const CardBody= styled.div`
padding: 1px 1px 1px 1px;
display: flex;
align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const CardTitle= styled.h1`
padding: 20px 0px 20px 0px;
font-size: 1rem;
 margin-bottom: 10px;`

export const CardText= styled.text`
padding: 20px 0px 20px 0px;
font-size: 1rem;
text-align: center;`

export const ButtonP= styled.button`
margin-top: 2px;
align-items: center
`

export const CardH1= styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom:60px;

@media screen and (max-width: 480px){
    font-size: 2rem;
}`