import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Mydetails from './Format/Mydetails'
import Education from "./Format/Education"
import Experience from "./Format/Experience"
import Skills from "./Format/Skills"
import Achievements from "./Format/Achievements"
import About from "./Format/About"
import Template from './Template'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Format() {
  const [option, selectedOption] = useState(null)
  console.log(option)

    const renderComponent = () => {
      switch (option){
        case "My Details" : 
        return <Mydetails />;
        case "About Me" : 
        return <About />;
        case "Skills & Proficiencies" : 
        return <Skills />;
        case "Work Experience" : 
        return <Experience />;
        case "Educational Background" : 
        return <Education />;
        case "Achievements" : 
        return <Achievements />;
        default : 
        return "select a section to edit";
      }
    }
  

  return (
    <div className='format'>
      <div className='sidebar'>
        <div className='top'>
          <Link to={"/"} className='back'><ArrowBackIcon fontSize='large'/></Link>
          <h1>RESUME BUILDER</h1>
        </div>
        <div>
          <ul>
            <li><a href="" onClick={(e) => { e.preventDefault(); selectedOption("My Details") }}>My Details</a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); selectedOption("About Me") }}>About Me</a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); selectedOption("Skills & Proficiencies") }}>Skills & Proficiencies</a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); selectedOption("Work Experience") }}>Work Experience</a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); selectedOption("Educational Background") }}>Educational Background</a></li>
            <li><a href="" onClick={(e) => { e.preventDefault(); selectedOption("Achievements") }}>Achievements</a></li>
            {/* <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption(7);renderComponent()}}>Memberships</a></li> */}
          </ul>
        </div>
     

      </div>
      <div className='section'>
      {
       renderComponent()

        }
      </div>
      <div className='side-template'>
        <Template/>

      </div>
    </div>
  )
}

export default Format