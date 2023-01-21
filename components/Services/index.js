import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, 
    ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

export const Services = () => {
  return (
    <>
    <ServicesContainer id='Service'>
        <ServicesH1>Top 10 libros del mes</ServicesH1>
        <ServicesWrapper>
            <ServicesCard to='15QeQ4XEsMfcml5zVkzc'>
                <ServicesIcon  src={'//contentv2.tap-commerce.com/cover/large/9788426728081_1.jpg?id_com=1113'}/>
                <ServicesH2> 1</ServicesH2>
                <ServicesP>EJERCICIOS PRACTICOS CON REACT</ServicesP>
            </ServicesCard>

            <ServicesCard  to='5odo5fo8Uc4SqIYc4yHs'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9789506442279_1.jpg?id_com=1113'}/>
                <ServicesH2> 2</ServicesH2>
                <ServicesP> JUEGO DE TRONOS CANCION DE HIELO Y FUEGO</ServicesP>
            </ServicesCard>

            <ServicesCard to='Q6yTvzhKZqUzUhCzE7xn'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9789874867117_1.jpg?id_com=1113'}/>
                <ServicesH2> 3</ServicesH2>
                <ServicesP>LA CHICA QUE NO QUERIA SER PRINCESA</ServicesP>
            </ServicesCard>

            <ServicesCard to='SUA6FmPwyQvVPegnY9ZX'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9789504978060_1.jpg?id_com=1113'}/>
                <ServicesH2> 4</ServicesH2>
                <ServicesP>TU Y YO , INVENCIBLES</ServicesP>
            </ServicesCard>
            <ServicesCard to='SxmxubZn1cbsYPMBiGER'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9789874132895_1.jpg?id_com=1113'}/>
                <ServicesH2> 5</ServicesH2>
                <ServicesP>UNAS SOMBRA EN LAS BRASAS </ServicesP>
            </ServicesCard>
            <ServicesCard to='UzAdCB2ICRzHZeeHZUB1'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9789504972976_1.jpg?id_com=1113'}/>
                <ServicesH2> 6</ServicesH2>
                <ServicesP>PAN DE CAMPO.</ServicesP>
            </ServicesCard>
            <ServicesCard to='ZQzYvxCHrSLJKQAAZagi'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9789870816867_1.jpg?id_com=1113'}/>
                <ServicesH2> 7</ServicesH2>
                <ServicesP>CRIPTOMONEDAS </ServicesP>
            </ServicesCard>
            <ServicesCard to='u9IW68bsmcgRW9FkcSTB'>
                <ServicesIcon src={'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/31090046/harry-potter-tapa-SF.jpg'}/>
                <ServicesH2> 8</ServicesH2>
                <ServicesP>HARRY POTTER Y EL LEGADO MALDITO</ServicesP>
            </ServicesCard>
            <ServicesCard to='yy6wShzStJpPEF9QNbSk'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9788418963865_1.jpg?id_com=1113'}/>
                <ServicesH2> 9</ServicesH2>
                <ServicesP>JOJOS BIZARRE ADVENTURE PARTE 4</ServicesP>
            </ServicesCard>
            <ServicesCard to='zYq76mP81yok8Dz4oYsr'>
                <ServicesIcon src={'https://contentv2.tap-commerce.com/cover/large/9789877249965_1.jpg?id_com=1113'}/>
                <ServicesH2> 10</ServicesH2>
                <ServicesP>1. VINLAND SAGA.</ServicesP>
            </ServicesCard>
            
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}
export default Services;
