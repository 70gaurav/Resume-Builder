import React from 'react'
import { useSelector } from 'react-redux'

function Template() {

  const data = useSelector((state) => {
    return state.details
  })

  const about = useSelector((state) => {
    return state.about.about
  })

  const skills = useSelector((state) => {
    return state.skills.skills
  })


  console.log(skills)
  // console.log(about)
  // console.log(data)
  return (
    <div className='template'>
      <div className="details">
        <div className='image'>
          <img src={data.image} alt="" />
        </div>
        <div className='name'>
          <h1>{data.name}</h1>
          <h4>{data.roles.join(" | ")}</h4>
          <h4>Total-Experience:-{data.totalExperience}</h4>
        </div>
      </div>
      <div className='section1'>
        <div className='about'>
          <h3>ABOUT ME</h3>
          <div className='line'>
            <div className='color'></div>
            <p>{about}</p>
          </div>
        </div>
        <div className='work-history'>
          <h3>WORK HISTORY</h3>
          <div className='line'>
            <div className='color'></div>
          </div>
        </div>
      </div>
      <div className='section2'>
        <div className='sklls'>
          <h3>SKILLS</h3>
          <div className='line'>
            <div className='color'></div>
            <ul className='skills-list'>
            {
              skills.map((skill ) => {
                return <li>{skill}</li>
              })
            }
            </ul>

          </div>
        </div>

      </div>
      <div className='section3'>
            <div className='certifications'>
            <h3>CERTIFICATIONS</h3>
          <div className='line'>
            <div className='color'></div>
          </div>
            </div>
            <div className='education'>
            <h3>EDUCATION</h3>
          <div className='line'>
            <div className='color'></div>
          </div>
            </div>
      </div>

    </div>
  )
}

export default Template