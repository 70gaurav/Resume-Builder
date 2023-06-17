import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Mydetails from './Format/Mydetails'
import Education from "./Format/Education"
import Experience from "./Format/Experience"
import Skills from "./Format/Skills"
import Achievements from "./Format/Achievements"
import About from "./Format/About"

function Format() {
  const [option , selectedOption] = useState(null)
  console.log(option)

  // const renderComponent = () => {
  //   switch (selectedOption){
  //     case "My Details" : 
  //     return <Mydetails/>;
  //     case "About Me" : 
  //     return <About />;
  //     case "Skills & Proficiencies" : 
  //     return <Skills />;
  //     case "Work Experience" : 
  //     return <Experience />;
  //     case "Educational Background" : 
  //     return <Education />;
  //     case "Achievements" : 
  //     return <Achievements />;
  //     default : 
  //     return null;
  //   }
  // }
  return (
  <>
    <div className='format'>
        <div>
            <Link to={"/"}>Back</Link>
            <h1>RESUME BUILDER</h1>
        </div>
        <div>
            <ul>
                <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption("My Details");renderComponent()}}>My Details</a></li>
                <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption("About Me");renderComponent()}}>About Me</a></li>
                <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption("Skills & Proficiencies");renderComponent()}}>Skills & Proficiencies</a></li>
                <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption("Work Experience");renderComponent()}}>Work Experience</a></li>
                <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption("Educational Background");renderComponent()}}>Educational Background</a></li>
                <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption("Achievements");renderComponent()}}>Achievements</a></li>
                {/* <li><a href="" onClick={(e) => {e.preventDefault() ; selectedOption(7);renderComponent()}}>Memberships</a></li> */}
            </ul>
        </div>

    </div>
    </>
  )
}

export default Format