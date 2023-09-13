import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Search from './Youtube/components/Search'
import Watch from './Youtube/components/Watch'
import Home from './Youtube/components/Home'
import Error from './Youtube/components/Error'

function App() {
  return (
   <BrowserRouter>
 
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Search' element={<Search />} />
    <Route path='/Watch/:id' element={<Watch />} />
    <Route path='*'  element={<Error/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App