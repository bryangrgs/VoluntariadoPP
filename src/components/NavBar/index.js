import React from "react";
import {FaBars} from 'react-icons/fa'
import { Nav, 
    NavLogo, 
    NavbarContainer, 
    MobileIconBar,
    NavMenu,
    NavLinks,
    NavItem,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import CartWidget from "../ShoppingCart/ShoppingCart";

const NavBar = ({toggle}) =>{
     return(
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' >
                    Logo**
                </NavLogo>
                <MobileIconBar onClick={toggle}>
                    <FaBars />
                </MobileIconBar>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='us'>Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Exp'>Explorar</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Service'>Nuestros Servicios</NavLinks>

                    </NavItem>
                    <NavItem>
                        <NavLinks to='Sigup'>Crear cuenta nueva</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='ShoppingCart'><CartWidget></CartWidget>
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to= '/signin'>Inicia Sesion</NavBtnLink>
                </NavBtn>
                
            </NavbarContainer>
        </Nav>
        
        </>
   
     );
};
export default NavBar;