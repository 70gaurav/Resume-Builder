import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mydetails from '../Format/Mydetails';
import Education from '../Format/Education';
import Typewriter from 'typewriter-effect';
import html2pdf from 'html2pdf.js';
import Experience from '../Format/Experience';
import Skills from '../Format/Skills';
import Achievements from '../Format/Achievements';
import About from '../Format/About';
import Template from '../resumeTemplates/Template1';
import HomeIcon from '@mui/icons-material/Home';
import { useSelector, useDispatch } from 'react-redux';
import { startDownload, finishDownload } from "../Features/downloadSlice"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InfoIcon from '@mui/icons-material/Info';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import Font from '../Format/Font';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

function Format() {
  const dispatch = useDispatch();
  const download = useSelector((state) => state.download.isDownloading);
  const name = useSelector((state) => state.details.name);
  const about = useSelector((state) => state.details.about);
  const skills = useSelector((state) => state.skills.skills);
  const experience = useSelector((state) => state.experience.experience);
  const education = useSelector((state) => state.education.education);
  const achievements = useSelector((state) => state.certification.certificates);

  const [selectedOption, setSelectedOption] = useState(null);

  const downloadPDF = () => {
    dispatch(startDownload());

    const element = document.getElementById("template1");
    const opt = {
      margin: 0,
      filename: `${name}'s resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();

    setTimeout(() => {
      dispatch(finishDownload());
    }, 2000); // Assuming the download takes approximately 2 seconds

    // Save resume data to the database
    const resumeData = {
      name,
      about,
      skills,
      experience,
      education,
      achievements,
    };

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.post('/api/resume', resumeData, config)
      .then((response) => {
        console.log('Resume data saved:', response.data);
      })
      .catch((error) => {
        console.error('Failed to save resume data:', error);
      });
  };

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
        return (
          <div className="type">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("<h1>Select a <span>SECTION</span> <br/> to <span>EDIT</span>.</h1>")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className="format">
      <div className="sidebar">
        <Link to="/create" className="home">
          <HomeIcon fontSize="large" />
          <span className="name">Home</span>
        </Link>
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
              >
                <EmojiEventsIcon fontSize="large" />
                <span className="name">Achievements</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="" onClick={(e) => { e.preventDefault(); downloadPDF(); }} className="home">
          {download ? <FileDownloadDoneIcon fontSize="large" /> : <DownloadForOfflineIcon fontSize="large" />}
          <span className="name">Download</span>
        </a>
      </div>

      <div className="content">
        <div className="section">{renderComponent()}</div>
        <div className="side-template">
          <Template />
        </div>
      </div>
    </div>
  );
}

export default Format;
