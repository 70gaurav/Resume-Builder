
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Start from './Start'
import Format from './Format'
import Store from "./App/Store"
import Login from './Login'
import Signup from './Signup'


function App() {
  

  return (
   <BrowserRouter>
   <Provider store={Store}>
   <Routes>
    <Route path='/' element={<Login />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/create' element={<Start />}></Route>
    <Route path='/format' element={<Format />}></Route>
   </Routes>
   </Provider>
   </BrowserRouter>
  )
}

export default App
