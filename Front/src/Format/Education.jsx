import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { fieldHandler, addFieldInput, removeFieldInput } from "../Features/educationSlice";

function Education() {
  const fields = useSelector((state) => state.education.fields);
  const dispatch = useDispatch();

  const handleFieldChange = (index, field, value) => {
    dispatch(fieldHandler({ index, field, value }));
  };

  const handleAddField = (e) => {
    e.preventDefault();
    dispatch(addFieldInput());
  };

  const handleRemoveField = (e, index) => {
    e.preventDefault();
    dispatch(removeFieldInput(index));
  };

  return (
    <div className="experience-parent">
      <form>
        {fields.map((field, index) => (
          <div className="experience" key={index}>
            <div className="input">
              <h3>Education-Level</h3>
              <input
                type="text"
                placeholder='Education-Level'
                value={field.level}
                onChange={(e) => handleFieldChange(index, 'level', e.target.value)}
              />
            </div>
            <div className="input">
              <h3>Board/University</h3>
              <input
                type="text"
                placeholder='organization'
                value={field.organization}
                onChange={(e) => handleFieldChange(index, 'organization', e.target.value)}
              />
            </div>
            <div className="input">
              <h3>Year Of Passing</h3>
              <input
                type="text"
                placeholder='Year Of Passing'
                value={field.yearOfPassing}
                onChange={(e) => handleFieldChange(index, 'yearOfPassing', e.target.value)}
              />
            </div>
           
            {index === fields.length - 1 ? (
              <a href="/" onClick={handleAddField}>
                <AddCircleOutlineIcon />
              </a>
            ) : (
              <a href="/" onClick={(e) => handleRemoveField(e, index)}>
                <RemoveCircleOutlineIcon />
              </a>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}

export default Education;