import React from 'react';

function Login() {
  return (
    <div className='login-parent'>
      <div>

      </div>
      <div className='login'>
        <div className='dummy-main'>
          <div className='dummy'>

          </div>
        </div>

        <div className='form-main'>

          <div>

          </div>
          <form action="">
            <div>
              <div className="blank">
                <input type="email" required="required"/>
                  <span>E-MAIL</span>
              </div>
            </div>

            <div>
              <div className="blank">
                <input type="text" required="required"/>
                  <span>PASSWORD</span>
              </div>
            </div>

            <button type='submit'>Sign In</button>

          

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
