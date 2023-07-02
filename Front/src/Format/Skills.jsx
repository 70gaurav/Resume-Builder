import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { skillsHandler, addSkillsInput, removeSkillsInput } from "../slice/skillsSlice"
import { useDispatch, useSelector } from 'react-redux';

function Skills() {

  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.skills
  })

  console.log(data)

  const handleAddSkillsInput = () => {
    dispatch(addSkillsInput());
  };

  const handleRemoveSkillsInput = (index) => {
    dispatch(removeSkillsInput(index));
  };

  const handleSkillsInputChange = (index, e) => {
    const { value } = e.target
    dispatch(skillsHandler({ index, value }));
  };
  return (
    <div id='skills-main' >
      <h3>Skills</h3>
      {data.skills.map((skill, index) => (

        <div className="input" >
          <input
            type="text"
            placeholder="Enter Your skill"
            value={skill}
            onChange={(e) => { handleSkillsInputChange(index, e); }}
          />
          {index > 0 && (
            <a href="#" className="remove" onClick={() => { handleRemoveSkillsInput(index); }}>
              <RemoveCircleOutlineIcon />
            </a>
          )}
        </div>
      ))}
      <a href="#" onClick={handleAddSkillsInput}>
        <AddCircleOutlineIcon />
      </a>
    </div>
  )
}

export default Skills