import React from 'react'
import {aboutHandler} from "../Features/aboutSlice"
import { useDispatch } from 'react-redux'


function About() {
  const dispatch = useDispatch()
  return (
    <div>
      <h3>ABOUT ME</h3>
      <textarea name="" id="" cols="30" rows="10" onChange={(e) => {dispatch(aboutHandler(e.target.value))}}></textarea>
    </div>
  )
}

export default About