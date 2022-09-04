import React,{useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonInfo/ButtonElement'
import { InfoContainer,InfoBg,VideoInfoBg, 
  InfoContent,InfoH1,InfoP,InfoBtnWrapper,ArrowForward,ArrowRight } from './InfoElements';

const SectionInfo = () => {
  const [hover,setHover]= useState(false)

  const onHover =() =>{
    setHover(!hover)
  }
  return (
    <InfoContainer>
        <InfoBg>
            <VideoInfoBg autoPlay loop muted src={Video} type='video/mp4'/>


        </InfoBg>
        <InfoContent>
          <InfoH1>Comprar en nuestra web lo hace mas facil</InfoH1>
          <InfoP>Comienza creando una nueva cuenta y recibe 500$ en tu proxima compra.</InfoP>
          <InfoBtnWrapper>
            <Button to='Signup' onMouserEnter={onHover} 
            onMouseLeave={onHover} primary='true' dark='true'>  
            Comienza Ahora {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </InfoBtnWrapper>
        </InfoContent>

    </InfoContainer>
  );
};
export default SectionInfo;
