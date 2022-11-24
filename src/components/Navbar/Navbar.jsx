import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.scss'

const Navbar = () => {
    const Categorias = ['Motos','Autos','Camionetas']
   
  return (
    /**
     * AGREGO ESTILOS DE BOOTSRAP A NAV
     */
        <nav className='navbar navbar-expand-lg'>
            <ul className='navbar__list'>
                {Categorias.map((categoria)=>{
                    return <li className='navbar__list__items'><a href='#' className='link'>{categoria}</a></li>
                })}
            </ul>
            <CartWidget/>
        </nav>
        
    
  )
}


export default Navbar