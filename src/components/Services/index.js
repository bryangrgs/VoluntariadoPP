import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, 
    ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../img/svg-1.png';
import Icon2 from '../../img/svg-2.png';
import Icon3 from '../../img/svg-3.png'
export const Services = () => {
  return (
    <>
    <ServicesContainer id='Service'>
        <ServicesH1>Top 5 libros del mes</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2> 1</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2> 2</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 3</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 4</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP> </ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}
export default Services;
