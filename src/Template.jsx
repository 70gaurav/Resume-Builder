import React from 'react'
import {  useSelector } from 'react-redux'

function Template() {

// const data = useSelector((state) => {
//   return state.details.name
// })
  return (
    <div className='template'>
        <div className="details">
            <div className='image'>
                <img src="" alt="" />
            </div>
            <div className='name'>
                <h1></h1>
                <h4>Role</h4>
                <h4>Experience</h4>
            </div>
        </div>

    </div>
  )
}

export default Template