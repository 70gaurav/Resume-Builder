import React from 'react'
import { Link } from 'react-router-dom'


function Start() {
  return (
    <div className='start'>
        <div className='create-new' onClick={() => {console.log("hello")}}>
        <p>Create New</p>
        </div>
        <p className='my-resume'>My Resumes</p>
        <div className='appear-here'>
            <p>Your resumes will appear here. <Link>Create New</Link></p>
        </div>
    </div>
  )
}

export default Start