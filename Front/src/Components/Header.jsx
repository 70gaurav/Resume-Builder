import React from 'react'

function Header() {
  return (
    <header>
        <div className='logo'>
            <h1>RESU<span>MIFY</span></h1>
        </div>
        <div className='header-list'>
            <ul>
                <li><a href="" className='popup'>Register</a></li>
                <li><a href="" className='popup'>Sign In</a></li>
                {/* <li ><a href="">About Us</a></li> */}
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
    </header>


  )
}

export default Header