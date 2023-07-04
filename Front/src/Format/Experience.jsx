import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function Experience() {
  const [fields, setFields] = useState([{ role: '', company: '' }]);

  const handleAddField = () => {
    setFields([...fields, { role: '', company: '' }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...fields];
    updatedFields[index][field] = value;
    setFields(updatedFields);
  };

  return (
    <div className="experience-parent">
      <form action="">
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
              <a href="#" onClick={handleAddField}>
                <AddCircleOutlineIcon />
              </a>
            ) : (
              <a href="#" onClick={() => handleRemoveField(index)}>
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
