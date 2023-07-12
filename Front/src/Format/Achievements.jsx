import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { addCertificationInput, certificationInput, removeCertificationInput } from "../Features/certificationSlice"
import { useDispatch, useSelector } from 'react-redux';

function Achievements() {

  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.certification.certificates
  })


  const handleAddInput = () => {
    dispatch(addCertificationInput());
  };

  const handleRemoveSkillsInput = (index) => {
    dispatch(removeCertificationInput(index));
  };

  const handleSkillsInputChange = (index, e) => {
    const { value } = e.target
    dispatch(certificationInput({ index, value }));
  };
  return (
    <div id='skills-main' >
      <h3>Add Certificates</h3>
      {data.map((certificate, index) => (

        <div className="input" key={index}>
          <input
            type="text"
            placeholder="Certification In"
            onChange={(e) => { handleSkillsInputChange(index, e); }}
          />
          {index > 0 && (
            <a href="#" className="remove" onClick={() => { handleRemoveSkillsInput(index); }}>
              <RemoveCircleOutlineIcon />
            </a>
          )}
        </div>
      ))}
      <a href="#" onClick={handleAddInput}>
        <AddCircleOutlineIcon />
      </a>
    </div>
  )
}

export default Achievements