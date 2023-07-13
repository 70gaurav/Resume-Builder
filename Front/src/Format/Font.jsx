import React from 'react'
import { fontHandler } from '../Features/fontSlice'
import { useSelector , useDispatch } from 'react-redux'

function Font() {
    const dispatch = useDispatch()
    const font = useSelector((state) => state.font.font)
    console.log(font)

    const root = document.documentElement;
    root.style.setProperty('--custom-font', font);

  return (
    <div className='font'>

<select value={font} onChange={(e) => dispatch(fontHandler(e.target.value))}>
  <option value="Roboto Slab">Roboto Slab</option>
  <option value="Arial">Arial</option>
  <option value="Times New Roman">Times New Roman</option>
  <option value="Montserrat">Montserrat</option>
  <option value="Poppins">Poppins</option>
  <option value="Noto Sans">Noto Sans</option>
</select>


    </div>
  )
}

export default Font