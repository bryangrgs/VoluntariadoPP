import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
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
                            <FooterLink to='/#'> Como trabajamos </FooterLink>
                            <FooterLink to='/#'> Comentarios </FooterLink>
                            <FooterLink to='/#'> Inversores </FooterLink>
                            <FooterLink to='/#'> Terminos y Servicios </FooterLink>
                        
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Cuenta</FooterLinksTitle>
                            <FooterLink to='/#'> Mi Lista </FooterLink>
                            <FooterLink to='/#'> Historial </FooterLink>
                            <FooterLink to='/#'> Mi cuenta </FooterLink>
                            <FooterLink to='/#'> Desconectar </FooterLink>
                        
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Contactanos</FooterLinksTitle>
                            <FooterLink to='/#'> Envianos un mensaje </FooterLink>
                            <FooterLink to='/#'> Ayuda </FooterLink>
                            <FooterLink to='/#'> Locales </FooterLink>
                            <FooterLink to='/#'> Sponsor  </FooterLink>
                        
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Redes Sociales</FooterLinksTitle>
                            <FooterLink to='/#'> Instagran </FooterLink>
                            <FooterLink to='/#'> Facebook </FooterLink>
                            <FooterLink to='/#'> Youtube </FooterLink>
                            <FooterLink to='/#'> Twitter  </FooterLink>
                        
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>algo</SocialLogo>
                    <WebSiteRights>Pratica Profesionalizante TECLAB {new Date().getFullYear()} Todos los derechos reservados.</WebSiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.instagram.com/l3ryan_georges" target="_blank" aria-label="Instagram">
                            <FaInstagram></FaInstagram>
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/bryan.georges" target="_blank" aria-label="Facebook">
                            <FaFacebook></FaFacebook>
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="https://www.youtube.com/watch?v=mCdA4bJAGGk" target="_blank" aria-label="Youtube">
                            <FaYoutube></FaYoutube>
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/bryan-georges-411989238/?originalSubdomain=ar" target="_blank" aria-label="Linkedin">
                            <FaLinkedin></FaLinkedin>
                        </SocialIconLink>
                    </SocialIcons>
                    <SocialIcons>
                        <SocialIconLink href="https://github.com/bryangrgs" target="_blank" aria-label="FaGithub">
                            <FaGithub></FaGithub>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}