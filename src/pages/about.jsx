import React from 'react'
import '../assets/styles/about.styles.css'

const About = () => {
  return (
    <div className='aboutContainer'>
      <h1>Sobre</h1>
        <h2>Desenvolvedor:</h2>
        <p>Gabriel Carlos da Silva Leite</p>
        <ul>
            <li> Linkedin: <a target='_blank' href="https://www.linkedin.com/in/gabrielcarlossleite/">Gabriel Carlos</a></li>
            <li> GitHub: <a target='_blank' href="https://github.com/gabrielcarlossl/beer-catalog"> Beer-catalog</a></li>
            </ul>
        <h2>Tecnologias Utilizadas:</h2>
        <ul>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Redux Saga</li>
            <li>Axios</li>
            <li>React Router Dom</li>
            <li>API - <a target='_blank' href="https://punkapi.com/documentation/v2">Punk API</a></li>
        </ul>
    </div>
  )
}

export default About
