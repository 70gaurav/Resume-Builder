import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { imageHandler, nameHandler, roleHandler, experienceHandler, addRoleInput, removeRoleInput } from '../Features/detaisSlice';

function Mydetails() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.details;
  });

  // const handleAddRoleInput = () => {
  //   dispatch(addRoleInput());
  // };

  // const handleRemoveRoleInput = (index) => {
  //   dispatch(removeRoleInput(index));
  // };

  // const handleRoleInputChange = (index, e) => {
  //   const { value } = e.target
  //   dispatch(roleHandler({ index, value }));
  // };

  return (
    <div className='details-parent'>
      <div className="anchors">
        <a href="">Cancel</a>
        <a href="">Save</a>
      </div>
      <form action="">
        <div className="input" id='image-input'>
          <img src={data.image} alt="" />
          <input type="file" onChange={(e) => { dispatch(imageHandler(URL.createObjectURL(e.target.files[0]))); }} />
        </div>
        <div className="input">
          <h3>Name</h3>
          <input type="text" placeholder="Enter Your Name" onChange={(e) => { dispatch(nameHandler(e.target.value)); }} />
        </div>
        <div id="role" className="input">
          <h3>Role</h3>
          {/* {data.roles.map((role, index) => (
            
              <div className="role-input-container">
                <input
                  className="role"
                  type="text"
                  placeholder="Enter Your Job Role"
                  value={role}
                  onChange={(e) => { handleRoleInputChange(index, e); }}
                />
                {index > 0 && (
                  <a href="#" className="remove" onClick={() => { handleRemoveRoleInput(index); }}>
                    <RemoveCircleOutlineIcon />
                  </a>
                )}
              
            </div>
          ))}
          <a href="#" onClick={handleAddRoleInput}>
            <AddCircleOutlineIcon />
          </a> */}
           <input type="text" placeholder="Enter Your Job Role" onChange={(e) => { dispatch(roleHandlerHandler(e.target.value)); }} />
        </div>
        <div className="input">
          <h3>Experience</h3>
          <input type="text" placeholder="Year" onChange={(e) => {dispatch(experienceHandler(e.target.value));}}/>
        </div>
      </form>
    </div>
  );
}

export default Mydetails;
