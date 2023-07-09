import React  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {toggleHandler , visibilityHandler} from "../Features/registerSlice"


function Header() {

  const dispatch = useDispatch()
  


  return (
    <header>
      <div className='logo'>
        <h1>RESU<span>MIFY</span></h1>
      </div>
      <div className='header-list'>
        <ul>
          <li><a href="" className='popup' onClick={(e) => {e.preventDefault();dispatch(visibilityHandler(true)) ; dispatch(toggleHandler("register"))}}>Register</a></li>
          <li><a href="" className='popup' onClick={(e) => {e.preventDefault() ; dispatch(visibilityHandler(true)) ; dispatch(toggleHandler("signin"))}}>Sign In</a></li>
          {/* <li ><a href="">About Us</a></li> */}
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>

      {/* {showForm && (
        <div className='form-container' onClick={handleCloseForm}>
          <div className='form' onClick={(e) => e.stopPropagation()}>
            <h2>{showForm ? 'Register' : 'Sign In'}</h2>
            
            <button onClick={handleToggleForm}>Close</button>
          </div>
        </div>
      )} */}
    </header>
  );
}

export default Header;
