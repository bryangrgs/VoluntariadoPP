import React from 'react'
import { Button } from '../ButtonInfo2/ButtonElement';
import { Column2, ImgWrap, InfoContainer, InfoWrapper, 
    InfoRow, Column1, TextWrapper , TopLine, Heading, Subtitle, BtnWrap,Img} from './InfoElements';
import { useState } from 'react';
import { ArrowForward, ArrowRight } from '../SectionInfo/InfoElements'
export const Info = ({lightBg,id,imgStart,topLine1,
    lightText,headLine,darkText, description,buttonLabel,
    img,alt,primary,dark,dark2}) => {
        const [hover,setHover]= useState(true)

        const onHover =() =>{
          setHover(!hover)
        }
        
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>
                        {topLine1}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to='catalogo' onClick={onHover}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-90}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2={dark2 ? 1 : 0}>Comienza Ahora {hover ? <ArrowForward/> : <ArrowRight/>}
                            </Button>
                        </BtnWrap>
                </TextWrapper>
                
                </Column1>
                <Column2>
                
                <ImgWrap>
                <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    
    
    </>
  )
}
 export default Info;