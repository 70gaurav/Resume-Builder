import React from 'react';
import { useDispatch } from 'react-redux';
import Typewriter from 'typewriter-effect';
import { toggleHandler, visibilityHandler } from '../Features/registerSlice';
import { Link } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    dispatch(visibilityHandler(true));
    dispatch(toggleHandler('register'));
  };

  const handleSignInClick = (e) => {
    e.preventDefault();
    dispatch(visibilityHandler(true));
    dispatch(toggleHandler('signin'));
  };

  return (
    <header>
      <div className='logo'>
        <div className='type'>
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("<h1>RESU<span>MIFY</span></h1>")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </div>
      </div>
      <div className='header-list'>
        <ul>
          <li>
            <a href='' className='popup' onClick={handleRegisterClick}>
              Register
            </a>
          </li>
          <li>
            <a href='' className='popup' onClick={handleSignInClick}>
              Sign In
            </a>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
