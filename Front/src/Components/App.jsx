
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Start from './Start'
import Format from './Format'
import Store from "../App/Store"
import Registeration from '../Login-Signup/Registeration'
import ContactForm from '../Login-Signup/contactForm'


function App() {
  

  return (
   <BrowserRouter>
   <Provider store={Store}>
   <Routes>
    <Route path='/' element={<Registeration />}></Route>
    <Route path='/create' element={<Start />}></Route>
    <Route path='/format' element={<Format />}></Route>
    <Route path='/contact' element={<ContactForm />}></Route>
   </Routes>
   </Provider>
   </BrowserRouter>
  )
}

export default App
