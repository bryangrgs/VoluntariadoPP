import React from "react";
import {FaBars} from 'react-icons/fa'
import { NavLink } from "react-router-dom";
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

const NavBar = () =>{
     return(
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' >
                    Logo**
                </NavLogo>
                <MobileIconBar>
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
                        <NavLinks to='Sigup'>Inicia Sesion</NavLinks>
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