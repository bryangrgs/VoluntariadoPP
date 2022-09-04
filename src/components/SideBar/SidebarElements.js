import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { Link as LinkS} from 'react-scroll';
import { Link as LinkA} from 'react-router-dom';
export const SideBarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: black;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) =>( isOpen ? '100%':'0')};
top:${({ isOpen })=> ( isOpen ?'0':'-100%')}; 

`;
export const CloseIcon = styled(FaTimes)`
color: #fff;
`;
export const Icon = styled.div`
top: 1.2rem;
right: 2.0rem;
 background:transparent;
 font-size: 1.5rem;
 position: absolute;
 cursor: pointer;
 outline: none;
`;

export const SideBarWrapper = styled.div`
color: white;
`;

export const SideBarLink = styled(LinkS)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: solid;
font-size: 2rem;
list-style: none;
transition: 0.2s ease-in-out;
color: greenyellow;
cursor: pointer;
&:hover{
    color: white;
    transition: 0.2s ease-in-out;
}
`;
export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;
export const SideBarMenu = styled.ul`
padding-top: 200px;
display: grid;
grid-template-columns: 2fr;
grid-template-rows: repeat(6,80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6,50px);
    
}
`;
export const SideBarRoute = styled(LinkA)`
border-radius: 60px;
background: dimgrey;
white-space: nowrap;
padding: 20px 64px;
color:greenyellow;
outline: none;
font-size: 22px;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: dashed;

&:hover{
    transition:  all 0.2s ease-in-out;
    background: #fff;
    color: white;

}
`
