import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import Catalog from './pages/catalog'
import About from './pages/about'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/beers-catalog' element={<Catalog></Catalog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
