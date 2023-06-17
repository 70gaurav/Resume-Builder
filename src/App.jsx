import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Start from './Start'
import Format from './Format'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Start />}></Route>
    <Route path='/format' element={<Format />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
