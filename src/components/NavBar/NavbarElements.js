import styled from 'styled-components'
import {Link as LinkA} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: #000;
height: 80px;
margin-top: -80px; 
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 10;
font-size: 1rem;

@media screen and (max-width: 900px){
    transition: 0.6 all ease;
}
    `;

export const NavbarContainer  = styled.div`
display: flex;
justify-content: space-between;
height: 60px;
z-index: 1;
width: 100%;
max-width: 1200px;
padding: 0 20px;

`;
export const NavLogo = styled(LinkA)`
color: cadetblue;
cursor: pointer;
font-size: 1.4rem;
justify-self: flex-start;
display: flex;
align-items: center;
margin-left: 20px;
font-weight: bold;
text-decoration: solid;
`;
export const MobileIconBar = styled.div`
display: none;
@media screen  and (max-width: 760px){
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%,60%);
    display: block;
    font-size: 2.0rem;
    cursor: pointer;
    color: white;
    
}
`;
export const NavMenu = styled.ul`
display: flex;
list-style: none;
text-align: center;
margin-right: -20px;
align-items: center;
@media screen and (max-width: 760px) {
    display: none;
    
}
`;

export const NavItem = styled.li`
height: 80px;
`;
/* NavBar links */
export const NavLinks = styled(LinkS)`
display: flex;
text-decoration: solid;
color: aliceblue;
padding: 0 2rem;
align-items: center;
height: 100%;
cursor: pointer;
 &.active{
    border-bottom: 4x solid  yellowgreen;
 }

`;
/*Navar tamanio screen */
export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 760px)  {
    display: none;
    
}
`
/*Boton Iniciar Sesion */
export const NavBtnLink = styled(LinkA)`
background-color: dimgrey;
white-space: nowrap;
border-radius: 50px;
padding: 15px 20px;
color: white;
font-size: 16px;
outline: none;
border: none;
transition: all 0.3s ease-in-out;
cursor: pointer;
text-decoration: solid;

&:hover{
    transition: all 0.2 ease-in-out ;
    background: white;
    color: black;
}
`