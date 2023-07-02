import React from 'react'
import { icon, style } from '../assets/styles/home.style'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const Home = () => {
  return (
    <div className={style}>
      <h1>Bem-Vindo a Loja <br /> Bear Beer</h1>
      <a href="/beers-catalog">Acesse nosso catalogo de Cervejas <span className={icon}><ArrowOutwardIcon fontSize='medium'></ArrowOutwardIcon></span></a>
    </div>
  )
}

export default Home
