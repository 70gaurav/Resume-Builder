import React from 'react'

function Mydetails() {
  return (
    <div>
      <a href="">Cancel</a>
      <a href="">Save</a>
       <form action="">
      <div>
      <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter Your Name'/>
      </div>
      <div>
      <label htmlFor="Role">Role</label>
        <input type="text" placeholder='Enter Your Job Role' /><br />
      </div>
       <div>
       <label htmlFor="experience">Experience</label>
        <input type="number" placeholder='Year' />
       </div>
      </form>
    </div>
  )
}

export default Mydetails