import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar'
import Home from './pages/home'
import Catalog from './pages/catalog'

function App() {

  return (
    <>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/beers-catalog' element={<Catalog></Catalog>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
