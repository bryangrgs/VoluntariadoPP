import React from 'react'
import { Card, CardImg, CardBody,CardTitle, CardText,ButtonP, 
CardContainer, CardH1,CardWrapper} from './ItemElements'
import { FcLike } from 'react-icons/fc'

export const Item = ({prod}) => {
  const {id, nombre, precio, imagen}= prod
  return (
    <CardContainer>
      <CardH1></CardH1>
    <CardWrapper>
      <Card>
        <CardImg variant="top" src={imagen} />
      <CardBody>
        <CardTitle>{nombre}</CardTitle>
        <CardText>
          precio: {precio}
        </CardText>
        <ButtonP variant="primary"> Ver detalle</ButtonP><FcLike></FcLike>
        
      </CardBody>
      </Card>
      
    </CardWrapper>
    </CardContainer>
  );
}
