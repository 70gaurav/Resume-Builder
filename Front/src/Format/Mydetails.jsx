import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageHandler, nameHandler , roleHandler ,experienceHandler } from '../slice/detaisSlice'




function Mydetails() {


  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.details
  })
  console.log(data)

  return (
    <div>
     <div className='anchors'>
     <a href="">Cancel</a>
      <a href="">Save</a>
     </div>
      <form action="">
        <div className='input'>
          <img src={data.image} alt="" />
          <input type="file"  onChange={(e) => {dispatch(imageHandler((URL.createObjectURL(e.target.files[0]))))}}/>
        </div>
        <div className='input'>
          <h3>Name</h3>
          <input type="text"  placeholder='Enter Your Name' onChange={(e)=> {dispatch(nameHandler(e.target.value))}} />
        </div>
        <div className='input'>
          <h3>Role</h3>
          <input type="text" placeholder='Enter Your Job Role'  onChange={(e) => {dispatch(roleHandler(e.target.value))}}/><br />
        </div>
        <div className='input'>
          <h3>Experience</h3>
          <input type="text" placeholder='Year' onChange={(e) => {dispatch(experienceHandler(e.target.value))}}/>
        </div>
      </form>
    </div>
  )
}

export default Mydetails