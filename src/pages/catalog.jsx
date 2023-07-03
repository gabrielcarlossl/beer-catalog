import React, { useState } from 'react'
import Card from '../components/card'
import { catalogContainer } from '../assets/styles/catalog.style.js'
import SportsBarRoundedIcon from '@mui/icons-material/SportsBarRounded';

const Catalog = () => {
  

  return (
    <div className={catalogContainer}>
      <h1>Catalog<SportsBarRoundedIcon fontSize='large'></SportsBarRoundedIcon></h1>
      <div>
        <Card></Card>
      </div>
    </div>
  )
}

export default Catalog
