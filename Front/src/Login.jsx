import React from 'react'

function Login() {
  return (
    <div className='login'>
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
          <input type="submit" />
        </div>
      </form>

    </div>
  )
}

export default Login

