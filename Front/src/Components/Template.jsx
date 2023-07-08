import React from 'react';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';

function Template() {
  const data = useSelector((state) => state.details);
  const about = useSelector((state) => state.about.about);
  const skills = useSelector((state) => state.skills.skills);
  const experience = useSelector((state) => state.experience.fields);

  const downloadPDF = () => {
    const element = document.getElementById('template');
    const opt = {
      margin: 0,
      filename: `${data.name}'s resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className='template' id='template'>
      <div className='details'>
        <div className='image'>
          <img src={data.image} alt='' />
        </div>
        <div className='name'>
          <h1>{data.name}</h1>
          <h4>{data.roles.join(' | ')}</h4>
          <h4>Total-Experience: {data.totalExperience}</h4>
        </div>
      </div>
      <div className='section1'>
        <div className='about'>
          <h3 contentEditable>ABOUT ME</h3>
          <div className='line'>
            <div className='color'></div>
            <p>{about}</p>
          </div>
        </div>
        <div className='work-history'>
          <h3 contentEditable>WORK HISTORY</h3>
          <div className='line'>
            <div className='color'></div>
            {experience.map((element, index) => (
              <div key={index}>
                <h3>{element.role}</h3>
                <h5>{element.company}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='section2'>
        <div className='skills'>
          <h3 contentEditable>SKILLS</h3>
          <div className='line'>
            <div className='color'></div>
            <ul className='skills-list'>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='section3'>
        <div className='certifications'>
          <h3 contentEditable>CERTIFICATIONS</h3>
          <div className='line'>
            <div className='color'></div>
          </div>
        </div>
        <div className='education'>
          <h3 contentEditable>EDUCATION</h3>
          <div className='line'>
            <div className='color'></div>
          </div>
        </div>
      </div>
      <div className='download'>
        <button onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default Template;
