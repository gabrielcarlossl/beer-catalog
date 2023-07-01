import React from 'react'
import '../assets/styles/home.styles.css'

const Home = () => {
  return (
    <div className='container'>
      <h1>Bem-Vindo a Loja Bear Beer</h1>
      <a href="/beers-catalog">Acesse nosso catalogo de Cervejas <span className='icon'>&#8599;</span></a>
    </div>
  )
}

export default Home
