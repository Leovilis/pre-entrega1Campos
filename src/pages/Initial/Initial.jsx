import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Initial = () => {
  return (
    <div>
        <Navbar />
        <ItemListContainer greeting='Leo'/>
    </div>
  )
}

export default Initial