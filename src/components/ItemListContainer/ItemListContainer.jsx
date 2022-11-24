import React from 'react'
import './ItemListContainer.scss'
const ItemListContainer = ({ greeting }) => {
  return (
    <h1 className='text-primary'>Hola, {greeting}, Bienvenido </h1>
  )
}



export default ItemListContainer