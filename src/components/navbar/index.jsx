import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/BearBeer.png'
import '../../assets/styles/navbar.styles.css'

const NavBar = () => {
  return (

    <nav>
      <div className='nav-container'>
        <div>
          <Link to='/'>
            <img className='logo' src={logo} width={50} alt="student" />
          </Link>
        </div>
        <div className='linkContainer'>
          <Link to='/'>Home Page</Link>
          <Link to='/beers-catalog'>Beer Catalog</Link>
        </div>
      </div>
      <hr />
    </nav>
  )
}

export default NavBar
