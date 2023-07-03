import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/BearBeer.png'
import { Hr, container, linkContainer, logoStyle } from '../../assets/styles/navbar.style'


const NavBar = () => {
  return (

    <nav>
      <div className={container}>
        <div className='logo'>
          <Link to='/'>
            <img className={logoStyle} src={logo} width={90} alt="student" />
            <p>Bear Beer</p>
          </Link>
        </div>
        <div className={linkContainer}>
          <Link to='/'>Home Page</Link>
          <Link to='/beers-catalog'>Beer Catalog</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
      <Hr />
    </nav>
  )
}

export default NavBar
