import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLink,FooterLinksContainer, 
    FooterLinksWrapper,FooterLinksTitle , FooterLinksItems, 
    SocialMedia, SocialMediaWrap, SocialLogo , WebSiteRights, SocialIcons, SocialIconLink } from './FotterElements'
  
export const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    };
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Sobre Nosotros</FooterLinksTitle>
                            <FooterLink to='/signin'> Como trabajamos </FooterLink>
                            <FooterLink to='/signin'> Comentarios </FooterLink>
                            <FooterLink to='/signin'> Inversores </FooterLink>
                            <FooterLink to='/signin'> Terminos y Servicios </FooterLink>
                        
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Algo</FooterLinksTitle>
                            <FooterLink to='/signin'> Como trabajamos </FooterLink>
                            <FooterLink to='/signin'> Comentarios </FooterLink>
                            <FooterLink to='/signin'> Inversores </FooterLink>
                            <FooterLink to='/signin'> Terminos y Servicios </FooterLink>
                        
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contactanos</FooterLinksTitle>
                            <FooterLink to='/signin'> Envianos un mensaje </FooterLink>
                            <FooterLink to='/signin'> Ayuda </FooterLink>
                            <FooterLink to='/signin'> Locales </FooterLink>
                            <FooterLink to='/signin'> Sponsor  </FooterLink>
                        
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Redes Sociales</FooterLinksTitle>
                            <FooterLink to='/signin'> Instagran </FooterLink>
                            <FooterLink to='/signin'> Facebook </FooterLink>
                            <FooterLink to='/signin'> Youtube </FooterLink>
                            <FooterLink to='/signin'> Twitter  </FooterLink>
                        
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>algo</SocialLogo>
                    <WebSiteRights>bryan Pratica Profesionalizante TECLAB{new Date().getFullYear()} Todos los derechos reservados.</WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram></FaInstagram>
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook></FaFacebook>
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube></FaYoutube>
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin></FaLinkedin>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}