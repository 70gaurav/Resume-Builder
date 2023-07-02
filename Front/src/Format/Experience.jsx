import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Experience() {
  return (
    <div className='experience-parent'>
      <form action="">
        <div className='experience'>
          <div className='input'>
            <h3>Role</h3>
            <input type="text" />
          </div>
          <div className='input'>
            <h3>Company/Organization</h3>
            <input type="text" />
          </div>
          <a href=""><AddCircleOutlineIcon/></a>
          <div>

          </div>
        </div>
      </form>

    </div>
  )
}

export default Experience