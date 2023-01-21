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
    NavBtnLink,
    NavBtn2,
    NavLinks2
} from './NavbarElements';
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Cart } from "../ShoppingCart/Cart";
import {useAuth} from '../Sigin/context/authContext';

const NavBar = ({toggle}) =>{

const {user,logout}= useAuth();

const handleLogout=async()=>{
    await logout();
    
  };












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
                <NavLogo to='/' onClick={toggleHome} >
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
                    {/* <NavItem>
                        <NavLinks to='Signup' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Crear cuenta nueva</NavLinks>
                    </NavItem> */}
                    <NavItem>
                    <NavLinks to='catalogo' 
                        smooth= {true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Catalogo</NavLinks>
                    </NavItem>
                    <NavItem>
                    <Cart></Cart>
                    </NavItem>
                </NavMenu>
               
                { user &&
                <NavLinks2>{user.email}</NavLinks2>
                }
                 <NavBtn>
                    {!user &&
                        <NavBtnLink to= '/login' onClick={toggle}>Inicia  Sesion</NavBtnLink>
                    }
                    
                    
                    { user &&

                     <NavBtn2 onClick={handleLogout}>Cerrar sesion</NavBtn2>

                    }
                </NavBtn>
            </NavbarContainer>
        </Nav>
        
        </IconContext.Provider>
       
     
        </>
   
     );
};
export default NavBar;