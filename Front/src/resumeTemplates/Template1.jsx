import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './templates.css';
function Template() {
  const data = useSelector((state) => state.details);
  const about = useSelector((state) => state.about.about);
  const skills = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch()
  const education = useSelector((state) => state.education.fields);
  const experience = useSelector((state) => state.experience.fields);
  const certificates = useSelector((state) => state.certification.certificates)
  const isDownloading = useSelector((state) => state.download.isDownloading)
  const font = useSelector((state) => state.font.font)

  const styles = {
   fontFamily:font 
  };

  return (
    <div id="template1" style={styles}>
      <div className="template1-details">
        <div className="template1-image">
          <img src={data.image} alt="" />
        </div>
        <div className="template1-info">
          <h1>{data.name}</h1>
          <h4>{data.role}</h4>
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
            {
              certificates.map((certificate , index) => {
                return(
                  <h4 key={index}>{certificate}</h4>
                )
              })
            }

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

      {/* <div className="download">
        <button onClick={downloadPDF} disabled={isDownloading}>
          {isDownloading ? 'Downloading...' : 'Download PDF'}
        </button>
      </div> */}
    </div>
  );
}

export default Template;
