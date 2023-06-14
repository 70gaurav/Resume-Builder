import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Start from './Start'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Start />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
