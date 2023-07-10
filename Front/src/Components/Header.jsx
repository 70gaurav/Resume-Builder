import React  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Typewriter from 'typewriter-effect';
import {toggleHandler , visibilityHandler} from "../Features/registerSlice"


function Header() {

  const dispatch = useDispatch()
  


  return (
    <header>
      <div className='logo'>
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
                .start();
            }}
          />
        </div>
      </div>
      <div className='header-list'>
        <ul>
          <li><a href="" className='popup' onClick={(e) => {e.preventDefault();dispatch(visibilityHandler(true)) ; dispatch(toggleHandler("register"))}}>Register</a></li>
          <li><a href="" className='popup' onClick={(e) => {e.preventDefault() ; dispatch(visibilityHandler(true)) ; dispatch(toggleHandler("signin"))}}>Sign In</a></li>
        
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>

     
    </header>
  );
}

export default Header;
