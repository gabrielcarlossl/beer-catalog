import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/BearBeer.png'

const NavBar = () => {
  return (

    <nav>
      <div>
        <div>
          <Link to='/'>
            <img className='logo' src={logo} width={50} alt="student" />
          </Link>
        </div>
        <div>
          <Link to='/'>Home Page</Link>
          <Link to='/beers-catalog'>Beer Catalog</Link>
        </div>
      </div>
      <hr />
    </nav>
  )
}

export default NavBar
