import React, { useState } from 'react'
import Card from '../components/card'
import { catalogContainer } from '../assets/styles/catalog.style.js'


const Catalog = () => {
  

  return (
    <div className={catalogContainer}>
      <h1>Catálogo de Cervejas</h1>
      <div>
        <Card></Card>
      </div>
    </div>
  )
}

export default Catalog
