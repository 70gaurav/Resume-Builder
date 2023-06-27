import React from 'react'
import { useSelector } from 'react-redux'

function Template() {

const data = useSelector((state) => {
  return state.details
})
console.log(data)
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
          </div>
        </div>
        <div className='work-history'>
          <h3>WORK HISTORY</h3>
          <div className='line'>
            <div className='color'></div>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Template