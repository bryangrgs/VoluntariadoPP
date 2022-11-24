import React from 'react'
import { Item } from './Item/item'
export const ItemList = ({info}) => {

    console.log(info)
  return (
    <div style={{display: 'flex'}}>
        {info?.map(prod => <Item key={prod.id} prod={prod} />)}
    </div>
  )
}
