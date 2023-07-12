import React from 'react';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';
import './templates.css';

function Template() {
  const data = useSelector((state) => state.details);
  const about = useSelector((state) => state.about.about);
  const skills = useSelector((state) => state.skills.skills);
  const experience = useSelector((state) => state.experience.fields);
  const education = useSelector((state) => state.education.fields);
  const isDownloading = useSelector((state) => state.download.isDownloading)

  const downloadPDF = () => {
    dispatch(startDownload());

    const element = document.getElementById("#template1");
    const opt = {
      margin: 0,
      filename: `${data.name}'s resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();

    setTimeout(() => {
      dispatch(finishDownload());
    }, 2000); // Assuming the download takes approximately 2 seconds
  };

  return (
    <div id="template1">
      <div className="template1-details">
        <div className="template1-image">
          <img src={data.image} alt="" />
        </div>
        <div className="template1-info">
          <h1>{data.name}</h1>
          <h4>{data.roles.join(' | ')}</h4>
          <h4>Total-Experience: {data.totalExperience}</h4>
        </div>
      </div>
      <div className="template1-main">
        <div className="template1-left">
          <div className="about">
            <h3 contentEditable>ABOUT ME</h3>
            <div className="line">
              <div className="color"></div>
            </div>
            <p>{about}</p>
          </div>
          <div className="skills">
            <h3 contentEditable>SKILLS</h3>
            <div className="line">
              <div className="color"></div>
            </div>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          </div>
          <div className="certifications">
            <h3 contentEditable>CERTIFICATIONS</h3>
            <div className="line">
              <div className="color"></div>
            </div>
          </div>
        </div>
        <div className="template1-right">
          <div className="work-history">
            <h3 contentEditable>WORK HISTORY</h3>
            <div className="line">
              <div className="color"></div>
            </div>
            {experience.map((element, index) => (
              <div key={index} className='gap'>
                <h3>{element.role}</h3>
                <h5>{element.company}</h5>
                {element.startDate ?
                  <h5>{element.startDate + " " + "to" + " "} {element.endDate}</h5> : ""
                }
              </div>
            ))}
          </div>

          <div className="education">
            <h3 contentEditable>EDUCATION</h3>
            <div className="line">
              <div className="color"></div>
            </div>
            {education.map((element, index) => (
              <div key={index} className='gap'>
                <h3>{element.level}</h3>
                <h5>{element.organization}</h5>
                {element.yearOfPassing ?
                  <h5>{element.yearOfPassing}</h5> : ""
                }
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="download">
        <button onClick={downloadPDF} disabled={isDownloading}>
          {isDownloading ? 'Downloading...' : 'Download PDF'}
        </button>
      </div>
    </div>
  );
}

export default Template;
