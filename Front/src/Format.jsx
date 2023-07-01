import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mydetails from './Format/Mydetails';
import Education from './Format/Education';
import Experience from './Format/Experience';
import Skills from './Format/Skills';
import Achievements from './Format/Achievements';
import About from './Format/About';
import Template from './Template';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Format() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case 'My Details':
        return <Mydetails />;
      case 'About Me':
        return <About />;
      case 'Skills & Proficiencies':
        return <Skills />;
      case 'Work Experience':
        return <Experience />;
      case 'Educational Background':
        return <Education />;
      case 'Achievements':
        return <Achievements />;
        
      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <div className="format">
      <div className="sidebar">
        <div className="top">
          <Link to="/create" className="back">
            <ArrowBackIcon fontSize="large" />
          </Link>
          <h1>RESUMIFY</h1>
        </div>
        <div>
          <ul>
            <li>
              <a
                href="#"
                className={selectedOption === 'My Details' ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick('My Details');
                }}
              >
                My Details
              </a>
            </li>
            <li>
              <a
                href="#"
                className={selectedOption === 'About Me' ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick('About Me');
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#"
                className={selectedOption === 'Skills & Proficiencies' ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick('Skills & Proficiencies');
                }}
              >
                Skills & Proficiencies
              </a>
            </li>
            <li>
              <a
                href="#"
                className={selectedOption === 'Work Experience' ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick('Work Experience');
                }}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                className={selectedOption === 'Educational Background' ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick('Educational Background');
                }}
              >
                Educational Background
              </a>
            </li>
            <li>
              <a
                href="#"
                className={selectedOption === 'Achievements' ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick('Achievements');
                }}
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section">{renderComponent()}</div>
      <div className="side-template">
        <Template />
      </div>
    </div>
  );
}

export default Format;
