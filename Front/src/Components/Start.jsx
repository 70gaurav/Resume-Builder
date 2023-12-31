import React from 'react'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function Start() {
  return (
    <div className='start'>
     <div className='create'>
     <Link to={"/format"}>
        <div className='create-new' >

          <p>Create New</p>
          < AddCircleOutlineIcon className='plus' fontSize='large' />
        </div>
      </Link>
     </div>
      <p className='my-resume'>My Resumes</p>
      <div className='appear-here'>
        <p>Your resumes will appear here. <Link to={"/format"}>Create New</Link></p>
      </div>
    </div>
  )
}

export default Start