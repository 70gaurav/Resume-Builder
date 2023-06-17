import React from 'react'
import { Link } from 'react-router-dom'
import Format from './Format'


function Start() {
  return (
    <div className='start'>
        <div className='create-new' onClick={<Format />}>
          
        <p>Create New</p>
        </div>
        <p className='my-resume'>My Resumes</p>
        <div className='appear-here'>
            <p>Your resumes will appear here. <Link to={"/format"}>Create New</Link></p>
        </div>
    </div>
  )
}

export default Start