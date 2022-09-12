import React from 'react';
import { SideBarContainer, Icon, CloseIcon,SideBarWrapper,
    SideBarMenu, SideBarLink, SideBtnWrap,SideBarRoute } from './SidebarElements';

export const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon  onClick={toggle}>
            <CloseIcon/>
     
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='us' onClick={toggle}> Nosotros</SideBarLink>
                <SideBarLink to='Exps' onClick={toggle}> Explorar</SideBarLink>
                <SideBarLink to='Service' onClick={toggle}>Top libros</SideBarLink>
                <SideBarLink to='Signup'onClick={toggle}>Iniciar Sesion</SideBarLink>
            
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to='/signin' onClick={toggle}>Iniciar Sesion</SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
        </SideBarContainer>
  )
}
 export default SideBar