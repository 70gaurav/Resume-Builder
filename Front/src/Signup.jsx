import React from 'react'

function Signup() {
  return (
    <div className='signup'>
        <div><h1>RESUMIFY</h1></div>
        <form action="">
            <div>
                <h3>E-MAIL</h3>
                <input type="email" placeholder='ENTER YOUR E-MAIL'/>
            </div>
            <div>
                <h3>USERNAME</h3>
                <input type="text" placeholder='ENTER YOUR USERNAME'/>
            </div>
            <div>
                <h3>PASSWORD</h3>
                <input type="password" placeholder='ENTER YOUR PASSWORD'/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Signup