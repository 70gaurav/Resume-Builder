import React from 'react'
import Login from "./Login"
import Signup from "./Signup"
import "./register.css"
import { switchHandler } from '../Features/registerSlice'
import { useSelector, useDispatch } from 'react-redux'
import Typewriter from 'typewriter-effect';
import Header from '../Components/Header'



function Registeration() {

  const data = useSelector((state) => {
    return state.register.switch
  })

  console.log(data)

  const dispatch = useDispatch()

  return (
    <div className='register'>
      <Header />
      <div className='main-parent'>
        <div className='main-left'>
          <h1>Ready to take your career to new heights? Try RESUMIFY for free today and experience the convenience of creating a powerful resume in just minutes. Start crafting your professional story and open doors to exciting opportunities.</h1>
        </div>
        <div className='main-right'>
        <div className="type">
        <Typewriter
          options={{
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<h1>RESU<span>MIFY</span></h1>")
              .pauseFor(1000)
              .deleteAll()
              .typeString("<h1>CREATE YOUR <br/><span>RESUME</span> NOW <span>!</span></h1>")
              .start();
          }}
        />
      </div>
        </div>

      </div>
      
      {/* <div className='form-selector'>
            <a href="" onClick={(e) => {e.preventDefault() ; dispatch(switchHandler("register"))}}>Register</a>
            <a href="" onClick={(e) => {e.preventDefault() ; dispatch(switchHandler("signin"))}}>Sign In</a>
        </div> */}
      
    </div>
  )
}

export default Registeration