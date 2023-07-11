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
        {/* <div className="top">
         
          <h1 className='logo'>RESU<span>MIFY</span></h1>
        </div> */}
        <div>
          <ul>
            <li>
            <Link to="/create" className="back">
            <HomeIcon fontSize="large" />
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
                <AccountBoxIcon fontSize="large"/>
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
                <InfoIcon  fontSize="large"/>
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
                <LaptopMacIcon fontSize="large"/>
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
                <WorkHistoryIcon fontSize='large'/>
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
                <SchoolIcon fontSize="large"/>
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
                <EmojiEventsIcon fontSize="large"/>
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
