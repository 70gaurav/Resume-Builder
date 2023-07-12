import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mydetails from '../Format/Mydetails';
import Education from '../Format/Education';
import Experience from '../Format/Experience';
import Skills from '../Format/Skills';
import Achievements from '../Format/Achievements';
import About from '../Format/About';
import Template from '../resumeTemplates/Template1';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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
        <div>
          <ul>
            <li>
              <Link to="/create" className="back">
                <HomeIcon fontSize="large" />
                <span className="name">Home</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={selectedOption === 'My Details' ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick('My Details');
                }}
              >
                <AccountBoxIcon fontSize="large" />
                <span className="name">My Details</span>
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
                data-name="About Me"
              >
                <InfoIcon fontSize="large" />
                <span className="name">About Me</span>
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
                data-name="Skills & Proficiencies"
              >
                <LaptopMacIcon fontSize="large" />
                <span className="name">Skills & Proficiencies</span>
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
                data-name="Work Experience"
              >
                <WorkHistoryIcon fontSize="large" />
                <span className="name">Work Experience</span>
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
                data-name="Educational Background"
              >
                <SchoolIcon fontSize="large" />
                <span className="name">Educational Background</span>
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
                data-name="Achievements"
              >
                <EmojiEventsIcon fontSize="large" />
                <span className="name">Achievements</span>
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
