import React from 'react';
import { SideBarContainer, Icon, CloseIcon,SideBarWrapper,
    SideBarMenu, SideBarLink, SideBtnWrap,SideBarRoute } from './SidebarElements';

export const SideBar = ({isOpen,toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
     
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to='us'> Nosotros</SideBarLink>
                <SideBarLink to='Exps'> Explorar</SideBarLink>
                <SideBarLink to='Service'>Servicios</SideBarLink>
                <SideBarLink to='Iniciar Sesion'>Iniciar Sesion</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to='/sigin'>Sign In</SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
        </SideBarContainer>
  )
}
 export default SideBar