import React from 'react'
import dummy from "./slice/images/1.png"


function Signup() {
    return (
        <div className='signup'>

            <div className='dummy-main'>
                <div className='dummy'>
                    <img src={dummy} alt="" />

                </div>
            </div>

            <div className='form-main'>
                <div><h1>RESU<span>MIFY</span></h1></div>
                <form action="">
                    <div>
                        <h3>E-MAIL</h3>
                        <input type="email" placeholder='ENTER YOUR E-MAIL' />
                    </div>
                    <div>
                        <h3>USERNAME</h3>
                        <input type="text" placeholder='ENTER YOUR USERNAME' />
                    </div>
                    <div>
                        <h3>PASSWORD</h3>
                        <input type="password" placeholder='ENTER YOUR PASSWORD' />
                    </div>
                    <div>
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
            </div>

        </div>
     

  )
}

export default Signup