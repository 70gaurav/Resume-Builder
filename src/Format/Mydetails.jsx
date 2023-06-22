import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { imageHandler } from '../slice/detaisSlice'




function Mydetails() {


  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.details
  })
  console.log(data)


  // function handleChange(e) {
  //   console.log(e.target.files);
  //   dispatch(imageHandler(URL.createObjectURL(e.target.files[0])));
  // }

  return (
    <div>
      <a href="">Cancel</a>
      <a href="">Save</a>
      <form action="">
        <div className='input'>
          {/* <img src={data.image} alt="" /> */}
          <input type="file"  />
        </div>
        <div className='input'>
          <h3>Name</h3>
          <input type="text" placeholder='Enter Your Name' />
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