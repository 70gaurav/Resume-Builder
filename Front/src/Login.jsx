import React from 'react'
import dummy from "./slice/images/1.png"

function Login() {
  return (
    <div className='login'>
      <div className='dummy-main'>
      <div className='dummy'>
        <img src={dummy} alt="" />

      </div>
      </div>
      
      <div className='form-main'>
      <div><h1>RESU<span>MIFY</span></h1></div>
      <form action="">
        <div className=''>
          <h3>USERNAME</h3>
          <input type="text" placeholder='Enter Your Username' />
        </div>
        <div className=''>
          <h3>PASSWORD</h3>
        <input type="password" placeholder="Enter Your Password" />

        </div>
        <div>
          <button type='submit'>Log In</button>
        </div>
      </form>
      </div>

    </div>
  )
}

export default Login

