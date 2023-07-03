import React from 'react'
import { icon, style } from '../assets/styles/home.style'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Link } from 'react-router-dom'
import bear from '../assets/images/bear-table.jpg'

const Home = () => {
  return (
    <div className={style}>
      <h1>Welcome to <br /> Bear Beer Store</h1>
      <Link to="/beers-catalog">Access our beer catalog <span className={icon}><ArrowOutwardIcon fontSize='medium'></ArrowOutwardIcon></span></Link>
      <img className='bear' src={bear} alt="Bear sitting on the table" />
    </div>
  )
}

export default Home
