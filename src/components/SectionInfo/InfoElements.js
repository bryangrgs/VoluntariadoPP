import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export  const InfoContainer=styled.div`
background: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0% , transparent 100%);
    z-index: 2;
}
`;
export const InfoBg = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
right: 0;
left: 0;
bottom: 0;
overflow: hidden;
`;

export const VideoInfoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: aqua;
`
export const InfoContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

`;

export const InfoH1 = styled.h1`
color: white;
font-size:  50px;
text-align: center;

@media screen and (max-width: 760px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const InfoP = styled.p`
margin-top: 24px;
color: white;
font-size:  24px;
text-align: center;
max-width: 600px;
@media screen and (max-width: 760px){
    font-size: 30px;
}
@media screen and (max-width: 480px){
    font-size: 18px;
}
`

export const InfoBtnWrapper = styled.div`
margin-top:  32px;
display: flex;
flex-direction: column;
align-items: center;
`
export const  ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`