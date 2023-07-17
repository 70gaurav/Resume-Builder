import React from 'react';
import { emailHandler, passwordHandler } from '../Features/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { email, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    axios
      .post('http://localhost:3000/auth/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        axios
          .get('http://localhost:3000/user', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            params: {
              email: email,
            },
          })
          .then((response) => {
            alert('Login successful');
            navigate('/create');
            localStorage.setItem('name', response.data.name);
          })
          .catch((error) => {
            console.error(error);
            
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="login-parent">
      <div></div>
      <div className="login">
        <div className="dummy-main">
          <div className="dummy"></div>
        </div>

        <div className="form-main">
          <div></div>
          <form onSubmit={submitHandler}>
            <div>
              <div className="blank">
                <input type="email" value={email} required="required" onChange={(e) => dispatch(emailHandler(e.target.value))} />
                <span>E-MAIL</span>
              </div>
            </div>

            <div>
              <div className="blank">
                <input type="password" value={password} required="required" onChange={(e) => dispatch(passwordHandler(e.target.value))} />
                <span>PASSWORD</span>
              </div>
            </div>

            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
