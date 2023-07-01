import React, { useState } from 'react'
import '../assets/styles/catalog.styles.css'
import Card from '../components/card'


const Catalog = () => {
  

  return (
    <div className='catalogContainer'>
      <h1>Catálogo de Cervejas</h1>
      <div>
        <Card></Card>
      </div>
    </div>
  )
}

export default Catalog
