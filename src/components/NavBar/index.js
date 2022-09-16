import React, { useEffect, useState } from "react";
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
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {Cart} from '../ShoppingCart/Cart/index'
const NavBar = ({toggle, isOpen}) =>{
    const [scrollNav , setScrollNav]=useState (false)
    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav);
    },[]);

    const toggleHome = ()=>{
        scroll.scrollToTop();
    };
     return(
        <>
        <IconContext.Provider value={{color: '#01BF71'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='#' onClick={toggleHome} >
                    Logo**
                </NavLogo>
                <MobileIconBar onClick={toggle}>
                    <FaBars />
                </MobileIconBar>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='us'
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Nosotros</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Exps' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Explorar</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='Service' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Top 10 libros del mes</NavLinks>

                    </NavItem>
                    <NavItem>
                        <NavLinks to='Signup' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Crear cuenta nueva</NavLinks>
                    </NavItem>
                    <NavItem>
                       <Cart></Cart>
                       
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to= '/signin' onClick={toggle}>Inicia  Sesion</NavBtnLink>
                </NavBtn>
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
   
     );
};
export default NavBar;