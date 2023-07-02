import React from 'react'
import { icon, style } from '../assets/styles/home.style'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={style}>
      <h1>Bem-Vindo a Loja <br /> Bear Beer</h1>
      <Link to="/beers-catalog">Acesse nosso catalogo de Cervejas <span className={icon}><ArrowOutwardIcon fontSize='medium'></ArrowOutwardIcon></span></Link>
    </div>
  )
}

export default Home
