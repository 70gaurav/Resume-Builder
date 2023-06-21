import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { imageHandler } from '../slice/Resumeslice'




function Mydetails() {


const dispatch = useDispatch()
const data = (state) => {
  return state.details
}
  
 

  return (
    <div>
      <a href="">Cancel</a>
      <a href="">Save</a>
       <form action="">
        <div className='input'>
          <img src={image} alt="" />
          <input type="file" onChange={imageHandler} />
        </div>
      <div className='input'>
      <h3>Name</h3>
        <input type="text" placeholder='Enter Your Name'/>
      </div>
      <div className='input'>
      <h3>Role</h3>
        <input type="text" placeholder='Enter Your Job Role' /><br />
      </div>
       <div className='input'>
       <h3>Experience</h3>
        <input type="number" placeholder='Year' />
       </div>
      </form>
    </div>
  )
}

export default Mydetails