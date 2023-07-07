import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { fieldHandler, addFieldInput, removeFieldInput } from "../Features/experienceSlice";

function Experience() {
  const fields = useSelector((state) => state.experience.fields);
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
              <h3>Role</h3>
              <input
                type="text"
                value={field.role}
                onChange={(e) => handleFieldChange(index, 'role', e.target.value)}
              />
            </div>
            <div className="input">
              <h3>Company/Organization</h3>
              <input
                type="text"
                value={field.company}
                onChange={(e) => handleFieldChange(index, 'company', e.target.value)}
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

export default Experience;
