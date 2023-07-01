import React from 'react'
import { icon, style } from '../assets/styles/home.style'

const Home = () => {
  return (
    <div className={style}>
      <h1>Bem-Vindo a Loja Bear Beer</h1>
      <a href="/beers-catalog">Acesse nosso catalogo de Cervejas <span className={icon}>&#8599;</span></a>
    </div>
  )
}

export default Home
