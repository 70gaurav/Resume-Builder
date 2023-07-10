import React from 'react'
import Typewriter from 'typewriter-effect';


function Signup() {
    return (
        <div className='signup'>
            <div className='form-main'>
            <div>
        {/* <div className="type">
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
        </div> */}
        </div>
                <form action="">
                <div>
                        <div class="blank">
                            <input type="text" required="required"/>
                            <span>USERNAME</span>
                        </div>
                    </div>

                    <div>
                        <div class="blank">
                            <input type="email" required="required"/>
                            <span>E-MAIL</span>
                        </div>
                    </div>

                    <div>
                        <div class="blank">
                            <input type="password" required="required"/>
                            <span>PASSWORD</span>
                        </div>
                    </div>

                    <button type='submit'>Register</button>

                </form>
            </div>

        </div>
     

  )
}

export default Signup