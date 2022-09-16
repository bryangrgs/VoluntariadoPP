import styled from 'styled-components'
import {Link as LinkA} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`

background: ${({scrollNav}) => (scrollNav ? ' black' : 'black')};
height: 80px;
margin-top: -80px; 
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 10;
font-size: 1rem;

@media screen and (max-width: 960px){
    transition: 0.6 all ease;
}
    `;

export const NavbarContainer  = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1100px;
padding: 0 24px;

`;
export const NavLogo = styled(LinkA)`
color: #fff;
cursor: pointer;
font-size: 1.4rem;
justify-self: flex-start;
display: flex;
align-items: center;
margin-left: 24px;
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
margin-right: -22px;
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
text-decoration: none;
color: #fff;
padding: 0 1rem;
align-items: center;
height: 100%;
cursor: pointer;
 &.active{
    border-bottom: 3px solid  #01bf71;
 }

`;
/*Navar tamanio screen */
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-left: 20px;

@media screen and (max-width: 760px)  {
    display: none;
    
}
`
/*Boton Iniciar Sesion */
export const NavBtnLink = styled(LinkA)`
background-color: #01BF71;
white-space: nowrap;
border-radius: 50px;
padding: 10px 22px;
color: white;
font-size: 12px;
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